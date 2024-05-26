import React, { useEffect } from "react";
import Navigator2 from "../Access/Navigator2";
import Footer from "../pages/Footer";
import "../App.css";
import "../Styles/Homepage.css";
import API from "../api";
import Section from "../components/products/section";
import { FormLabel, MenuItem, Select } from "@mui/material";
import Categories from "../Access/Categories";

function Products() {
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
            <FormLabel>Filter</FormLabel>
            <Select
              labelId="filter-select-label"
              id="filter-select"
              value={filter}
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
