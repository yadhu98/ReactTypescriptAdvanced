import { useState, useEffect } from "react";

type AsyncStateType<T> =
  | {
      state: "idle";
    }
  | {
      state: "loading";
    }
  | {
      state: "success";
      data: T;
    }
  | {
      state: "error";
      message: string;
    };

export default function useAsync<T>(fn: () => Promise<T>) {
  const [state, setState] = useState<AsyncStateType<T>>({
    state: "idle",
  });

  useEffect(() => {
    let isCancelled = false;
    setState({ state: "loading" });
    fn()
      .then((res) => {
        if (!isCancelled) {
          setState({
            state: "success",
            data: res,
          });
        }
      })
      .catch((err) => {
        setState({
          state: "error",
          message: err,
        });
      });

    return () => {
      isCancelled = true;
    };
  }, [fn]);

  return state;
}
