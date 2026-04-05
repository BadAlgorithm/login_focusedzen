"use server";

export function getStyles(): string {
  return `
    :root {
      --kinde-base-background-color: #0a0a0a;
      --kinde-base-background-color-dark: #0a0a0a;
      --kinde-base-color: #e0e0e0;
      --kinde-base-color-dark: #e0e0e0;
      --kinde-base-font-family: 'Manrope', system-ui, -apple-system, sans-serif;
      --kinde-base-font-size: 16px;
      --kinde-base-accent-color: #5C8A73;
      --kinde-base-accent-color-dark: #5C8A73;
      --kinde-button-border-radius: 12px;
      --kinde-control-border-radius: 12px;
      --kinde-card-border-radius: 16px;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      background-color: #0a0a0a;
      color: #e0e0e0;
      font-family: 'Manrope', system-ui, -apple-system, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    [data-kinde-button][data-kinde-button-variant="primary"] {
      background-color: #5C8A73 !important;
      color: #ffffff !important;
      border: none !important;
      font-weight: 600;
      letter-spacing: 0.02em;
      transition: opacity 0.2s ease;
    }

    [data-kinde-button][data-kinde-button-variant="primary"]:hover {
      opacity: 0.9;
    }

    [data-kinde-button][data-kinde-button-variant="secondary"] {
      background-color: transparent !important;
      color: #e0e0e0 !important;
      border: 1px solid rgba(255, 255, 255, 0.15) !important;
      transition: border-color 0.2s ease;
    }

    [data-kinde-button][data-kinde-button-variant="secondary"]:hover {
      border-color: rgba(255, 255, 255, 0.3) !important;
    }

    [data-kinde-control-select-text] {
      background-color: rgba(255, 255, 255, 0.05) !important;
      border: 1px solid rgba(255, 255, 255, 0.12) !important;
      color: #e0e0e0 !important;
    }

    [data-kinde-control-select-text]:focus {
      border-color: #5C8A73 !important;
      outline: none !important;
      box-shadow: 0 0 0 2px rgba(92, 138, 115, 0.25) !important;
    }

    [data-kinde-control-label] {
      color: rgba(255, 255, 255, 0.7) !important;
    }

    [data-kinde-text-link] {
      color: #5C8A73 !important;
    }

    [data-kinde-choice-separator] {
      color: rgba(255, 255, 255, 0.4) !important;
      text-transform: uppercase;
      font-size: 0.75rem;
      letter-spacing: 0.1em;
    }
  `;
}
