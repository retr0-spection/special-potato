import React from "react";
import Pics from "../Arrange/Pics";
import "../Styles/GetProducts.css";

function Return(products) {
  return (
    <section className="P_items">
      <hr />
      <section className="P_Get">
        {products.map((product, i) => (
          <Pics
            key={i}
            image={product.image}
            name={product.name}
            new={product.new_price}
            old={product.old_price}
            id={product.id}
          />
        ))}
      </section>
    </section>
  );
}

export default Return;
