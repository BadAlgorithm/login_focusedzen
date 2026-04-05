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
        minHeight: "100dvh",
        width: "100%",
      }}
    >
      {/* Left side: login form */}
      <div
        data-fz-panel="left"
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "3rem",
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

      {/* Right side: garden image panel */}
      <div
        data-fz-panel="right"
        style={{
          flex: 1,
          position: "relative",
          overflow: "hidden",
          borderRadius: "1.5rem",
          margin: "0.75rem",
          border: "1px solid #2A2B2B",
          background: "linear-gradient(135deg, #1a2e23 0%, #0f1a14 50%, #1a1520 100%)",
        }}
      >
        {/* Background image */}
        <img
          className="panel-image"
          src="https://focusedzen.com/login_assets/garden-entrance.webp"
          alt=""
          style={{
            position: "absolute",
            inset: "0",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center 35%",
            zIndex: 0,
          }}
        />

        {/* Vignette overlay */}
        <div
          style={{
            position: "absolute",
            inset: "0",
            zIndex: 1,
            background: [
              "radial-gradient(ellipse at center 40%, transparent 30%, rgba(22, 23, 23, 0.7) 100%)",
              "linear-gradient(to top, rgba(22, 23, 23, 0.85) 0%, transparent 40%)",
              "linear-gradient(to bottom, rgba(22, 23, 23, 0.4) 0%, transparent 25%)",
            ].join(", "),
            boxShadow: "inset 0 0 80px 20px rgba(22, 23, 23, 0.5)",
            pointerEvents: "none",
          }}
        />

        {/* Subtle sage glow over gate area */}
        <div
          style={{
            position: "absolute",
            inset: "0",
            zIndex: 2,
            background: "radial-gradient(ellipse at 50% 35%, rgba(92, 138, 115, 0.08) 0%, transparent 60%)",
            pointerEvents: "none",
          }}
        />

        {/* Bottom content: enso logo */}
        <div
          style={{
            position: "absolute",
            bottom: "2.5rem",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 3,
          }}
        >
          <img
            className="panel-logo"
            src="https://focusedzen.com/login_assets/enso-logo.png"
            alt=""
            style={{
              width: "64px",
              height: "64px",
              opacity: 0.3,
            }}
          />
        </div>
      </div>
    </div>
  );
};
