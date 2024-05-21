import React from "react";
import Navigator2 from "../Access/Navigator2";
import Footer from "./Footer";
import "../App.css";
import "../Styles/Homepage.css";
import { useParams } from "react-router-dom";
import Everything from "./Everything";
import Pics from "../Arrange/Pics";
import { useEffect } from "react";
import Categories from "../Access/Categories";
import API from "../api";

function Search() {
  const params = useParams();
  const { query } = params;
  const [products, setProducts] = React.useState([]);

  const filter = (query) => {
    const _filtered = Everything.filter((item) => item.name.includes(query));
    setProducts(_filtered);
    
  };

  const getProductsByName = async (query) => {
    const res = await API.STOCK.getByName(query)
    setProducts(res.data)
  }

  useEffect(() => {
    getProductsByName(query)
  }, [query]);

  return (
    <>
      <div>
        <Navigator2 />
        <Categories/>
        <div className="P_items">
          <h1>Search results for '{query}'</h1>
          <hr />
          <div className="P_Get">
            {products.map((product, i) => (
              <Pics
                key={i}
                product={product}
              />
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Search;
