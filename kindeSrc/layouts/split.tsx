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
        overflow: "hidden",
      }}
    >
      {/* Left side: login form - overlaps image */}
      <div
        data-fz-panel="left"
        style={{
          flex: "0 0 500px",
          maxWidth: "500px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "3rem 3rem",
          position: "relative",
          zIndex: 2,
          background: "#161717",
          borderRadius: "0 24px 24px 0",
          boxShadow: "8px 0 32px -4px rgba(0, 0, 0, 0.5), 2px 0 8px -2px rgba(0, 0, 0, 0.3)",
        }}
      >
        {/* Logo: enso circle + font-based FocusedZen */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.625rem",
            marginBottom: "2.5rem",
          }}
        >
          <img
            src="https://cdn.focusedzen.com/login/enso-logo.png"
            alt=""
            style={{
              width: "44px",
              height: "44px",
            }}
          />
          <span style={{ display: "flex", alignItems: "baseline" }}>
            <span
              style={{
                fontFamily: "'Manrope', system-ui, sans-serif",
                fontSize: "1.5rem",
                fontWeight: 500,
                color: "#5C8A73",
              }}
            >
              Focused
            </span>
            <span
              style={{
                fontFamily: "'Manrope', system-ui, sans-serif",
                fontSize: "1.5rem",
                fontWeight: 700,
                color: "#C45A7D",
              }}
            >
              Zen
            </span>
          </span>
        </div>
        {children}
      </div>

      {/* Right side: garden image - tucked under left panel */}
      <div
        data-fz-panel="right"
        style={{
          flex: 1,
          position: "relative",
          overflow: "hidden",
          marginLeft: "-32px",
          zIndex: 1,
          background: "#1a2e23",
        }}
      >
        {/* Background image */}
        <img
          className="panel-image"
          src="https://cdn.focusedzen.com/login/garden-entrance-2x.webp"
          alt=""
          style={{
            position: "absolute",
            inset: "0",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center 30%",
            zIndex: 0,
          }}
        />

        {/* Vignette overlay - stronger left edge for panel overlap */}
        <div
          style={{
            position: "absolute",
            inset: "0",
            zIndex: 1,
            background: [
              "linear-gradient(to right, rgba(22, 23, 23, 0.85) 0%, rgba(22, 23, 23, 0.4) 12%, transparent 35%)",
              "linear-gradient(to top, rgba(22, 23, 23, 0.5) 0%, transparent 40%)",
              "linear-gradient(to bottom, rgba(22, 23, 23, 0.2) 0%, transparent 15%)",
            ].join(", "),
            pointerEvents: "none",
          }}
        />

        {/* Enso watermark - bottom right */}
        <img
          src="https://cdn.focusedzen.com/login/enso-logo.png"
          alt=""
          style={{
            position: "absolute",
            bottom: "2rem",
            right: "2rem",
            width: "48px",
            height: "48px",
            opacity: 0.2,
            zIndex: 2,
            pointerEvents: "none",
          }}
        />
      </div>
    </div>
  );
};
