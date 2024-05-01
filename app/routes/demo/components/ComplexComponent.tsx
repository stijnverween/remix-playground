import { useButtonFetcher } from "../hooks/useButtonFetcher";

export const ComplextComponent = () => {
  const fetcher = useButtonFetcher();
  const { buttonState } = fetcher.data;

  return (
    <fetcher.Form method="POST">
      <button
        className={`button ${buttonState}`}
        name="buttonState"
        value={buttonState}
      >
        Update State
      </button>
    </fetcher.Form>
  );
};
