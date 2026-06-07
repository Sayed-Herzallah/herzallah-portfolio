import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0d0d11",
          borderRadius: "36px",
        }}
      >
        <svg width="70" height="70" viewBox="0 0 100 100" fill="none">
          <defs>
            <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
          <rect x="28" y="20" width="10" height="60" rx="5" fill="url(#g)" />
          <rect x="62" y="20" width="10" height="60" rx="5" fill="url(#g)" />
          <path d="M33 40 L67 60" stroke="url(#g)" strokeWidth="6" strokeLinecap="round" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
