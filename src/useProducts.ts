import { useCallback, useState } from "react";
import { BASE_URL } from "./config";
import { Product } from "./types";
import useAsync from "./useAsync";

export function useProducts() {
  const [reload, setReload] = useState(0);

  const loadProducts = useCallback(() => {
    return fetch(`${BASE_URL}products`).then((res) => {
      return res.json() as Promise<Product[]>;
    });
  }, [reload]);

  const state = useAsync<Product[]>(loadProducts);

  function refresh() {
    setReload((t) => t + 1);
  }

  return { state, refresh };
}
