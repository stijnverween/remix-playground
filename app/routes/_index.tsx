import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Remix playground" },
    { name: "description", content: "Welcome to the Remix playground" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to Remix</h1>
      <ul>
        <li>
          <Link to="/form">Update state with a button and form submit</Link>
        </li>
        <li>
          <Link to="/context">Update state with a button and useContext</Link>
        </li>
      </ul>
    </div>
  );
}
