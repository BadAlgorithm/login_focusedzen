"use server";

import { SplitLayout } from "../../../../layouts/split";
import { Root } from "../../../../root";
import { type KindePageEvent, getKindeLoginUrl } from "@kinde/infrastructure";
import React from "react";
import { renderToString } from "react-dom/server.browser";

const LoggedOutPage: React.FC<KindePageEvent> = ({ context, request }) => {
  return (
    <Root context={context} request={request}>
      <SplitLayout>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <h1
            style={{
              fontSize: "1.125rem",
              fontWeight: 500,
              color: "#E8E6E3",
              marginBottom: "0.75rem",
              letterSpacing: "-0.025em",
            }}
          >
            You've signed out
          </h1>
          <p
            style={{
              fontSize: "0.875rem",
              color: "#ABABAB",
              marginBottom: "2rem",
              lineHeight: 1.5,
            }}
          >
            Ready to come back? Sign in to pick up where you left off.
          </p>
          <a
            href={getKindeLoginUrl()}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              minHeight: "2.75rem",
              padding: "0.75rem 1.5rem",
              background: "linear-gradient(to bottom, #5C8A73, #4e7862)",
              color: "#FFFFFF",
              border: "none",
              borderRadius: "12px",
              fontSize: "0.875rem",
              fontWeight: 600,
              fontFamily: "'Manrope', system-ui, sans-serif",
              letterSpacing: "0.02em",
              textDecoration: "none",
              cursor: "pointer",
              boxShadow:
                "inset 0 1px 0 rgba(255,255,255,0.1), 0 1px 2px rgba(0,0,0,0.3)",
            }}
          >
            Sign in
          </a>
        </div>
      </SplitLayout>
    </Root>
  );
};

export default async function Page(event: KindePageEvent): Promise<string> {
  const page = await LoggedOutPage(event);
  return renderToString(page);
}
