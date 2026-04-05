"use server";

import { Widget } from "../../../../components/widget";
import { SplitLayout } from "../../../../layouts/split";
import { Root } from "../../../../root";
import { type KindePageEvent } from "@kinde/infrastructure";
import React from "react";
import { renderToString } from "react-dom/server.browser";

const LoginPage: React.FC<KindePageEvent> = ({ context, request }) => {
  return (
    <Root context={context} request={request}>
      <SplitLayout>
        <Widget
          heading="Ready when you are"
          description=""
        />
      </SplitLayout>
    </Root>
  );
};

export default async function Page(event: KindePageEvent): Promise<string> {
  const page = await LoginPage(event);
  return renderToString(page);
}
