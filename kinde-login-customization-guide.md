# Kinde Login Page Customization Guide

Reference for building custom Kinde-hosted login pages for FocusedZen. Sourced from [Kinde docs](https://docs.kinde.com/design/customize-with-code/customize-with-css-html/).

---

## 1. Overview

Kinde provides three customization layers for hosted auth pages:

| Layer | What it controls |
|-------|-----------------|
| **Widget** | Form elements: credential inputs, OTP entry, buttons, labels, the "Built with Kinde" logo |
| **Page** | Background colors/images, footer, widget positioning, overall layout |
| **Copy/Translations** | Field labels, headings, button text, across languages |

### Prerequisites

1. **Custom domain** set up in Kinde (free). Custom code only runs on a custom domain.
2. **GitHub repository** connected to Kinde for deploying custom page code.
3. Password entry screens always stay on Kinde's hosted domain for security. You can customize visuals, but auth flows are served from Kinde infrastructure.

---

## 2. Repository Setup

### Directory Structure

Your repo must follow this layout:

```
myApp/
├── kindeSrc/
│   └── environment/
│       └── pages/
│           └── (kinde)/
│               └── <route>/
│                   └── page.tsx
├── package.json
└── kinde.json
```

The `<route>` maps custom code to a specific Kinde page. Examples:
- `kindeSrc/environment/pages/(kinde)/(login)/page.tsx` = sign-in page
- `kindeSrc/environment/pages/(kinde)/(register)/page.tsx` = sign-up page

### kinde.json

```json
{
  "rootDir": "kindeSrc",
  "version": "2024-12-09"
}
```

- `rootDir` tells Kinde where your custom code lives (defaults to `kindeSrc`)
- `version` corresponds to the API release date

### Supported Packages

Only these packages work in custom pages:

| Package | Purpose |
|---------|---------|
| `@kinde/infrastructure` | Kinde helpers (widget, CSS, nonce, etc.) |
| `react` | UI framework |
| `react-dom/server.browser` | Server-side rendering |
| `liquidjs` | Liquid template engine |

Importing unsupported packages will cause deployment to fail. Dev dependencies are allowed only if code is prebuilt before deployment.

### Connecting the Repo

1. Go to **Design > Custom code** in Kinde dashboard
2. Select **Connect repo** (redirects to Settings > Git Repo)
3. Choose **Connect GitHub**
4. Follow prompts to connect your repository and branch

Code preview is available on Kinde Plus and Scale plans. Free/Pro users should preview in non-production environments first.

---

## 3. Page Routes (FocusedZen)

FocusedZen only uses two pages:

| Route | Page | Auth Flows |
|-------|------|------------|
| `(login)` | Sign-in page | Social login, email one-time-code |
| `(register)` | Sign-up page | Social login, email one-time-code |

Both pages support two authentication methods:
1. **Social login** - sign in/up via a social provider (e.g. Google, Apple)
2. **Email one-time-code (OTP)** - user enters email, receives a code, enters code to authenticate

The OTP code entry screen is part of the Kinde widget flow. After the user submits their email, the widget transitions to the code entry form automatically.

A `(default)` route can optionally be set as a fallback template for any other Kinde-served page (error pages, etc.).

---

## 4. Page Function Structure

Pages are server-rendered JavaScript. Default export a function from `page.tsx`:

```tsx
import {
  getKindeWidget,
  getKindeRequiredCSS,
  getKindeRequiredJS,
  getKindeNonce,
  getKindeCSRF,
} from "@kinde/infrastructure";

export default function Page(event) {
  return (
    <html lang={event.request.locale.lang}>
      <head>
        {getKindeRequiredCSS()}
        <link rel="stylesheet" href="/custom_styles.css" />
      </head>
      <body>
        {getKindeWidget()}
        {getKindeRequiredJS()}
      </body>
    </html>
  );
}
```

### The `event` Parameter

**`event.request`:**

| Property | Contains |
|----------|----------|
| `authUrlParams` | `orgCode`, `state`, `clientId`, `redirectUri` |
| `locale` | `isRtl`, `lang` |
| `route` | `context`, `flow`, `path` |

**`event.context`:**

| Property | Contains |
|----------|----------|
| `domains` | `kindeDomain` |
| `widget.content` | `pageTitle`, `heading`, `description`, `logoAlt` |

### Per-Application Customization

Use `event.request.authUrlParams.clientId` for conditional rendering per application:

```tsx
export default function Page(event) {
  const clientId = event.request.authUrlParams.clientId;

  if (clientId === "my-app-client-id") {
    return <CustomLayoutForApp />;
  }

  return <DefaultLayout />;
}
```

---

## 5. @kinde/infrastructure Helpers

### Custom Page Methods

| Helper | Purpose |
|--------|---------|
| `getKindeWidget()` | Places the Kinde widget (form) on the page |
| `getKindeRequiredCSS()` | Inserts required CSS styles |
| `getKindeRequiredJS()` | Inserts required JavaScript |
| `getKindeNonce()` | Places the generated nonce for security |
| `getKindeCSRF()` | Places the generated CSRF token |
| `getKindeThemeCode()` | Returns the theme code (light/dark/user-preference) |
| `setKindeDesignerCustomProperties()` | Customize widget styling via designer properties |
| `getKindeLoginUrl()` / `getKindeSignInUrl()` | Retrieve login URL |
| `getKindeRegisterUrl()` / `getKindeSignUpUrl()` | Retrieve registration URL |
| `getLogoUrl()` | Organization logo URL |
| `getDarkModeLogoUrl()` | Dark mode logo URL |
| `getSVGFaviconUrl()` | SVG favicon URL |
| `getFallbackFaviconUrl()` | Fallback favicon URL |
| `getEnvironmentVariable(key)` | Get env variables stored in Kinde |

### Workflow Methods (not for pages, but available)

| Helper | Purpose |
|--------|---------|
| `idTokenCustomClaims` | Custom claims on ID token |
| `accessCustomClaims` | Custom claims on access token |
| `m2mCustomClaims` | Custom claims on M2M token |
| `denyAccess` | Deny access to applications |
| `fetch` | Send requests to external APIs |
| `secureFetch` | Encrypted requests to external APIs |
| `createKindeAPI` | Handler for Kinde management SDK |
| `getM2MToken` | Cache and retrieve M2M tokens |

---

## 6. CSS Custom Properties

Kinde uses CSS custom properties (variables) with the `--kinde-` prefix. Define them scoped to `:root`:

```css
:root {
  --kinde-base-background-color: hsl(0 100% 50% / 50%);
  --kinde-base-color: hsl(50 80% 40%);
  --kinde-base-font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto;
  --kinde-button-primary-background-color: var(--kinde-base-color);
}
```

### Loading Custom Styles

Load Kinde's required CSS first, then your custom styles:

```html
<html>
  <head>
    {getKindeRequiredCSS()}
    <link rel="stylesheet" href="/custom_styles.css" />
  </head>
</html>
```

### Naming Convention

```
--kinde-[type]-[variant/element]-[property]-[modifier]-[state]
```

Example: `--kinde-button-primary-border-width`

### Variable Categories

#### Shared Settings (`--kinde-shared-*`)

Global fallbacks for disabled states, invalid elements, and captions.

| Variable | Purpose |
|----------|---------|
| `--kinde-shared-color-disabled-background` | Disabled element background |
| `--kinde-shared-color-disabled-background-dark` | Disabled background (dark mode) |
| `--kinde-shared-color-disabled-text` | Disabled element text |
| `--kinde-shared-color-disabled-text-dark` | Disabled text (dark mode) |
| `--kinde-shared-color-invalid` | Invalid form validation |
| `--kinde-shared-color-invalid-dark` | Invalid state (dark mode) |
| `--kinde-shared-color-text-caption` | Caption text |
| `--kinde-shared-color-text-caption-dark` | Caption text (dark mode) |
| `--kinde-shared-color-text-label` | Label text |
| `--kinde-shared-color-text-label-dark` | Label text (dark mode) |
| `--kinde-shared-font-small-*` | Small text font properties |

#### Base Settings (`--kinde-base-*`)

Foundational styles applied globally.

| Variable | Purpose |
|----------|---------|
| `--kinde-base-background-color` | Page background |
| `--kinde-base-background-color-dark` | Page background (dark mode) |
| `--kinde-base-color` | Primary text color |
| `--kinde-base-color-dark` | Primary text (dark mode) |
| `--kinde-base-font-family` | Typography stack |
| `--kinde-base-font-size` | Base font size |
| `--kinde-base-line-height` | Text line spacing |
| `--kinde-base-accent-color` | Form control accents |
| `--kinde-base-accent-color-dark` | Accents (dark mode) |
| `--kinde-base-scroll-behavior` | Page scroll animation |
| `--kinde-base-focus-outline-*` | Focus indicator styling |

#### Component Settings (`--kinde-[component]-*`)

Specific to UI patterns like buttons, cards, and form controls. Discoverable via DevTools inspection.

#### Layout Settings (`--kinde-layout-*`)

Control arrangement and spacing of components.

### Fallback Values

Settings use CSS fallback syntax. If undefined, defaults apply:

```css
font-size: var(--kinde-button-font-size, 1rem);
```

### Non-Customizable Styles

These remain hardcoded for functionality and accessibility:
- `pointer-events` management
- `cursor` styling
- `display` properties
- Reduced-motion compliance

### Designer Settings

Variables prefixed with `--kinde-designer-*` are internal fallbacks. Do not assign them directly in custom CSS.

### Self-Hosted Assets

Kinde does not host static assets (stylesheets, fonts, images). Host them on servers sharing the same domain as your custom domain:
- Custom domain: `auth.myapp.com`
- Assets: `assets.myapp.com`

---

## 7. Style Hooks

Style hooks are HTML `data-` attributes on Kinde widget components. Use CSS attribute selectors to target them.

### Basic Usage

```css
[data-kinde-button]:hover {
  box-shadow: 0 1px 3px rgba(12, 12, 12, 0.09);
}
```

### Example Widget HTML Structure

```html
<div data-kinde-form-field="true" data-kinde-form-field-variant="select-text">
  <label data-kinde-control-label="true">Email</label>
  <input data-kinde-control-select-text="true" data-kinde-control-select-text-variant="text" />
</div>
```

### Naming Structure

#### Root Element
Pattern: `data-kinde-[component-name]`

```html
<a data-kinde-text-link="true">Sign in</a>
```

Layouts include identifier: `data-kinde-layout-[component-name]`

#### Variant
Pattern: `data-kinde-[component]-variant="[variant-name]"`

```html
<button data-kinde-button="true" data-kinde-button-variant="primary">Save</button>
```

#### Modifier
Pattern: `data-kinde-[component]-[modifier-name]="true"`

```html
<a data-kinde-text-link="true" data-kinde-text-link-is-external="true">Terms</a>
```

#### Child Elements
Pattern: `data-kinde-[component]-[element-name]`

```html
<ul data-kinde-recovery-codes="true">
  <li data-kinde-recovery-codes-item="true">
    <code data-kinde-recovery-codes-code="true">4EA4356E3</code>
  </li>
</ul>
```

### When Style Hooks Are Not Available

Use HTML attribute selectors or element selectors (not class selectors):

```css
[data-kinde-control-select-text][type="email"] {
  /* Your styles */
}

[data-kinde-control-select-text] option {
  /* Your styles */
}
```

Use DevTools to inspect all available hooks on widget elements.

---

## 8. Theme Support

### Applying Theme

Import and apply the theme code:

```tsx
import { getKindeThemeCode } from "@kinde/infrastructure";

export default function Page(event) {
  return (
    <html data-kinde-theme={getKindeThemeCode()}>
      {/* ... */}
    </html>
  );
}
```

Theme hook values: `"light"` (default), `"dark"`, `"user-preference"`

### Dark Mode Styles

```css
[data-kinde-theme="dark"] [data-kinde-card] {
  background-color: #1a1a1a;
  color: #ffffff;
}
```

### User Preference (System Setting)

```css
[data-kinde-theme="user-preference"] [data-kinde-card] {
  @media screen and (prefers-color-scheme: dark) {
    background-color: #1a1a1a;
    color: #ffffff;
  }
}
```

### Supporting Both Dark and User Preference

```css
[data-kinde-theme="dark"] [data-kinde-card] {
  background-color: #1a1a1a;
  color: #ffffff;
}

[data-kinde-theme="user-preference"] [data-kinde-card] {
  @media screen and (prefers-color-scheme: dark) {
    background-color: #1a1a1a;
    color: #ffffff;
  }
}
```

---

## 9. Environment Variables

### Setup

1. Configure variables in Kinde: **Environment > Settings > Env variables**
2. Add `pageSettings` with `kinde.env` binding in your page file
3. Import and call `getEnvironmentVariable` inside the Page function

```tsx
import { getEnvironmentVariable } from "@kinde/infrastructure";

export const pageSettings = {
  bindings: {
    "kinde.env": {}
  }
};

export default function Page(event) {
  const publicUrl = getEnvironmentVariable("APP_PUBLIC_URL")?.value;

  return (
    <html>
      <body>
        <a href={publicUrl}>Back to app</a>
      </body>
    </html>
  );
}
```

`getEnvironmentVariable` must be called inside the Page function, not at module level.

---

## 10. FocusedZen-Specific Config

### Current Kinde Setup

| Setting | Value |
|---------|-------|
| Kinde domain | `eufocusedzen.kinde.com` |
| Audience | `https://api.focusedzen.com` |
| Web client ID | `9c02ddee33d54eec9675a3ebfd0e89f5` |
| Mobile client ID | `5f4433b542214657a5ce98b535ce2a31` |

### Existing Login Assets

Located in `login_assets/`:
- `focusedzen-logo.svg` - Text logo (green "Focused" + pink "Zen")
- `fz-icon.svg` - Icon logo (SVG)
- `fz-icon-96.png` - Icon logo (96x96 PNG)

Also available in `marketing_focusedzen/public/login_assets/`:
- `focusedzen-logo.svg`
- `focusedzen-logo-outlined.svg`

### Auth Flow

The current auth flow is:
1. User clicks login (Kinde hosted page)
2. Kinde issues a Kinde token
3. Token is exchanged for FocusedZen JWT via backend `ExchangeToken` RPC
4. FocusedZen tokens (access + refresh) are stored and used for API calls

Custom login pages change only step 1 (the visual presentation). The token exchange flow remains the same.

---

## 11. Starter Templates

Kinde provides four starter repos built with React Server Components:

| Template | GitHub Repo | Style |
|----------|-------------|-------|
| **SplitScape** | `kinde-starter-kits/custom-ui-splitscape` | Clean two-column layout, flexible for SaaS/marketplaces |
| **Evolve.ai** | `kinde-starter-kits/custom-ui-evolve-ai` | Futuristic gradient, minimalist, product-led |
| **Orbit** | `kinde-starter-kits/custom-ui-orbit` | Dark mode, sci-fi, startup energy |
| **Bark & Bite** | `kinde-starter-kits/custom-ui-barknbite` | Friendly, natural, lifestyle brands |

These are good starting points. Clone one, modify the styles and layout, then connect the repo to Kinde.

---

## Quick Reference: Minimal Custom Login Page

```tsx
// kindeSrc/environment/pages/(kinde)/(login)/page.tsx

import {
  getKindeWidget,
  getKindeRequiredCSS,
  getKindeRequiredJS,
  getKindeNonce,
  getKindeCSRF,
  getKindeThemeCode,
  getLogoUrl,
} from "@kinde/infrastructure";

export default function LoginPage(event) {
  const logoUrl = getLogoUrl();

  return (
    <html lang={event.request.locale.lang} data-kinde-theme={getKindeThemeCode()}>
      <head>
        {getKindeRequiredCSS()}
        <style>{`
          :root {
            --kinde-base-background-color: #0a0a0a;
            --kinde-base-color: #e0e0e0;
            --kinde-base-font-family: 'Manrope', sans-serif;
          }
        `}</style>
      </head>
      <body>
        <main>
          {logoUrl && <img src={logoUrl} alt="FocusedZen" />}
          <h1>{event.context.widget.content.heading}</h1>
          {getKindeWidget()}
        </main>
        {getKindeRequiredJS()}
      </body>
    </html>
  );
}
```

---

## Related Kinde Documentation

- [Customize with CSS & HTML](https://docs.kinde.com/design/customize-with-code/customize-with-css-html/)
- [Working with the Kinde Widget](https://docs.kinde.com/design/customize-with-code/kinde-widget/)
- [Styling with CSS](https://docs.kinde.com/design/customize-with-code/styling-with-css/)
- [Style with Style Hooks](https://docs.kinde.com/design/customize-with-code/style-with-style-hooks/)
- [Understand Page Design](https://docs.kinde.com/design/customize-with-code/understand-page-design/)
- [Connect Your Repo](https://docs.kinde.com/design/customize-with-code/connect-repo/)
- [Custom UI Examples](https://docs.kinde.com/design/customize-with-code/custom-ui-examples/)
- [Infrastructure Package](https://docs.kinde.com/workflows/getting-started/infrastructure-package/)
