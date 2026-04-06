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
          fontSize: "1.125rem",
          fontWeight: 500,
          color: "#E8E6E3",
          marginBottom: "0.375rem",
          letterSpacing: "-0.025em",
        }}
      >
        {heading}
      </h1>
      {description && (
        <p
          style={{
            fontSize: "0.875rem",
            color: "#ABABAB",
            marginBottom: "1.75rem",
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
