import { useContext } from "react";
import { TabContext } from "./Tab";

export function useTabContext() {
  const context = useContext(TabContext);
  if (!context) {
    throw new Error();
  }
  return context;
}
