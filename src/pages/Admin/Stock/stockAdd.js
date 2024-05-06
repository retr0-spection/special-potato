import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API from "../../../api";
import { Button, FormLabel, Input, MenuItem, Select } from "@mui/material";
import useStore from "../../../zustand/store";

const StockAdd = () => {
  const { id } = useParams();
  const [item, setItem] = React.useState(null);
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState(0);
  const [description, setDescription] = React.useState(null);
  const [image, setImage] = React.useState("");
  const [gender, setGender] = React.useState("male");
  const [quanXS, setQuanXS] = React.useState(0);
  const [quanS, setQuanS] = React.useState(0);
  const [quanM, setQuanM] = React.useState(0);
  const [quanL, setQuanL] = React.useState(0);
  const [quanXL, setQuanXL] = React.useState(0);

  const { profile } = useStore();
  const navigate = useNavigate();

  const addItem = async () => {
    const quantity = {
        xs:quanXS,
        s: quanS,
        m:quanM,
        l:quanL,
        xl:quanXL
    }

    const payload = {
      name,
      description,
      price,
      image,
      quantity,
      gender
    };

    const config = {
      headers: {
        Authorization: "Bearer " + profile.token,
      },
    };

    const res = await API.STOCK.add(payload, config);
    if (res.data) {
      navigate("/admin/stock");
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <section style={{ width: "50%" }}>
        {image.length ? (
          <img
            style={{
              height: "100%",
              width: "100%",
              borderRadius: "10px",
              objectFit: "cover",
            }}
            src={image}
          />
        ) : (
          <span
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              width: "100%",
              borderRadius: "10px",
              backgroundColor: "gray",
            }}
          >
            <p style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
              No Image Set
            </p>
          </span>
        )}
      </section>
      <section style={{ width: "50%" }}>
        <section>
          <h3 style={{ fontSize: 24 }}>Add Product</h3>
        </section>
        <section>
          <FormLabel>Name</FormLabel>
          <Input
            placeholder="Product Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ width: "100%" }}
          />
        </section>
        <section>
          <FormLabel>Price</FormLabel>

          <Input
            placeholder="Product Price"
            value={price}
            type="number"
            onChange={(e) => setPrice(e.target.value)}
            style={{ width: "100%" }}
          />
        </section>
        <section>
          <FormLabel>Description</FormLabel>

          <Input
            placeholder="Product Description"
            value={description}
            multiline
            onChange={(e) => setDescription(e.target.value)}
            style={{ width: "100%" }}
          />
        </section>
        <section>
          <FormLabel>Image</FormLabel>

          <Input
            placeholder="Product Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            style={{ width: "100%" }}
          />
        </section>
        <section style={{ display: "flex", width: "100%" }}>
          <section>
            <FormLabel>Gender</FormLabel>
            <Select
              labelId="gender-select-label"
              id="gender-select"
              value={gender}
              // label="Age"
              onChange={(e) => setGender(e.target.value)}
            >
              <MenuItem value={"male"}>Male</MenuItem>
              <MenuItem value={"female"}>Female</MenuItem>
              <MenuItem value={"unisex"}>Unisex</MenuItem>
            </Select>
          </section>
          <section>
            <FormLabel>Quantity</FormLabel>
            <section style={{ display: "flex", width: "", padding: 0 }}>
              <div style={{marginRight:10}}>
                <FormLabel>XS</FormLabel>
                <Input
                  type="number"
                  min="0"
                  value={quanXS}
                  onChange={(e) => setQuanXS(e.target.value)}
                />
              </div>
              <div style={{marginRight:10}}>
                <FormLabel>S</FormLabel>
                <Input
                  type="number"
                  min="0"
                  value={quanS}
                  onChange={(e) => setQuanS(e.target.value)}
                />
              </div>
              <div style={{marginRight:10}}>
                <FormLabel>M</FormLabel>
                <Input
                  type="number"
                  min="0"
                  value={quanM}
                  onChange={(e) => setQuanM(e.target.value)}
                />
              </div>
              <div style={{marginRight:10}}>
                <FormLabel>L</FormLabel>
                <Input
                  type="number"
                  min="0"
                  value={quanL}
                  onChange={(e) => setQuanL(e.target.value)}
                />
              </div>
              <div style={{marginRight:10}}>
                <FormLabel>XL</FormLabel>
                <Input
                  type="number"
                  min="0"
                  value={quanXL}
                  onChange={(e) => setQuanXL(e.target.value)}
                />
              </div>
            </section>
          </section>
        </section>
        <section>
          <Button
            onClick={addItem}
            style={{ backgroundColor: "black", color: "white" }}
          >
            Add
          </Button>
        </section>
      </section>
    </div>
  );
};

export default StockAdd;
