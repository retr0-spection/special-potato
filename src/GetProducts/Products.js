import React, { useEffect } from "react";
import Navigator2 from "../Access/Navigator2";
import Footer from "../pages/Footer";
import "../App.css";
import "../Styles/Homepage.css";
import Categories from "../Access/Categories";
import GetProducts from "./GetProducts";
import GetProducts2 from "./GetProducts2";
import GetProducts3 from "./GetProducts3";
import { useLocation } from "react-router-dom";
import API from "../api";
import Section from "../components/products/section";
import { FormLabel, MenuItem, Select } from "@mui/material";

function Products() {
  const location = useLocation();
  const searchTerm = location.pathname.split("/search/")[1];
  const [sections, setSections] = React.useState([]);
  const [filter, setFilter] = React.useState('all')

  const getHomeFeed = async () => {
    const res = await API.FEED.get({});
    if (res.data) {
      console.log(res.data);
      setSections(res.data);
    }
  };

  const getFilteredFeed = async () => {
    const res = await API.FEED.filter(filter, {});
    if (res.data) {
      console.log(res.data);
      setSections(res.data);
    }
  };


  useEffect(() => {
    if (filter == 'all'){
        getHomeFeed();
    }else{
        getFilteredFeed()
    }
  },[filter])

  return (
    <>
      <div>
        <Navigator2 />
        <Categories />
        <section>
        <section style={{display:'flex', justifyContent:'flex-end', }}>
            <section style={{padding:0}}>
            <FormLabel>Gender</FormLabel>
            <Select
              labelId="gender-select-label"
              id="gender-select"
              value={filter}
              // label="Age"
              onChange={(e) => setFilter(e.target.value)}
            >
              <MenuItem value={"all"}>All</MenuItem>
              <MenuItem value={"top"}>Tops</MenuItem>
              <MenuItem value={"pants"}>Pants</MenuItem>
              <MenuItem value={"jacket"}>Jacket</MenuItem>
              <MenuItem value={"shoes"}>Shoes</MenuItem>
            </Select>
            </section>
          </section>
        </section>
        {sections.map((section) => {
          return <Section section={section} />;
        })}
        <Footer />
      </div>
    </>
  );
}

export default Products;
