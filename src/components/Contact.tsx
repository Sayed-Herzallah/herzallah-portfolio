"use client";

import React, { useState } from "react";
import { Mail, MapPin, Send, CheckCircle2, ArrowRight, Copy, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";

// Custom premium SVG WhatsApp Icon
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    width="1em"
    height="1em"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.067 2.877 1.215 3.076.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.46h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", subject: "", message: "" });
  const [touched, setTouched] = useState({ name: false, email: false, subject: false, message: false });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedWhatsApp, setCopiedWhatsApp] = useState(false);

  // Clean phone number to get whatsapp-compatible digits
  const getWhatsAppNumber = (phoneStr: string) => {
    return phoneStr.replace(/\D/g, "");
  };

  // Gmail Web Composer fallback redirect link
  const getGmailLink = (emailStr: string) => {
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${emailStr}`;
  };

  const copyToClipboard = (text: string, type: "email" | "whatsapp", e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedWhatsApp(true);
      setTimeout(() => setCopiedWhatsApp(false), 2000);
    }
  };

  // Field validation logic
  const validateField = (name: string, value: string) => {
    let errorMsg = "";
    if (name === "name") {
      if (!value.trim()) {
        errorMsg = "Name is required";
      } else if (value.trim().length < 2) {
        errorMsg = "Name must be at least 2 characters";
      }
    } else if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value.trim()) {
        errorMsg = "Email is required";
      } else if (!emailRegex.test(value.trim())) {
        errorMsg = "Please enter a valid email address";
      }
    } else if (name === "subject") {
      if (!value.trim()) {
        errorMsg = "Subject is required";
      } else if (value.trim().length < 3) {
        errorMsg = "Subject must be at least 3 characters";
      }
    } else if (name === "message") {
      if (!value.trim()) {
        errorMsg = "Message is required";
      } else if (value.trim().length < 10) {
        errorMsg = "Message must be at least 10 characters";
      }
    }
    return errorMsg;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
    
    if (touched[name as keyof typeof touched]) {
      const errorMsg = validateField(name, value);
      setErrors(prev => ({ ...prev, [name]: errorMsg }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const errorMsg = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: errorMsg }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Trigger validation for all fields on submission
    const nameError = validateField("name", formState.name);
    const emailError = validateField("email", formState.email);
    const subjectError = validateField("subject", formState.subject);
    const messageError = validateField("message", formState.message);

    setErrors({
      name: nameError,
      email: emailError,
      subject: subjectError,
      message: messageError
    });

    setTouched({
      name: true,
      email: true,
      subject: true,
      message: true
    });

    // Check if there are any errors before proceeding
    if (nameError || emailError || subjectError || messageError) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setIsSubmitted(true);
        setFormState({ name: "", email: "", subject: "", message: "" });
        setErrors({ name: "", email: "", subject: "", message: "" });
        setTouched({ name: false, email: false, subject: false, message: false });
      } else {
        alert(data.message || data.details?.join("\n") || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      alert("Something went wrong. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 border-t border-card-border relative">
      {/* Background glow overlay */}
      <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] rounded-full bg-primary/5 glow-spot" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>06 // Contact</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
            Get In Touch
          </h2>
          <p className="text-base text-zinc-300 mt-2 max-w-lg">
            Have an exciting opportunity, a project proposal, or just want to chat? Drop a message below!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Info Card Column */}
          <div className="lg:col-span-5 flex flex-col justify-start gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">
                Contact Information
              </h3>
              <p className="text-base text-zinc-200 leading-relaxed max-w-sm">
                Feel free to reach out via email or WhatsApp. I usually respond within 24 hours.
              </p>
            </div>

            <div className="space-y-4">
              {/* Email Card with Split Click Targets */}
              <div className="relative group flex items-center gap-4 p-4 rounded-2xl bg-white/[0.01] hover:bg-white/[0.03] border border-white/[0.04] hover:border-white/10 transition-all duration-300 pr-28">
                {/* Clickable Icon */}
                <a
                  href={getGmailLink(portfolioData.email)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary hover:scale-110 transition-transform cursor-pointer"
                  title="Click to Send Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
                
                {/* Clickable Text Details */}
                <a
                  href={getGmailLink(portfolioData.email)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-w-0 flex-1 cursor-pointer"
                  title="Click to Send Email"
                >
                  <div className="text-sm text-zinc-400 font-medium">Email Me</div>
                  <div className="text-base font-semibold text-gray-300 hover:text-white transition-colors truncate">
                    {portfolioData.email}
                  </div>
                </a>

                {/* Sibling Buttons (No Nested Click Bugs) */}
                <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2 z-20">
                  <button
                    onClick={(e) => copyToClipboard(portfolioData.email, "email", e)}
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all cursor-pointer"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                  <a
                    href={getGmailLink(portfolioData.email)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all cursor-pointer flex items-center justify-center"
                    title="Send Email"
                  >
                    <Send className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* WhatsApp Card with Split Click Targets */}
              <div className="relative group flex items-center gap-4 p-4 rounded-2xl bg-white/[0.01] hover:bg-white/[0.03] border border-white/[0.04] hover:border-white/10 transition-all duration-300 pr-28">
                {/* Clickable Icon */}
                <a
                  href={`https://wa.me/${getWhatsAppNumber(portfolioData.phone)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 hover:scale-110 transition-transform cursor-pointer"
                  title="Click to Chat on WhatsApp"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                </a>

                {/* Clickable Text Details */}
                <a
                  href={`https://wa.me/${getWhatsAppNumber(portfolioData.phone)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-w-0 flex-1 cursor-pointer"
                  title="Click to Chat on WhatsApp"
                >
                  <div className="text-sm text-zinc-400 font-medium">WhatsApp Me</div>
                  <div className="text-base font-semibold text-gray-300 hover:text-white transition-colors truncate">
                    {portfolioData.phone}
                  </div>
                </a>

                {/* Sibling Buttons (No Nested Click Bugs) */}
                <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2 z-20">
                  <button
                    onClick={(e) => copyToClipboard(portfolioData.phone, "whatsapp", e)}
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all cursor-pointer"
                    title="Copy WhatsApp Number"
                  >
                    {copiedWhatsApp ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                  <a
                    href={`https://wa.me/${getWhatsAppNumber(portfolioData.phone)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all cursor-pointer flex items-center justify-center"
                    title="Open WhatsApp Chat"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Location Card */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.01] border border-white/[0.04]">
                <div className="w-10 h-10 rounded-xl bg-accent-teal/10 flex items-center justify-center text-accent-teal">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-sm text-zinc-400 font-medium">Location</div>
                  <div className="text-base font-semibold text-gray-300 truncate">
                    {portfolioData.location}
                  </div>
                </div>
              </div>

              <div className="pt-2 text-sm text-gray-500">
                * Secure communication enabled.
              </div>
            </div>
          </div>

          {/* Form Column with Absolute Validation labels to avoid expansions */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-6 md:p-8 border border-white/[0.06] relative overflow-hidden">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="py-12 flex flex-col items-center justify-center text-center space-y-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-2">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                    <p className="text-base text-gray-400 max-w-sm">
                      Thank you for reaching out. I have received your message and will get back to you shortly.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-white transition-colors pt-4 cursor-pointer"
                    >
                      Send another message <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-2" noValidate>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5">
                      {/* Name input */}
                      <div className="relative pb-6">
                        <label htmlFor="name" className="text-sm font-semibold text-zinc-300 block mb-2">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formState.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={`w-full bg-white/[0.02] border focus:ring-1 rounded-xl px-4 py-3 text-base text-white placeholder-gray-600 outline-none transition-all ${
                            touched.name && errors.name
                              ? "border-red-500/50 focus:border-red-500/80 focus:ring-red-500/20"
                              : "border-white/[0.08] focus:border-primary/50 focus:ring-primary/30"
                          }`}
                          placeholder="John Doe"
                        />
                        {touched.name && errors.name && (
                          <span className="text-red-400 text-sm absolute left-0 bottom-0">
                            {errors.name}
                          </span>
                        )}
                      </div>

                      {/* Email input */}
                      <div className="relative pb-6">
                        <label htmlFor="email" className="text-sm font-semibold text-zinc-300 block mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formState.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={`w-full bg-white/[0.02] border focus:ring-1 rounded-xl px-4 py-3 text-base text-white placeholder-gray-600 outline-none transition-all ${
                            touched.email && errors.email
                              ? "border-red-500/50 focus:border-red-500/80 focus:ring-red-500/20"
                              : "border-white/[0.08] focus:border-primary/50 focus:ring-primary/30"
                          }`}
                          placeholder="john@example.com"
                        />
                        {touched.email && errors.email && (
                          <span className="text-red-400 text-sm absolute left-0 bottom-0">
                            {errors.email}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Subject input */}
                    <div className="relative pb-6">
                      <label htmlFor="subject" className="text-sm font-semibold text-zinc-300 block mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        value={formState.subject}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full bg-white/[0.02] border focus:ring-1 rounded-xl px-4 py-3 text-base text-white placeholder-gray-600 outline-none transition-all ${
                          touched.subject && errors.subject
                            ? "border-red-500/50 focus:border-red-500/80 focus:ring-red-500/20"
                            : "border-white/[0.08] focus:border-primary/50 focus:ring-primary/30"
                        }`}
                        placeholder="Project Discussion"
                      />
                      {touched.subject && errors.subject && (
                        <span className="text-red-400 text-sm absolute left-0 bottom-0">
                          {errors.subject}
                        </span>
                      )}
                    </div>

                    {/* Message input */}
                    <div className="relative pb-6">
                      <label htmlFor="message" className="text-sm font-semibold text-zinc-300 block mb-2">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formState.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full bg-white/[0.02] border focus:ring-1 rounded-xl px-4 py-3 text-base text-white placeholder-gray-600 outline-none transition-all resize-none ${
                          touched.message && errors.message
                            ? "border-red-500/50 focus:border-red-500/80 focus:ring-red-500/20"
                            : "border-white/[0.08] focus:border-primary/50 focus:ring-primary/30"
                        }`}
                        placeholder="Tell me about your project..."
                      />
                      {touched.message && errors.message && (
                        <span className="text-red-400 text-sm absolute left-0 bottom-0">
                          {errors.message}
                        </span>
                      )}
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full inline-flex items-center justify-center gap-2 text-base font-semibold text-black bg-white hover:bg-gray-200 disabled:bg-gray-700 disabled:text-gray-400 transition-all duration-200 py-3.5 rounded-xl cursor-pointer shadow-lg shadow-white/5 active:scale-[0.99]"
                      >
                        {isSubmitting ? (
                          <span>Sending...</span>
                        ) : (
                          <>
                            <span>Send Message</span>
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
