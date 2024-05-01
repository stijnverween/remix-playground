import { MouseEvent } from "react";
import { useButton } from "../hooks/useButtonContext";
import { ButtonState } from "../types";

export const ComplextComponent = () => {
  const { state, setState } = useButton();

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    return setState(event.currentTarget.value as ButtonState);
  };

  return (
    <button
      className={`button ${state}`}
      name="buttonState"
      value={state}
      onClick={handleClick}
    >
      Update State
    </button>
  );
};
