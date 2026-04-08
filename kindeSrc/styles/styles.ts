"use server";

export function getStyles(): string {
  return `
    :root {
      --kinde-base-background-color: #161717;
      --kinde-base-background-color-dark: #161717;
      --kinde-base-color: #E8E6E3;
      --kinde-base-color-dark: #E8E6E3;
      --kinde-base-font-family: 'Manrope', system-ui, -apple-system, sans-serif;
      --kinde-base-font-size: 16px;
      --kinde-base-accent-color: #5C8A73;
      --kinde-base-accent-color-dark: #5C8A73;
      --kinde-button-border-radius: 12px;
      --kinde-control-border-radius: 12px;
      --kinde-card-border-radius: 16px;
      --kinde-base-focus-outline-color: #5C8A73;
      --kinde-shared-color-text-label: #ABABAB;
      --kinde-shared-color-text-label-dark: #ABABAB;
      --kinde-shared-color-text-caption: #7A7A7A;
      --kinde-shared-color-text-caption-dark: #7A7A7A;
      --kinde-shared-color-disabled-background: #252626;
      --kinde-shared-color-disabled-background-dark: #252626;
      --kinde-shared-color-disabled-text: #7A7A7A;
      --kinde-shared-color-disabled-text-dark: #7A7A7A;
      --kinde-shared-color-invalid: #F28482;
      --kinde-shared-color-invalid-dark: #F28482;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      background-color: #161717;
      color: #E8E6E3;
      font-family: 'Manrope', system-ui, -apple-system, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    /* Primary button */
    [data-kinde-button][data-kinde-button-variant="primary"] {
      background: linear-gradient(to bottom, #5C8A73, #4e7862) !important;
      color: #FFFFFF !important;
      border: none !important;
      font-weight: 600;
      letter-spacing: 0.02em;
      min-height: 2.75rem !important;
      margin-top: 1rem !important;
      box-shadow: inset 0 1px 0 rgba(255,255,255,0.1), 0 1px 2px rgba(0,0,0,0.3) !important;
      transition: filter 300ms cubic-bezier(0.25, 0.1, 0.25, 1),
                  transform 150ms cubic-bezier(0.25, 0.1, 0.25, 1);
    }

    [data-kinde-button][data-kinde-button-variant="primary"]:hover {
      filter: brightness(1.1) !important;
    }

    [data-kinde-button][data-kinde-button-variant="primary"]:active {
      transform: scale(0.98);
    }

    /* Social login buttons - ghost style */
    [data-kinde-button][data-kinde-button-variant="secondary"] {
      background-color: transparent !important;
      color: #E8E6E3 !important;
      border: 1px solid #252626 !important;
      min-height: 2.5rem !important;
      font-size: 0.875rem !important;
      box-shadow: none !important;
      transition: border-color 300ms cubic-bezier(0.25, 0.1, 0.25, 1),
                  background-color 300ms cubic-bezier(0.25, 0.1, 0.25, 1);
    }

    [data-kinde-button][data-kinde-button-variant="secondary"]:hover {
      border-color: #323333 !important;
      background-color: rgba(255, 255, 255, 0.02) !important;
    }

    /* Fix dark social icons (Apple logo) - invert to white */
    [data-kinde-button][data-kinde-button-variant="secondary"] svg {
      filter: brightness(0) invert(1) !important;
    }

    [data-kinde-button][data-kinde-button-variant="secondary"] img {
      filter: brightness(0) invert(1) !important;
    }

    /* Text inputs - matches mobile app InputDecorationTheme */
    [data-kinde-control-select-text] {
      background-color: #1E1F1F !important;
      border: 1px solid #323333 !important;
      color: #E8E6E3 !important;
      min-height: 3rem !important;
      padding: 0.875rem 1.25rem !important;
      border-radius: 12px !important;
      box-shadow: none !important;
      transition: border-color 300ms cubic-bezier(0.25, 0.1, 0.25, 1);
    }

    [data-kinde-control-select-text]:focus {
      border-color: #5C8A73 !important;
      border-width: 2px !important;
      outline: none !important;
      box-shadow: none !important;
    }

    [data-kinde-control-select-text]::placeholder {
      color: #7A7A7A !important;
    }

    /* Labels */
    [data-kinde-control-label] {
      color: #E8E6E3 !important;
      font-weight: 500;
      font-size: 0.875rem;
      margin-bottom: 0.5rem !important;
    }

    /* Links */
    [data-kinde-text-link] {
      color: #7BA694 !important;
      text-decoration: none;
      transition: color 300ms cubic-bezier(0.25, 0.1, 0.25, 1);
    }

    [data-kinde-text-link]:hover {
      color: #5C8A73 !important;
      text-decoration: underline;
    }

    /* OR divider */
    [data-kinde-choice-separator],
    .kinde-choice-separator {
      color: #ABABAB !important;
      text-transform: lowercase;
      font-size: 0.9375rem;
      font-weight: 400;
      letter-spacing: 0.05em;
      margin: 0.875rem 0 !important;
    }

    [data-kinde-choice-separator]::before,
    [data-kinde-choice-separator]::after,
    .kinde-choice-separator::before,
    .kinde-choice-separator::after {
      background-color: #3A3B3B !important;
      border-color: #3A3B3B !important;
    }

    /* Form field spacing */
    [data-kinde-form-field] {
      margin-bottom: 1.25rem;
    }

    /* Widget full width */
    [data-kinde-widget] {
      width: 100% !important;
    }

    /* Social button row */
    [data-kinde-layout-social-buttons] {
      gap: 0.625rem !important;
      margin-bottom: 0.25rem !important;
    }

    /* Footer links - No account? Create one */
    [data-kinde-layout-footer],
    .kinde-fallback-action {
      margin-top: 2.5rem !important;
      font-size: 0.875rem !important;
      color: #ABABAB !important;
      text-align: center !important;
      width: 100% !important;
    }

    [data-kinde-layout-footer] [data-kinde-text-link],
    .kinde-fallback-action a,
    .kinde-fallback-action [data-kinde-text-link] {
      color: #7BA694 !important;
      font-weight: 500 !important;
      text-decoration: underline !important;
      text-underline-offset: 3px !important;
    }

    /* Powered by Kinde - monochrome footnote */
    [data-kinde-layout-widget-branding],
    .kinde-layout-widget-branding {
      opacity: 0.55 !important;
      font-size: 0.6875rem !important;
      margin-top: 1.5rem !important;
      filter: grayscale(1) !important;
      transition: opacity 300ms cubic-bezier(0.25, 0.1, 0.25, 1);
    }

    [data-kinde-layout-widget-branding]:hover,
    .kinde-layout-widget-branding:hover {
      opacity: 0.8 !important;
    }

    [data-kinde-layout-widget-branding] *,
    .kinde-layout-widget-branding *,
    .kinde-branding,
    .kinde-branding * {
      filter: grayscale(1) brightness(1) !important;
      color: #9A9A9A !important;
      font-size: 0.6875rem !important;
      font-weight: 400 !important;
    }

    .kinde-branding,
    [data-kinde-layout-widget-branding] figure,
    [data-kinde-layout-widget-branding] .kinde-branding {
      display: inline-flex !important;
      align-items: center !important;
      gap: 0.25rem !important;
    }

    .kinde-branding img,
    .kinde-branding svg,
    [data-kinde-layout-widget-branding] img,
    [data-kinde-layout-widget-branding] svg {
      height: 11px !important;
      max-height: 11px !important;
      width: auto !important;
      filter: grayscale(1) brightness(0.9) !important;
    }

    /* Animations */
    .panel-image {
      opacity: 0;
      transform: scale(1.02);
      transition: opacity 900ms cubic-bezier(0.25, 0.1, 0.25, 1),
                  transform 1400ms cubic-bezier(0.25, 0.1, 0.25, 1);
    }

    .panel-image.loaded {
      opacity: 1;
      transform: scale(1.0);
    }

    /* LQIP fades out once the real image has settled in */
    .panel-lqip {
      opacity: 1;
      transition: opacity 900ms ease-out 200ms;
    }

    .scene-ready .panel-lqip {
      opacity: 0;
    }

    /* ---- Mist / fog layers (CSS blur + radial blobs) ---- */

    .mist {
      position: absolute;
      pointer-events: none;
      z-index: 2;
      will-change: transform, opacity;
      opacity: 0;
      transition: opacity 1200ms ease-out 500ms;
    }

    .scene-ready .mist {
      opacity: 1;
    }

    .mist-1 {
      bottom: -10%;
      left: -20%;
      width: 140%;
      height: 50%;
      background:
        radial-gradient(ellipse 50% 60% at 25% 70%, rgba(200,220,215,0.3) 0%, transparent 70%),
        radial-gradient(ellipse 40% 50% at 70% 80%, rgba(190,215,208,0.25) 0%, transparent 65%),
        radial-gradient(ellipse 60% 40% at 50% 60%, rgba(195,218,212,0.2) 0%, transparent 60%);
      filter: blur(30px);
      mix-blend-mode: screen;
      animation: mist-float-1 80s ease-in-out infinite;
    }

    .mist-2 {
      bottom: -5%;
      left: 0%;
      width: 120%;
      height: 40%;
      background:
        radial-gradient(ellipse 45% 55% at 40% 75%, rgba(195,215,210,0.25) 0%, transparent 65%),
        radial-gradient(ellipse 55% 45% at 80% 65%, rgba(185,210,202,0.2) 0%, transparent 60%);
      filter: blur(35px);
      mix-blend-mode: screen;
      animation: mist-float-2 60s ease-in-out infinite;
    }

    .mist-3 {
      bottom: 0%;
      left: -10%;
      width: 110%;
      height: 35%;
      background:
        radial-gradient(ellipse 50% 50% at 60% 80%, rgba(200,218,212,0.2) 0%, transparent 60%),
        radial-gradient(ellipse 40% 60% at 20% 70%, rgba(190,212,205,0.18) 0%, transparent 55%);
      filter: blur(40px);
      mix-blend-mode: screen;
      animation: mist-float-3 50s ease-in-out infinite;
    }

    @keyframes mist-float-1 {
      0%   { transform: translate(0, 0); }
      25%  { transform: translate(50px, -15px); }
      50%  { transform: translate(-30px, 8px); }
      75%  { transform: translate(35px, -10px); }
      100% { transform: translate(0, 0); }
    }

    @keyframes mist-float-2 {
      0%   { transform: translate(0, 0); }
      33%  { transform: translate(-45px, 12px); }
      66%  { transform: translate(40px, -8px); }
      100% { transform: translate(0, 0); }
    }

    @keyframes mist-float-3 {
      0%   { transform: translate(0, 0); }
      30%  { transform: translate(30px, 15px); }
      60%  { transform: translate(-40px, -8px); }
      100% { transform: translate(0, 0); }
    }

    /* ---- Firefly ambient animation ---- */

    .firefly {
      position: absolute;
      border-radius: 50%;
      will-change: transform, opacity;
      pointer-events: none;
      visibility: hidden;
      animation-play-state: paused !important;
    }

    .scene-ready .firefly {
      visibility: visible;
      animation-play-state: running !important;
    }

    /* Glow durations are coprime-ish (5.3, 6.7, 8.1, 9.7, 11.3, 12.9, 14.7, 17.1s)
       so cycles never re-align. Glow delays are spread across each firefly's own
       cycle via -(i/N)*duration, guaranteeing even phase coverage across the swarm. */

    .firefly-1 {
      width: 7px; height: 7px;
      background: #f5d47a;
      box-shadow: 0 0 6px 3px rgba(245,212,122,0.9), 0 0 18px 9px rgba(245,212,122,0.45), 0 0 40px 20px rgba(245,212,122,0.15);
      top: 18%; left: 22%;
      animation: drift-1 27s ease-in-out infinite, glow-1 11.3s ease-in-out infinite;
      animation-delay: -12s, -0.81s;
    }

    .firefly-2 {
      width: 6px; height: 6px;
      background: #f0cc5e;
      box-shadow: 0 0 5px 3px rgba(240,204,94,0.85), 0 0 16px 8px rgba(240,204,94,0.4), 0 0 34px 17px rgba(240,204,94,0.12);
      top: 42%; left: 55%;
      animation: drift-2 23s ease-in-out infinite, glow-2 8.1s ease-in-out infinite;
      animation-delay: -8s, -1.16s;
    }

    .firefly-3 {
      width: 5px; height: 5px;
      background: #e8c547;
      box-shadow: 0 0 4px 2px rgba(232,197,71,0.85), 0 0 14px 7px rgba(232,197,71,0.35), 0 0 28px 14px rgba(232,197,71,0.1);
      top: 12%; left: 70%;
      animation: drift-3 31s ease-in-out infinite, glow-3 14.7s ease-in-out infinite;
      animation-delay: -20s, -3.15s;
    }

    /* firefly-4: small, trimmed to 2 shadows */
    .firefly-4 {
      width: 4px; height: 4px;
      background: #e8cc6a;
      box-shadow: 0 0 3px 2px rgba(232,204,106,0.75), 0 0 11px 5px rgba(232,204,106,0.28);
      top: 55%; left: 30%;
      animation: drift-4 29s ease-in-out infinite, glow-4 6.7s ease-in-out infinite;
      animation-delay: -15s, -1.91s;
    }

    .firefly-5 {
      width: 6px; height: 6px;
      background: #f5d47a;
      box-shadow: 0 0 5px 3px rgba(245,212,122,0.85), 0 0 16px 8px rgba(245,212,122,0.4), 0 0 36px 18px rgba(245,212,122,0.12);
      top: 68%; left: 12%;
      animation: drift-5 25s ease-in-out infinite, glow-5 9.7s ease-in-out infinite;
      animation-delay: -5s, -3.46s;
    }

    /* firefly-6: EMBER - soft 0.10 floor, never fully dark */
    .firefly-6 {
      width: 5px; height: 5px;
      background: #e8c547;
      box-shadow: 0 0 4px 2px rgba(232,197,71,0.8), 0 0 14px 7px rgba(232,197,71,0.3), 0 0 28px 14px rgba(232,197,71,0.1);
      top: 35%; left: 78%;
      animation: drift-6 33s ease-in-out infinite, glow-ember 12.9s ease-in-out infinite;
      animation-delay: -18s, -5.53s;
    }

    /* firefly-7: small, trimmed to 2 shadows */
    .firefly-7 {
      width: 4px; height: 4px;
      background: #f0d080;
      box-shadow: 0 0 3px 2px rgba(240,208,128,0.7), 0 0 11px 5px rgba(240,208,128,0.25);
      top: 78%; left: 52%;
      animation: drift-3 37s ease-in-out infinite, glow-2 5.3s ease-in-out infinite;
      animation-delay: -25s, -2.65s;
    }

    .firefly-8 {
      width: 5px; height: 5px;
      background: #f0cc5e;
      box-shadow: 0 0 4px 2px rgba(240,204,94,0.85), 0 0 14px 7px rgba(240,204,94,0.35), 0 0 28px 14px rgba(240,204,94,0.1);
      top: 25%; left: 42%;
      animation: drift-2 21s ease-in-out infinite, glow-3 17.1s ease-in-out infinite;
      animation-delay: -10s, -9.77s;
    }

    .firefly-9 {
      width: 7px; height: 7px;
      background: #f5d47a;
      box-shadow: 0 0 6px 3px rgba(245,212,122,0.9), 0 0 18px 9px rgba(245,212,122,0.4), 0 0 38px 19px rgba(245,212,122,0.12);
      top: 30%; left: 48%;
      animation: drift-1 19s ease-in-out infinite, glow-4 8.1s ease-in-out infinite;
      animation-delay: -7s, -5.21s;
    }

    /* firefly-10: small, trimmed to 2 shadows */
    .firefly-10 {
      width: 4px; height: 4px;
      background: #e8c547;
      box-shadow: 0 0 3px 2px rgba(232,197,71,0.75), 0 0 12px 6px rgba(232,197,71,0.3);
      top: 48%; left: 18%;
      animation: drift-5 35s ease-in-out infinite, glow-5 11.3s ease-in-out infinite;
      animation-delay: -22s, -8.07s;
    }

    /* firefly-11: EMBER - soft 0.10 floor, never fully dark */
    .firefly-11 {
      width: 6px; height: 6px;
      background: #f0cc5e;
      box-shadow: 0 0 5px 3px rgba(240,204,94,0.8), 0 0 16px 8px rgba(240,204,94,0.35), 0 0 32px 16px rgba(240,204,94,0.1);
      top: 60%; left: 65%;
      animation: drift-4 26s ease-in-out infinite, glow-ember 9.7s ease-in-out infinite;
      animation-delay: -14s, -7.62s;
    }

    /* firefly-12: small, trimmed to 2 shadows */
    .firefly-12 {
      width: 3px; height: 3px;
      background: #e8cc6a;
      box-shadow: 0 0 3px 1px rgba(232,204,106,0.7), 0 0 9px 4px rgba(232,204,106,0.22);
      top: 85%; left: 38%;
      animation: drift-6 31s ease-in-out infinite, glow-1 14.7s ease-in-out infinite;
      animation-delay: -28s, -12.60s;
    }

    /* firefly-13: NEW - upper-mid sparse region */
    .firefly-13 {
      width: 5px; height: 5px;
      background: #f5d47a;
      box-shadow: 0 0 4px 2px rgba(245,212,122,0.85), 0 0 14px 7px rgba(245,212,122,0.35), 0 0 30px 15px rgba(245,212,122,0.1);
      top: 8%; left: 40%;
      animation: drift-3 28s ease-in-out infinite, glow-3 6.7s ease-in-out infinite;
      animation-delay: -6s, -6.22s;
    }

    /* firefly-14: NEW - mid-left sparse region */
    .firefly-14 {
      width: 4px; height: 4px;
      background: #f0d080;
      box-shadow: 0 0 3px 2px rgba(240,208,128,0.85), 0 0 12px 6px rgba(240,208,128,0.38), 0 0 26px 13px rgba(240,208,128,0.1);
      top: 50%; left: 8%;
      animation: drift-2 34s ease-in-out infinite, glow-4 12.9s ease-in-out infinite;
      animation-delay: -11s, -0.92s;
    }

    /* firefly-15: large hero, upper-left */
    .firefly-15 {
      width: 7px; height: 7px;
      background: #f5d47a;
      box-shadow: 0 0 7px 3px rgba(245,212,122,1), 0 0 20px 10px rgba(245,212,122,0.55), 0 0 44px 22px rgba(245,212,122,0.2);
      top: 22%; left: 14%;
      animation: drift-2 26s ease-in-out infinite, glow-1 17.1s ease-in-out infinite;
      animation-delay: -9s, -11.4s;
    }

    /* firefly-16: mid-upper */
    .firefly-16 {
      width: 6px; height: 6px;
      background: #f0cc5e;
      box-shadow: 0 0 6px 3px rgba(240,204,94,0.95), 0 0 18px 9px rgba(240,204,94,0.45), 0 0 38px 19px rgba(240,204,94,0.15);
      top: 15%; left: 55%;
      animation: drift-5 30s ease-in-out infinite, glow-5 14.7s ease-in-out infinite;
      animation-delay: -13s, -10.5s;
    }

    /* firefly-17: low-left */
    .firefly-17 {
      width: 5px; height: 5px;
      background: #e8cc6a;
      box-shadow: 0 0 5px 2px rgba(232,204,106,0.9), 0 0 16px 8px rgba(232,204,106,0.4), 0 0 32px 16px rgba(232,204,106,0.12);
      top: 75%; left: 28%;
      animation: drift-1 32s ease-in-out infinite, glow-2 11.3s ease-in-out infinite;
      animation-delay: -17s, -4.8s;
    }

    /* firefly-18: mid */
    .firefly-18 {
      width: 6px; height: 6px;
      background: #f5d47a;
      box-shadow: 0 0 6px 3px rgba(245,212,122,0.95), 0 0 18px 9px rgba(245,212,122,0.45), 0 0 36px 18px rgba(245,212,122,0.15);
      top: 38%; left: 38%;
      animation: drift-4 24s ease-in-out infinite, glow-3 8.1s ease-in-out infinite;
      animation-delay: -3s, -4.05s;
    }

    /* firefly-19: EMBER #3 - distant mid-depth */
    .firefly-19 {
      width: 5px; height: 5px;
      background: #f0cc5e;
      box-shadow: 0 0 5px 2px rgba(240,204,94,0.9), 0 0 15px 7px rgba(240,204,94,0.4), 0 0 30px 15px rgba(240,204,94,0.12);
      top: 58%; left: 46%;
      animation: drift-6 36s ease-in-out infinite, glow-ember 14.7s ease-in-out infinite;
      animation-delay: -19s, -7.35s;
    }

    /* firefly-20: small, low-mid, trimmed shadow */
    .firefly-20 {
      width: 4px; height: 4px;
      background: #e8cc6a;
      box-shadow: 0 0 4px 2px rgba(232,204,106,0.8), 0 0 13px 6px rgba(232,204,106,0.32);
      top: 88%; left: 60%;
      animation: drift-3 33s ease-in-out infinite, glow-4 5.3s ease-in-out infinite;
      animation-delay: -21s, -2.1s;
    }

    /* Drift keyframes - organic float paths */
    @keyframes drift-1 {
      0%   { transform: translate(0, 0); }
      20%  { transform: translate(35px, -20px); }
      40%  { transform: translate(15px, -45px); }
      60%  { transform: translate(-25px, -30px); }
      80%  { transform: translate(-10px, 10px); }
      100% { transform: translate(0, 0); }
    }

    @keyframes drift-2 {
      0%   { transform: translate(0, 0); }
      25%  { transform: translate(-40px, 15px); }
      50%  { transform: translate(-20px, -35px); }
      75%  { transform: translate(30px, -15px); }
      100% { transform: translate(0, 0); }
    }

    @keyframes drift-3 {
      0%   { transform: translate(0, 0); }
      16%  { transform: translate(20px, 25px); }
      33%  { transform: translate(50px, 10px); }
      50%  { transform: translate(35px, -30px); }
      66%  { transform: translate(-10px, -40px); }
      83%  { transform: translate(-25px, -10px); }
      100% { transform: translate(0, 0); }
    }

    @keyframes drift-4 {
      0%   { transform: translate(0, 0); }
      20%  { transform: translate(-15px, -35px); }
      45%  { transform: translate(25px, -50px); }
      70%  { transform: translate(40px, -10px); }
      90%  { transform: translate(10px, 20px); }
      100% { transform: translate(0, 0); }
    }

    @keyframes drift-5 {
      0%   { transform: translate(0, 0); }
      30%  { transform: translate(45px, 20px); }
      55%  { transform: translate(25px, -25px); }
      80%  { transform: translate(-20px, -40px); }
      100% { transform: translate(0, 0); }
    }

    @keyframes drift-6 {
      0%   { transform: translate(0, 0); }
      18%  { transform: translate(-30px, -15px); }
      36%  { transform: translate(-50px, 20px); }
      54%  { transform: translate(-20px, 40px); }
      72%  { transform: translate(15px, 25px); }
      100% { transform: translate(0, 0); }
    }

    /* Glow keyframes - firefly bioluminescence (brightened for prominence) */
    @keyframes glow-1 {
      0%   { opacity: 0; }
      15%  { opacity: 0.18; }
      40%  { opacity: 1; }
      60%  { opacity: 0.7; }
      80%  { opacity: 0.25; }
      100% { opacity: 0; }
    }

    @keyframes glow-2 {
      0%   { opacity: 0; }
      20%  { opacity: 0.15; }
      45%  { opacity: 0.95; }
      70%  { opacity: 0.5; }
      100% { opacity: 0; }
    }

    @keyframes glow-3 {
      0%   { opacity: 0; }
      30%  { opacity: 0.75; }
      50%  { opacity: 0.45; }
      75%  { opacity: 0.85; }
      100% { opacity: 0; }
    }

    /* glow-4: asymmetric slow-rise / quick-fade */
    @keyframes glow-4 {
      0%   { opacity: 0; }
      10%  { opacity: 0.1; }
      30%  { opacity: 0.5; }
      55%  { opacity: 1; }
      68%  { opacity: 0.35; }
      100% { opacity: 0; }
    }

    /* glow-5: quick-rise / slow-fade */
    @keyframes glow-5 {
      0%   { opacity: 0; }
      12%  { opacity: 0.4; }
      22%  { opacity: 0.95; }
      55%  { opacity: 0.55; }
      85%  { opacity: 0.18; }
      100% { opacity: 0; }
    }

    /* glow-ember: soft 0.2 floor - never fully dark, distant always-glowing ember */
    @keyframes glow-ember {
      0%   { opacity: 0.2; }
      30%  { opacity: 0.5; }
      50%  { opacity: 0.75; }
      75%  { opacity: 0.45; }
      100% { opacity: 0.2; }
    }

    /* Accessibility: reduced motion */
    @media (prefers-reduced-motion: reduce) {
      .panel-image {
        transition: opacity 200ms linear !important;
        transform: none !important;
      }
      .panel-image.loaded {
        transform: none !important;
      }
      .panel-lqip {
        transition: opacity 200ms linear !important;
      }
      .firefly {
        animation: none !important;
        visibility: visible;
        opacity: 0.4;
      }
      /* reduced-motion: show ~10 of 20 to avoid a cluster of static dots */
      .firefly-3, .firefly-4, .firefly-7, .firefly-10, .firefly-12, .firefly-13, .firefly-14, .firefly-17, .firefly-19, .firefly-20 {
        opacity: 0;
      }
      .mist {
        animation: none !important;
        opacity: 1;
        transition: none !important;
      }
    }

    /* Responsive - hide right panel on mobile/tablet */
    @media (max-width: 768px) {
      [data-fz-panel="right"] {
        display: none !important;
      }
      [data-fz-panel="left"] {
        flex: 1 1 100% !important;
        max-width: 100% !important;
        padding: 2rem 1.5rem !important;
        align-items: center !important;
        border-radius: 0 !important;
        box-shadow: none !important;
      }
    }

    /* Smaller desktop / tablet - flush edges, no floating card */
    @media (min-width: 769px) and (max-width: 1024px) {
      [data-fz-panel="left"] {
        flex: 0 0 420px !important;
        max-width: 420px !important;
        padding: 2.5rem 2.5rem !important;
        border-radius: 0 !important;
        box-shadow: none !important;
      }
      [data-fz-panel="right"] {
        margin-right: 0 !important;
      }
    }

    @media (max-width: 480px) {
      [data-fz-panel="left"] {
        padding: 1.5rem 1.25rem !important;
      }
    }
  `;
}
