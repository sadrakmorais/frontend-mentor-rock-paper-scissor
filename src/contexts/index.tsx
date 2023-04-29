import React, { ReactNode } from "react";
import { ScoreContextProvider } from "./score";

type AppProviderProps = {
  children: ReactNode;
};
export const AppProvider = ({ children }: AppProviderProps) => {
  return <ScoreContextProvider>{children}</ScoreContextProvider>;
};
