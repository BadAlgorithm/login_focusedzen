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
        width: "100%",
      }}
    >
      <h1
        style={{
          fontSize: "1.5rem",
          fontWeight: 600,
          color: "#E8E6E3",
          marginBottom: "0.5rem",
          letterSpacing: "-0.02em",
        }}
      >
        {heading}
      </h1>
      {description && (
        <p
          style={{
            fontSize: "0.9rem",
            color: "#ABABAB",
            marginBottom: "2rem",
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
