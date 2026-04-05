"use server";

import React from "react";
import {
  getKindeRequiredCSS,
  getKindeRequiredJS,
  getKindeCSRF,
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
        <title>{context.widget.content.pageTitle || "FocusedZen"}</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {getKindeRequiredCSS()}
        <style dangerouslySetInnerHTML={{ __html: getStyles() }} />
      </head>
      <body>
        <div style={{ position: "absolute", width: 0, height: 0, overflow: "hidden", opacity: 0 }}>
          {getKindeCSRF()}
        </div>
        <div data-kinde-root="true">{children}</div>
        {getKindeRequiredJS()}
      </body>
    </html>
  );
};
