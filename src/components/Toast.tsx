"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import { CheckCircle2, AlertTriangle, AlertCircle, Info, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export type ToastType = "success" | "error" | "warning" | "info";

export interface ToastItem {
  id: string;
  message: string;
  type: ToastType;
  duration?: number;
}

interface ToastContextType {
  toast: (message: string, type?: ToastType, duration?: number) => void;
  success: (message: string, duration?: number) => void;
  error: (message: string, duration?: number) => void;
  warning: (message: string, duration?: number) => void;
  info: (message: string, duration?: number) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const toast = useCallback((message: string, type: ToastType = "info", duration = 3000) => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, message, type, duration }]);
    
    const timer = setTimeout(() => {
      removeToast(id);
    }, duration);

    return () => clearTimeout(timer);
  }, [removeToast]);

  const success = useCallback((message: string, duration?: number) => toast(message, "success", duration), [toast]);
  const error = useCallback((message: string, duration?: number) => toast(message, "error", duration), [toast]);
  const warning = useCallback((message: string, duration?: number) => toast(message, "warning", duration), [toast]);
  const info = useCallback((message: string, duration?: number) => toast(message, "info", duration), [toast]);

  return (
    <ToastContext.Provider value={{ toast, success, error, warning, info }}>
      {children}
      <ToastContainer toasts={toasts} removeToast={removeToast} />
    </ToastContext.Provider>
  );
}

function ToastContainer({ toasts, removeToast }: { toasts: ToastItem[]; removeToast: (id: string) => void }) {
  return (
    <div className="fixed z-[9999] flex flex-col gap-3 pointer-events-none select-none max-w-[95vw] sm:max-w-sm w-full px-4 bottom-6 left-1/2 -translate-x-1/2 md:top-6 md:bottom-auto"
    >
      <AnimatePresence mode="popLayout">
        {toasts.map((toast) => (
          <ToastCard key={toast.id} toast={toast} onClose={() => removeToast(toast.id)} />
        ))}
      </AnimatePresence>
    </div>
  );
}

const typeStyles = {
  success: {
    bg: "rgba(16, 185, 129, 0.08)",
    border: "border-emerald-500/30",
    shadow: "shadow-emerald-950/20",
    text: "text-emerald-400",
    barBg: "bg-emerald-500",
    icon: CheckCircle2,
  },
  error: {
    bg: "rgba(239, 68, 68, 0.08)",
    border: "border-rose-500/30",
    shadow: "shadow-rose-950/20",
    text: "text-rose-400",
    barBg: "bg-rose-500",
    icon: AlertCircle,
  },
  warning: {
    bg: "rgba(245, 158, 11, 0.08)",
    border: "border-amber-500/30",
    shadow: "shadow-amber-950/20",
    text: "text-amber-400",
    barBg: "bg-amber-500",
    icon: AlertTriangle,
  },
  info: {
    bg: "rgba(59, 130, 246, 0.08)",
    border: "border-blue-500/30",
    shadow: "shadow-blue-950/20",
    text: "text-blue-400",
    barBg: "bg-blue-500",
    icon: Info,
  },
};

function ToastCard({ toast, onClose }: { toast: ToastItem; onClose: () => void }) {
  const styles = typeStyles[toast.type];
  const Icon = styles.icon;
  const duration = toast.duration || 3000;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: -20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9, y: -20, transition: { duration: 0.15 } }}
      transition={{ type: "spring", stiffness: 350, damping: 25 }}
      className={`glass-card ${styles.bg} ${styles.border} ${styles.shadow} pointer-events-auto rounded-2xl p-4 flex items-start gap-3 relative overflow-hidden border shadow-xl w-full`}
      style={{
        boxShadow: "0 20px 40px -15px rgba(0, 0, 0, 0.5)"
      }}
    >
      {/* Visual left colored stripe */}
      <div className={`absolute top-0 left-0 bottom-0 w-1 ${styles.barBg}`} />

      {/* State Icon */}
      <div className={`${styles.text} shrink-0 mt-0.5`}>
        <Icon className="w-5 h-5" />
      </div>

      {/* Message Text */}
      <div className="flex-1 text-sm font-medium text-gray-200 pr-2 break-words leading-relaxed select-text">
        {toast.message}
      </div>

      {/* Close Button */}
      <button
        onClick={onClose}
        className="text-gray-400 hover:text-white transition-colors shrink-0 cursor-pointer p-0.5 rounded-lg hover:bg-white/5"
        aria-label="Close notification"
      >
        <X className="w-4 h-4" />
      </button>

      {/* Progress Bar timer animation */}
      <motion.div
        initial={{ width: "100%" }}
        animate={{ width: "0%" }}
        transition={{ duration: duration / 1000, ease: "linear" }}
        className={`absolute bottom-0 left-0 h-0.5 ${styles.barBg} opacity-60`}
      />
    </motion.div>
  );
}
