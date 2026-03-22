import "./styles.css";
import Tab from "./Generics/Tab/Tab";
import ProductListing from "./ProductListing";
export default function App() {
  return (
    <div
      style={{
        backgroundColor: "#114a69",
        height: "100vh",
        overflow: "scroll",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <input type="text" placeholder="Search Item" />
      <Tab>
        <div style={{ display: "flex" }}>
          <Tab.Trigger value={0}>Products</Tab.Trigger>
          <Tab.Trigger value={1}>Cart</Tab.Trigger>
        </div>
        <Tab.Content value={0}>
          <ProductListing type="products" />
        </Tab.Content>
        <Tab.Content value={1}>
          <ProductListing type="cart" />
        </Tab.Content>
      </Tab>
    </div>
  );
}
