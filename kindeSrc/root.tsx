"use server";

import React from "react";
import {
  getKindeRequiredCSS,
  getKindeRequiredJS,
  getKindeCSRF,
  getKindeNonce,
  type KindePageEvent,
} from "@kinde/infrastructure";
import { getStyles } from "./styles/styles";

type RootProps = {
  context: KindePageEvent["context"];
  request: KindePageEvent["request"];
  children: React.ReactNode;
};

export const Root: React.FC<RootProps> = ({ context, request, children }) => {
  const lang = request.locale.lang;
  const isRtl = request.locale.isRtl;

  return (
    <html lang={lang} dir={isRtl ? "rtl" : "ltr"}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex, nofollow" />
        <meta content={getKindeCSRF()} name="csrf-token" />
        <title>{context.widget.content.pageTitle || "FocusedZen"}</title>
        {getKindeRequiredCSS()}
        {getKindeRequiredJS()}
        <style nonce={getKindeNonce()} dangerouslySetInnerHTML={{ __html: `
          @font-face {
            font-family: 'Manrope';
            src: url('https://cdn.focusedzen.com/login/fonts/manrope.woff2') format('woff2');
            font-weight: 400 700;
            font-style: normal;
            font-display: swap;
          }
          ${getStyles()}
        ` }} />
      </head>
      <body>
        <div data-kinde-root="true">{children}</div>
      </body>
    </html>
  );
};
