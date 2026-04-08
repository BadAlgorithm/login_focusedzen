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
          flex: "0 0 50%",
          maxWidth: "50%",
          position: "relative",
          overflow: "hidden",
          marginRight: "-32px",
          zIndex: 1,
          background: "#1a2e23",
        }}
      >
        {/* LQIP placeholder - blurred 24px base64, paints instantly */}
        <div
          className="panel-lqip"
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "url('data:image/webp;base64,UklGRmoBAABXRUJQVlA4IF4BAADQBwCdASoYACQAPtFaoU0oJSMiKqwBABoJQBbfax642MLpAhv/immYQ6tA9RRyb+f63M45KQNQHSJqrY4reVvw8dV1XZEIgAD9qda9GmFT2Fga0kp0m+GYuIrzzEfzf9bfgEtB+//JlEIOrniY4gPZ7yIyo+2inTx0H2uOnyuFcqJhNdUBt7vzlb1M1XVl/07qR+bM0acxs5onMLqe0V/QXE173VG6EN5SsuoWC1beQmQmB1Y15DFe3LnDzuKCVrrabF95b9TYvvIl1C+BzfvoY9RdAMwzy7iI2T7pBsmnKBSdPNVgxThukFBLle+EOiHbIqyZRCyImpUrwF5Kbr47GA7l4MopzyTaC9bfruSJfOfebaq7wpQROUBABdiJ/ibg1b3mpyGBUYDZT4e8kenzaKgF5DYa2NBxXPcSYiMyKo4kRi/BkWIxe1c0ZPNqfhpnmh0sEAi5BnPlwjroAA==')",
            backgroundSize: "cover",
            backgroundPosition: "center 30%",
            filter: "blur(24px)",
            transform: "scale(1.08)",
            zIndex: 0,
          }}
        />

        {/* Background image */}
        <img
          className="panel-image"
          src="https://cdn.focusedzen.com/login/garden-entrance-2x.webp"
          alt=""
          decoding="async"
          // @ts-ignore - fetchPriority is valid HTML, types may lag
          fetchPriority="high"
          style={{
            position: "absolute",
            inset: "0",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center 30%",
            zIndex: 1,
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
            contain: "layout paint",
            transform: "translateZ(0)",
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
          <div className="firefly firefly-13" />
          <div className="firefly firefly-14" />
          <div className="firefly firefly-15" />
          <div className="firefly firefly-16" />
          <div className="firefly firefly-17" />
          <div className="firefly firefly-18" />
          <div className="firefly firefly-19" />
          <div className="firefly firefly-20" />
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
            justifyContent: "center",
            gap: "0.75rem",
            marginBottom: "2.5rem",
          }}
        >
          <img
            src="https://cdn.focusedzen.com/login/enso-logo.png"
            alt=""
            style={{
              width: "60px",
              height: "60px",
            }}
          />
          <span style={{ display: "flex", alignItems: "baseline" }}>
            <span
              style={{
                fontFamily: "'Manrope', system-ui, sans-serif",
                fontSize: "2.5rem",
                fontWeight: 500,
                color: "#5C8A73",
              }}
            >
              Focused
            </span>
            <span
              style={{
                fontFamily: "'Manrope', system-ui, sans-serif",
                fontSize: "2.5rem",
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
