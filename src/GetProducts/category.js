import React from "react";
import Navigator2 from "../Access/Navigator2";
import Footer from "../pages/Footer";
import "../App.css";
import "../Styles/Homepage.css";
import { useParams } from "react-router-dom";
import Pics from "../Arrange/Pics";
import { useEffect } from "react";
import API from "../api";
import Categories from "../Access/Categories";

function Category() {
  const params = useParams();
  const { category } = params;
  const [products, setProducts] = React.useState([]);


  const getProductsByCategory = async (category) => {
    const config = {

    }
    const res = await API.STOCK.getByCategory(category, config)
    if (res.data){
      setProducts(res.data)
    }
  }

  useEffect(() => {
    getProductsByCategory(category)
  }, [category]);

  return (
    <>
      <div>
        <Navigator2 />
        <Categories />
        <div className="P_items">
          <section>
            <h1>{category}</h1>
          </section>
          <hr />
          <div className="P_items">
              {products?.map((product, i) => (
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

export default Category;
