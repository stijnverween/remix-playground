import { FetcherWithComponents, useFetcher } from "@remix-run/react";
import { action } from "../route";

export const useButtonFetcher = () => {
  const { data, ...fetcher } = useFetcher<typeof action>({ key: "button-id" });

  return {
    ...fetcher,
    data: data ?? { buttonState: "default" },
  } satisfies FetcherWithComponents<{ buttonState: string }>;
};
