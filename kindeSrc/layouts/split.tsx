"use server";

import React from "react";

type SplitLayoutProps = {
  children: React.ReactNode;
};

export const SplitLayout: React.FC<SplitLayoutProps> = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      {/* Left side: login form */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "2rem",
        }}
      >
        {/* Logo */}
        <div style={{ marginBottom: "2.5rem" }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 32" width="180" height="32">
            <text x="0" y="24" fontFamily="Manrope, system-ui, sans-serif" fontSize="24" fontWeight="400" fill="#5C8A73">Focused</text>
            <text x="93" y="24" fontFamily="Manrope, system-ui, sans-serif" fontSize="24" fontWeight="700" fill="#C45A7D">Zen</text>
          </svg>
        </div>
        {children}
      </div>

      {/* Right side: accent panel */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #1a2e23 0%, #0f1a14 50%, #1a1520 100%)",
          borderRadius: "1.5rem",
          margin: "0.75rem",
          padding: "3rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle glow accent */}
        <div
          style={{
            position: "absolute",
            top: "30%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(92, 138, 115, 0.15) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <p
          style={{
            fontSize: "1.5rem",
            fontWeight: 500,
            color: "rgba(255, 255, 255, 0.85)",
            textAlign: "center",
            lineHeight: 1.6,
            maxWidth: "360px",
            position: "relative",
            zIndex: 1,
          }}
        >
          Structured permission to be fully present.
        </p>
        <p
          style={{
            fontSize: "0.9rem",
            color: "rgba(255, 255, 255, 0.35)",
            marginTop: "1.5rem",
            position: "relative",
            zIndex: 1,
          }}
        >
          Relief. Presence. Clarity.
        </p>
      </div>
    </div>
  );
};
