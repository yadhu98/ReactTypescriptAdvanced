import { useProducts } from "./useProducts";
import { AsyncState, Product } from "./types";
import ProductItem from "./ProductItem";
import { useCart } from "./useCart";

type ProductTypes = "products" | "cart";
export default function ProductListing({ type }: { type: ProductTypes }) {
  // let feederData = { state, refresh };

  function narrowingHooks(type: ProductTypes) {
    let data;
    switch (type) {
      case "products":
        data = useProducts();
        break;
      case "cart":
        data = useCart();
        break;
      default:
        break;
    }
    return {
      data: data?.state,
      refresh: data?.refresh,
    };
  }

  const { data, refresh } = narrowingHooks(type);

  console.log("FEED", narrowingHooks(type));
  console.log(data);
  return (
    <div
      style={{
        display: "flex",
        width: "100vw",
        justifyContent: "center",
        // justifyContent: "space-between",
        gap: "30px",
        flexWrap: "wrap",
        marginTop: "20px",
      }}
    >
      {data?.state === "loading" && <h1>Loading</h1>}
      {data?.state === "success" &&
        (data.data as Product[]).map((item) => {
          return <ProductItem item={item} key={item.id} />;
        })}
    </div>
  );
}
