import React from "react";
import { useParams } from "react-router-dom";
import star_icon_filled from "../images/star_icon.png";
import star_icon_empty from "../images/star_dull_icon.png";
import Everything from "./Everything";
import useStore from "../zustand/store";

function ShowProduct() {
  const { profile, addToCart } = useStore();
  const [selectedSize, setSelectedSize] = React.useState(null);

  let { id } = useParams(); // Get the product ID from URL parameters

  // Find the product with the matching ID
  const product = Everything.find((item) => item.id == id);

  // If the product with the given ID is not found, return null or display a message
  if (!product) {
    return <p>Product not found!</p>;
  }

  // Generate a random number of filled stars between 3 and 5
  const filledStars = Math.min(Math.floor(Math.random() * 3) + 3, 5);

  // The remaining stars will be empty
  const emptyStars = 5 - filledStars;

  const setSize = (size) => {
    setSelectedSize(size);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: "100%",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <section
        style={{
          backgroundColor: "rgb(195, 195, 195)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            width: "40vw",
            height: "80vh",
            borderRadius: "10px",
          }}
        >
          <img
            className="zoom-effect"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            }}
            src={product.image}
            alt={product.name}
          />
        </div>
      </section>

      <div className="product-info" style={{ width: "40vw", height: "100vh" }}>
        <h1>{product.name}</h1>
        <div className="stars">
          {/* Display filled stars */}
          {Array.from({ length: filledStars }).map((_, index) => (
            <img key={index} src={star_icon_filled} alt="" />
          ))}
          {/* Display empty stars */}
          {Array.from({ length: emptyStars }).map((_, index) => (
            <img key={index + filledStars} src={star_icon_empty} alt="" />
          ))}
        </div>

        <div className="product-details">
          <p>Price: ${product.new_price}</p>
          <p>Old Price: ${product.old_price}</p>
          <div className="Sizes">
            <div
              className={selectedSize == "xs" ? "selectedSize" : ""}
              onClick={() => setSize("xs")}
            >
              XS
            </div>
            <div
              className={selectedSize == "s" ? "selectedSize" : ""}
              onClick={() => setSize("s")}
            >
              S
            </div>
            <div
              className={selectedSize == "m" ? "selectedSize" : ""}
              onClick={() => setSize("m")}
            >
              M
            </div>
            <div
              className={selectedSize == "l" ? "selectedSize" : ""}
              onClick={() => setSize("l")}
            >
              L
            </div>
            <div
              className={selectedSize == "xl" ? "selectedSize" : ""}
              onClick={() => setSize("xl")}
            >
              XL
            </div>
          </div>
          <div className="AddCart">
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowProduct;
