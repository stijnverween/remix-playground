import type { ReactNode } from "react";
import { createContext, useContext, useState } from "react";
import { ButtonState } from "../types";

type Context = {
  state: string;
  setState: (value: ButtonState) => void;
};

type Props = {
  children: ReactNode;
};

const ButtonContext = createContext<Context | undefined>(undefined);

export const ButtonProvider = ({ children }: Props) => {
  const [state, defaultSet] = useState<ButtonState>("default");

  const setState = (oldState: ButtonState) => {
    switch (oldState) {
      case "default": {
        return defaultSet("active");
      }
      case "active": {
        return defaultSet("default");
      }
    }
  };

  return (
    <ButtonContext.Provider value={{ state, setState }}>
      {children}
    </ButtonContext.Provider>
  );
};

export const useButton = () => {
  const context = useContext(ButtonContext);

  if (!context) {
    throw new Error(
      "useButton can not be used here, make sure you are using ButtonProvider."
    );
  }

  return context;
};
