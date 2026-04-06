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
      {/* Left side: garden image - tucked under form panel */}
      <div
        data-fz-panel="right"
        style={{
          flex: "0 0 420px",
          maxWidth: "420px",
          position: "relative",
          overflow: "hidden",
          marginRight: "-32px",
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

        {/* Mist layers */}
        <div className="mist mist-1" />
        <div className="mist mist-2" />
        <div className="mist mist-3" />

        {/* Fireflies */}
        <div
          style={{
            position: "absolute",
            inset: "0",
            overflow: "hidden",
            pointerEvents: "none",
            zIndex: 4,
          }}
        >
          <div className="firefly firefly-1" />
          <div className="firefly firefly-2" />
          <div className="firefly firefly-3" />
          <div className="firefly firefly-4" />
          <div className="firefly firefly-5" />
          <div className="firefly firefly-6" />
          <div className="firefly firefly-7" />
          <div className="firefly firefly-8" />
          <div className="firefly firefly-9" />
          <div className="firefly firefly-10" />
          <div className="firefly firefly-11" />
          <div className="firefly firefly-12" />
        </div>

        {/* Cinematic vignette overlay - flipped: right edge fades into form panel */}
        <div
          style={{
            position: "absolute",
            inset: "0",
            zIndex: 5,
            background: [
              "radial-gradient(ellipse 80% 70% at 45% 45%, transparent 0%, transparent 40%, rgba(22,23,23,0.15) 60%, rgba(22,23,23,0.4) 80%, rgba(22,23,23,0.6) 100%)",
              "linear-gradient(to left, rgba(22, 23, 23, 0.9) 0%, rgba(22, 23, 23, 0.5) 8%, rgba(22, 23, 23, 0.15) 18%, transparent 35%)",
              "linear-gradient(to top, rgba(22, 23, 23, 0.5) 0%, rgba(22, 23, 23, 0.15) 15%, transparent 35%)",
              "linear-gradient(to bottom, rgba(22, 23, 23, 0.2) 0%, transparent 15%)",
            ].join(", "),
            pointerEvents: "none",
          }}
        />
      </div>

      {/* Right side: login form - overlaps image */}
      <div
        data-fz-panel="left"
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "3rem 4rem",
          position: "relative",
          zIndex: 2,
          background: "#161717",
          borderRadius: "24px 0 0 24px",
          boxShadow: "-12px 0 48px -4px rgba(0, 0, 0, 0.6), -4px 0 16px -2px rgba(0, 0, 0, 0.4), -24px 0 80px 0 rgba(22, 23, 23, 0.5)",
        }}
      >
        <div style={{ width: "100%", maxWidth: "440px" }}>
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
              width: "52px",
              height: "52px",
            }}
          />
          <span style={{ display: "flex", alignItems: "baseline" }}>
            <span
              style={{
                fontFamily: "'Manrope', system-ui, sans-serif",
                fontSize: "2rem",
                fontWeight: 500,
                color: "#5C8A73",
              }}
            >
              Focused
            </span>
            <span
              style={{
                fontFamily: "'Manrope', system-ui, sans-serif",
                fontSize: "2rem",
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
      </div>
    </div>
  );
};
