import React from "react";
import Navigator2 from "../Access/Navigator2";
import Footer from "../pages/Footer";
import "../App.css";
import "../Styles/Homepage.css";
import Categories from "../Access/Categories";
import { useParams } from "react-router-dom";
import Everything from "../pages/Everything";
import AssignMen from "./AssignMen";
import Pics from "../Arrange/Pics";
import { useEffect } from "react";
import AssignWoman from "./AssignWoman";
import AssignKids from "./AssignKids";
import GetMen from "./GetMen";
import GetWoman from "./GetWoman";
import GetEverything from "./GetEverything";
import Return from "../Arrange/Return";
import API from "../api";

function Category() {
  const params = useParams();
  const { category } = params;
  const [products, setProducts] = React.useState(Everything);


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
