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
        maxWidth: "400px",
      }}
    >
      <h1
        style={{
          fontSize: "1.75rem",
          fontWeight: 600,
          color: "#E8E6E3",
          marginBottom: "0.5rem",
          textAlign: "center",
          letterSpacing: "-0.02em",
        }}
      >
        {heading}
      </h1>
      {description && (
        <p
          style={{
            fontSize: "0.95rem",
            color: "#ABABAB",
            marginBottom: "2.5rem",
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
