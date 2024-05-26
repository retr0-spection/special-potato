import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API from "../../../api";
import { Button, FormLabel, Input, MenuItem, Select } from "@mui/material";
import useStore from "../../../zustand/store";

const StockEdit = () => {
  const { id } = useParams();
  const [item, setItem] = React.useState(null);
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState(0);
  const [image, setImage] = React.useState("");
  const [description, setDescription] = React.useState(null);
  const [gender, setGender] = React.useState("male");
  const [type, setType] = React.useState("top");
  const [quanXS, setQuanXS] = React.useState(0);
  const [quanS, setQuanS] = React.useState(0);
  const [quanM, setQuanM] = React.useState(0);
  const [quanL, setQuanL] = React.useState(0);
  const [quanXL, setQuanXL] = React.useState(0);
  const { profile } = useStore();
  const navigate = useNavigate();

  const changeDetails = async () => {
    const quantity = {
      xs: quanXS,
      s: quanS,
      m: quanM,
      l: quanL,
      xl: quanXL,
    };

    const payload = {
      name,
      description,
      price,
      quantity,
      gender,
      image,
      type
    };

    const config = {
      headers: {
        Authorization: "Bearer " + profile.token,
      },
    };

    const res = await API.STOCK.changeById(id, payload, config);
    if (res.data) {
      navigate("/admin/stock");
    }
  };

  const getItemById = async () => {
    const res = await API.STOCK.getById(id);

    if (res.data) {
      setItem(res.data);
      console.log(res.data);
    }
  };

  useEffect(() => {
    getItemById();
  }, []);

  useEffect(() => {
    if (item) {
      setName(item.name);
      setPrice(item.price);
      setDescription(item.description);
      setImage(item.image);
      setGender(item.gender);
      setQuanXS(item.quantity[0]?.quantity);
      setQuanS(item.quantity[1]?.quantity);
      setQuanM(item.quantity[2]?.quantity);
      setQuanL(item.quantity[3]?.quantity);
      setQuanXL(item.quantity[4]?.quantity);
    }
  }, [item]);

  return (
    <section style={{ display: "flex" }}>
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
          <h3 style={{ fontSize: 24 }}>Edit Product</h3>
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
            <FormLabel>Type</FormLabel>
            <Select
              labelId="gender-select-label"
              id="gender-select"
              value={type}
              // label="Age"
              onChange={(e) => setType(e.target.value)}
            >
              <MenuItem value={"top"}>Top</MenuItem>
              <MenuItem value={"pants"}>Pants</MenuItem>
              <MenuItem value={"shoes"}>Shoes</MenuItem>
              <MenuItem value={"jacket"}>Jacket</MenuItem>
            </Select>
          </section>
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
              <section style={{ marginRight: 10 }}>
                <FormLabel>XS</FormLabel>
                <Input
                  type="number"
                  min="0"
                  value={quanXS}
                  onChange={(e) => setQuanXS(e.target.value)}
                />
              </section>
              <section style={{ marginRight: 10 }}>
                <FormLabel>S</FormLabel>
                <Input
                  type="number"
                  min="0"
                  value={quanS}
                  onChange={(e) => setQuanS(e.target.value)}
                />
              </section>
              <section style={{ marginRight: 10 }}>
                <FormLabel>M</FormLabel>
                <Input
                  type="number"
                  min="0"
                  value={quanM}
                  onChange={(e) => setQuanM(e.target.value)}
                />
              </section>
              <section style={{ marginRight: 10 }}>
                <FormLabel>L</FormLabel>
                <Input
                  type="number"
                  min="0"
                  value={quanL}
                  onChange={(e) => setQuanL(e.target.value)}
                />
              </section>
              <section style={{ marginRight: 10 }}>
                <FormLabel>XL</FormLabel>
                <Input
                  type="number"
                  min="0"
                  value={quanXL}
                  onChange={(e) => setQuanXL(e.target.value)}
                />
              </section>
            </section>
          </section>
        </section>
        <section>
          <Button
            onClick={changeDetails}
            style={{ backgroundColor: "black", color: "white" }}
          >
            Edit
          </Button>
        </section>
      </section>
    </section>
  );
};

export default StockEdit;
