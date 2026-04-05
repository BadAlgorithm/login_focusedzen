"use server";

import React from "react";
import { getKindeWidget } from "@kinde/infrastructure";

type WidgetProps = {
  heading: string;
  description: string;
};

export const Widget: React.FC<WidgetProps> = ({ heading, description }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        maxWidth: "420px",
        padding: "0 2rem",
      }}
    >
      <h1
        style={{
          fontSize: "1.75rem",
          fontWeight: 600,
          color: "#e0e0e0",
          marginBottom: "0.5rem",
          textAlign: "center",
        }}
      >
        {heading}
      </h1>
      {description && (
        <p
          style={{
            fontSize: "0.95rem",
            color: "rgba(255, 255, 255, 0.5)",
            marginBottom: "2rem",
            textAlign: "center",
            lineHeight: 1.5,
          }}
        >
          {description}
        </p>
      )}
      {getKindeWidget()}
    </div>
  );
};
