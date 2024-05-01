import { ActionFunctionArgs, json } from "@remix-run/node";

import "./styles.css";
import { ComplextComponent } from "./components/ComplexComponent";
import { ButtonState } from "./types";
import { OverviewComponent } from "./components/OverviewComponent";

export default function Component() {
  return (
    <main>
      <h1>Demo</h1>
      <p>This is a demo page.</p>
      <h2>Current states</h2>
      <OverviewComponent />
      <ComplextComponent />
    </main>
  );
}

export const action = async ({ request }: ActionFunctionArgs) => {
  const formdata = await request.formData();
  const buttonState = formdata.get("buttonState") as ButtonState;

  if (buttonState === "default") {
    return json({ buttonState: "active" });
  }

  return json({ buttonState: "default" });
};
