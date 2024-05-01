import { useButtonFetcher } from "../hooks/useButtonFetcher";

export const OverviewComponent = () => {
  const fetcher = useButtonFetcher();
  const { buttonState } = fetcher.data;

  return (
    <ul>
      <li>Button - {buttonState}</li>
    </ul>
  );
};
