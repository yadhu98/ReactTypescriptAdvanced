import { useCallback, useState } from "react";
import { BASE_URL } from "./config";
import { Carts } from "./types";
import useAsync from "./useAsync";

export function useCart() {
  const [reload, setReload] = useState(0);

  const loadCarts = useCallback(() => {
    return fetch(`${BASE_URL}carts`).then((res) => {
      return res.json() as Promise<Carts[]>;
    });
  }, [reload]);

  const state = useAsync<Carts[]>(loadCarts);

  function refresh() {
    setReload((t) => t + 1);
  }

  return { state, refresh };
}
