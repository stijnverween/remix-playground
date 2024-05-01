import { useButton } from "../hooks/useButtonContext";

export const OverviewComponent = () => {
  const { state } = useButton();

  return (
    <ul>
      <li>Button - {state}</li>
    </ul>
  );
};
