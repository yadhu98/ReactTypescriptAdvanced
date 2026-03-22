import { Product } from "./types";

export default function ProductItem({ item }: { item: Product }) {
  return (
    <div
      className="App"
      key={item.id}
      style={{
        backgroundColor: "#bee6f9",
        borderRadius: "10px",
        width: "350px",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        boxShadow:
          "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
      }}
    >
      <h3>{item.title}</h3>
      <div
        className="product-main"
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="product-image-container">
          <img
            style={{ maxHeight: "300px", maxWidth: "300px" }}
            src={item.image}
            alt="item-image"
            className="product-image"
          />
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            // width: "100%",
            // height: "70px",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#bee6f980",
          }}
          className="price-tag"
        >
          <span
            className="price-text"
            style={{
              fontSize: "2rem",
              color: "#0c2f45",
              fontWeight: "bold",
            }}
          >
            ${item.price}
          </span>
          <div className="item-description">
            <h4>{item.title}</h4>
            {item.description}
            <h2>${item.price}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
