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

function Category() {
  const params = useParams();
  const { category } = params;
  const [products, setProducts] = React.useState(Everything);

  useEffect(() => {
    switch (category) {
      case "men":
        setProducts(GetMen);
        break;
      case "women":
        setProducts(GetWoman);
        break;
      case "kids":
        setProducts(GetEverything);
        break;
      default:
        setProducts(GetEverything);
    }
  }, []);

  return (
    <>
      <div>
        <Navigator2 />
        <Categories/>
        <div className="P_items">
          <section>
            <h1>{category}d</h1>
            <section>
              <p>Here we filter</p>
            </section>
          </section>
          <hr />
          <div className="P_Get">
            {Return}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Category;
