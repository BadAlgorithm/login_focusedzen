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
        <link
          rel="preload"
          as="image"
          href="https://cdn.focusedzen.com/login/garden-entrance-2x.webp"
          type="image/webp"
          fetchPriority="high"
          media="(min-width: 769px)"
        />
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
        <script nonce={getKindeNonce()} dangerouslySetInnerHTML={{ __html: `
          (function () {
            var everLoaded = false;
            function ready(img, instant) {
              img.classList.add('loaded');
              var panel = img.closest('[data-fz-panel="right"]');
              if (panel) {
                if (instant) panel.classList.add('no-transition');
                panel.classList.add('scene-ready');
                if (instant) {
                  void panel.offsetHeight;
                  requestAnimationFrame(function () {
                    panel.classList.remove('no-transition');
                  });
                }
              }
              everLoaded = true;
            }
            function check(img) {
              if (img.classList.contains('loaded')) return;
              var instant = everLoaded || (img.complete && img.naturalWidth > 0);
              if (instant) {
                ready(img, true);
              } else {
                img.addEventListener('load', (function (el) { return function () { ready(el, false); }; })(img));
                img.addEventListener('error', (function (el) { return function () { ready(el, false); }; })(img));
              }
            }
            function init() {
              var imgs = document.querySelectorAll('img.panel-image');
              for (var i = 0; i < imgs.length; i++) check(imgs[i]);
            }
            /* Re-run on Kinde SPA navigations (login <-> register) */
            new MutationObserver(function () { init(); })
              .observe(document.body, { childList: true, subtree: true });
            if (document.readyState === 'loading') {
              document.addEventListener('DOMContentLoaded', init);
            } else {
              init();
            }
          })();
        ` }} />
      </body>
    </html>
  );
};
