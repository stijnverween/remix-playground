import { ActionFunctionArgs, json } from "@remix-run/node";
import { useFetcher } from "@remix-run/react";

type ButtonState = "default" | "active";

import "./styles.css";

export default function Component() {
  const fetcher = useFetcher<typeof action>();
  const buttonState = fetcher.data?.buttonState ?? "default";

  return (
    <main>
      <h1>Demo</h1>
      <p>This is a demo page.</p>

      <h2>Current states</h2>
      <ul>
        <li>Button - {buttonState}</li>
      </ul>

      <fetcher.Form method="POST">
        <button
          className={`button ${buttonState}`}
          name="buttonState"
          value={buttonState}
        >
          Update State
        </button>
      </fetcher.Form>
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
