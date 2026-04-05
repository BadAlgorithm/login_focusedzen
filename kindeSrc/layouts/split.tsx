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
          flex: "0 0 480px",
          maxWidth: "480px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "3rem 3.5rem",
        }}
      >
        {/* Logo: enso circle + font-based FocusedZen */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            marginBottom: "3rem",
          }}
        >
          <img
            src="https://cdn.focusedzen.com/login/enso-logo.png"
            alt=""
            style={{
              width: "36px",
              height: "36px",
            }}
          />
          <span style={{ display: "flex", alignItems: "baseline" }}>
            <span
              style={{
                fontFamily: "'Manrope', system-ui, sans-serif",
                fontSize: "1.25rem",
                fontWeight: 400,
                color: "#5C8A73",
              }}
            >
              Focused
            </span>
            <span
              style={{
                fontFamily: "'Manrope', system-ui, sans-serif",
                fontSize: "1.25rem",
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

      {/* Right side: full-bleed garden image */}
      <div
        data-fz-panel="right"
        style={{
          flex: 1,
          position: "relative",
          overflow: "hidden",
          background: "#1a2e23",
        }}
      >
        {/* Background image */}
        <img
          className="panel-image"
          src="https://cdn.focusedzen.com/login/garden-entrance.webp"
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
              "linear-gradient(to right, rgba(22, 23, 23, 0.6) 0%, transparent 30%)",
              "linear-gradient(to top, rgba(22, 23, 23, 0.7) 0%, transparent 50%)",
              "linear-gradient(to bottom, rgba(22, 23, 23, 0.3) 0%, transparent 20%)",
            ].join(", "),
            pointerEvents: "none",
          }}
        />

        {/* Marketing tagline overlay */}
        <div
          className="panel-tagline"
          style={{
            position: "absolute",
            bottom: "3rem",
            left: "3rem",
            right: "3rem",
            zIndex: 3,
          }}
        >
          <p
            style={{
              fontSize: "1.75rem",
              fontWeight: 600,
              color: "#E8E6E3",
              lineHeight: 1.3,
              letterSpacing: "-0.02em",
              maxWidth: "400px",
              textShadow: "0 2px 20px rgba(0,0,0,0.5)",
            }}
          >
            The zen garden your focus time deserves.
          </p>
        </div>
      </div>
    </div>
  );
};
