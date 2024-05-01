import "./styles.css";
import { ComplextComponent } from "./components/ComplexComponent";

import { OverviewComponent } from "./components/OverviewComponent";
import { ButtonProvider } from "./hooks/useButtonContext";

export default function Component() {
  return (
    <main>
      <h1>Demo</h1>
      <p>This is a demo page.</p>
      <h2>Current states</h2>

      <ButtonProvider>
        <OverviewComponent />
        <ComplextComponent />
      </ButtonProvider>
    </main>
  );
}
