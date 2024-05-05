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
  const [gender, setGender] = React.useState('male');

  const { profile } = useStore();
  const navigate = useNavigate();

  const addItem = async () => {
    const payload = {
      name,
      description,
      price,
      image,
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
        <section>
          <FormLabel>Gender</FormLabel>

          <Select
            labelId="gender-select-label"
            id="gender-select"
            value={gender}
            // label="Age"
            onChange={(e) => setGender(e.target.value)}
          >
            <MenuItem value={'male'}>Male</MenuItem>
            <MenuItem value={'female'}>Female</MenuItem>
            <MenuItem value={'unisex'}>Unisex</MenuItem>
          </Select>
        </section>
        <section>
          <Button
            onClick={addItem}
            style={{ backgroundColor: "black", color: "white" }}
          >
            Edit
          </Button>
        </section>
      </section>
    </div>
  );
};

export default StockAdd;
