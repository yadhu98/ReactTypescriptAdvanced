import React, {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import { useTabContext } from "./useTabContext";

export const TabContext = createContext<{
  value: number;
  setValue: Dispatch<SetStateAction<number>>;
} | null>(null);
export default function Tab({ children }: { children: ReactNode }) {
  const [value, setValue] = useState<number>(0);
  console.log("Value", value);
  return (
    <TabContext.Provider value={{ value, setValue }}>
      {children}
    </TabContext.Provider>
  );
}

function TabTrigger({
  value: triggeredValue,
  children,
}: {
  value: number;
  children: ReactNode;
}) {
  const { value, setValue } = useTabContext();
  const isActive = value === triggeredValue;

  return (
    <button
      onClick={() => setValue(triggeredValue)}
      style={{
        fontWeight: isActive ? "bolder" : "lighter",
        height: "50px",
        width: "150px",
        background: isActive ? "#0c2f45" : "#e2f2fc",
        color: isActive ? "white" : "black",
        border: isActive ? "2px solid white" : "none",
        borderRadius: "10px",
        cursor: "pointer",
      }}
    >
      {children}
    </button>
  );
}

function TabContent({
  value: triggeredValue,
  children,
}: {
  value: number;
  children: ReactNode;
}) {
  const { value } = useTabContext();
  const isActive = value === triggeredValue;

  if (!isActive) {
    return null;
  }
  // throw new Error();
  return <>{children}</>;
}

Tab.Trigger = TabTrigger;
Tab.Content = TabContent;

export { Tab, TabTrigger, TabContent };
