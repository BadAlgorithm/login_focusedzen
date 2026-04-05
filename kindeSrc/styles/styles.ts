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

    /* Text inputs */
    [data-kinde-control-select-text] {
      background-color: #161717 !important;
      border: 1px solid #2A2B2B !important;
      color: #E8E6E3 !important;
      min-height: 2.75rem !important;
      padding: 0.625rem 0.875rem !important;
      box-shadow: inset 0 1px 2px rgba(0,0,0,0.3) !important;
      transition: border-color 300ms cubic-bezier(0.25, 0.1, 0.25, 1),
                  box-shadow 300ms cubic-bezier(0.25, 0.1, 0.25, 1);
    }

    [data-kinde-control-select-text]:focus {
      border-color: rgba(92, 138, 115, 0.5) !important;
      outline: none !important;
      box-shadow: inset 0 1px 2px rgba(0,0,0,0.3), 0 0 0 2px rgba(92, 138, 115, 0.4) !important;
    }

    [data-kinde-control-select-text]::placeholder {
      color: rgba(171, 171, 171, 0.6) !important;
    }

    /* Labels */
    [data-kinde-control-label] {
      color: #ABABAB !important;
      font-weight: 500;
      font-size: 0.8125rem;
      margin-bottom: 0.375rem !important;
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
    [data-kinde-choice-separator] {
      color: #7A7A7A !important;
      text-transform: uppercase;
      font-size: 0.6875rem;
      letter-spacing: 0.1em;
      margin: 1rem 0 !important;
    }

    [data-kinde-choice-separator]::before,
    [data-kinde-choice-separator]::after {
      background-color: #2A2B2B !important;
      border-color: #2A2B2B !important;
    }

    /* Form field spacing */
    [data-kinde-form-field] {
      margin-bottom: 1rem;
    }

    /* Widget full width */
    [data-kinde-widget] {
      width: 100% !important;
    }

    /* Social button row */
    [data-kinde-layout-social-buttons] {
      gap: 0.375rem !important;
    }

    /* Footer links */
    [data-kinde-layout-footer] {
      margin-top: 1.5rem !important;
      font-size: 0.8125rem !important;
    }

    /* Powered by Kinde - monochrome footnote */
    [data-kinde-footer],
    [data-kinde-powered-by] {
      opacity: 0.25 !important;
      font-size: 0.625rem !important;
      margin-top: 1.5rem !important;
      filter: grayscale(1) !important;
      letter-spacing: 0.05em !important;
      transition: opacity 300ms cubic-bezier(0.25, 0.1, 0.25, 1);
    }

    [data-kinde-footer]:hover,
    [data-kinde-powered-by]:hover {
      opacity: 0.4 !important;
    }

    [data-kinde-footer] img,
    [data-kinde-powered-by] img,
    [data-kinde-footer] svg,
    [data-kinde-powered-by] svg {
      filter: grayscale(1) brightness(0.7) !important;
      max-height: 12px !important;
    }

    /* Animations */
    @keyframes imageReveal {
      from { transform: scale(1.03); opacity: 0; }
      to { transform: scale(1.0); opacity: 1; }
    }

    .panel-image {
      animation: imageReveal 1.2s cubic-bezier(0.25, 0.1, 0.25, 1) forwards;
    }

    @media (prefers-reduced-motion: reduce) {
      .panel-image {
        animation: none !important;
        opacity: 1 !important;
        transform: none !important;
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

    /* Smaller desktop */
    @media (min-width: 769px) and (max-width: 1024px) {
      [data-fz-panel="left"] {
        flex: 0 0 420px !important;
        max-width: 420px !important;
        padding: 2.5rem 2.5rem !important;
        border-radius: 0 16px 16px 0 !important;
      }
    }

    @media (max-width: 480px) {
      [data-fz-panel="left"] {
        padding: 1.5rem 1.25rem !important;
      }
    }
  `;
}
