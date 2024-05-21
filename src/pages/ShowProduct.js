import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import star_icon_filled from "../images/star_icon.png";
import star_icon_empty from "../images/star_dull_icon.png";
import Everything from "./Everything";
import useStore from "../zustand/store";
import Navigator2 from "../Access/Navigator2"
import Footer from "./Footer"
import Categories from "../Access/Categories";
import API from "../api";
import { CiCircleMinus } from "react-icons/ci";
import { FaCirclePlus } from "react-icons/fa6";
import { Divider, FormLabel, OutlinedInput } from "@mui/material";
import { Label } from "@mui/icons-material";

function ShowProduct() {
  const { addToCart } = useStore(); // Update to get addToCart method from store
  const [selectedSize, setSelectedSize] = React.useState(null);
  const [quantity, setQuantity] = React.useState(1);
  const navigate = useNavigate()

  let { id } = useParams(); // Get the product ID from URL parameters
  const [product, setProduct] = React.useState(null)



  const getProduct = async () => {

    const res = await API.STOCK.getById(id)

    if (res.data){
      setProduct(res.data)
    }

  }
 
  useEffect(() => {
    getProduct()
  },[])

  
  const setSize = (size) => {
    setSelectedSize(size);
  };

  const handleAddToCart = () => {
    addToCart({product, quantity, selectedSize}); // Add the selected product to the cart
    navigate('/cart')
  };

  // Generate a random number of filled stars between 3 and 5
  const filledStars = Math.min(Math.floor(Math.random() * 3) + 3, 5);
  // The remaining stars will be empty
  const emptyStars = 5 - filledStars;

  return (
    
    <div>
      <Navigator2/>
      <Categories/>
    {product ? <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: "100%",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <section
        style={{
          // backgroundColor: "rgb(195, 195, 195)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            width: "40vw",
            height: "80vh",
            borderRadius: "10px",
          }}
        >
          <img
            className="zoom-effect"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            }}
            src={product.image}
            alt={product.name}
          />
        </div>
      </section>

      <div className="product-info" style={{ width: "40vw", height: "100vh" }}>
        <h1>{product.name}</h1>

          <Divider />
       
        <div className="product-details">
            <FormLabel>Sizes</FormLabel>
          <div className="Sizes" style={{marginLeft:0}}>
            <div
              className={selectedSize === "xs" ? "selectedSize" : ""}
              onClick={() => setSize("xs")}
            >
              XS
            </div>
            <div
              className={selectedSize === "s" ? "selectedSize" : ""}
              onClick={() => setSize("s")}
            >
              S
            </div>
            <div
              className={selectedSize === "m" ? "selectedSize" : ""}
              onClick={() => setSize("m")}
            >
              M
            </div>
            <div
              className={selectedSize === "l" ? "selectedSize" : ""}
              onClick={() => setSize("l")}
            >
              L
            </div>
            <div
              className={selectedSize === "xl" ? "selectedSize" : ""}
              onClick={() => setSize("xl")}
            >
              XL
            </div>
          </div>
          <Divider />
          <FormLabel>Quantity</FormLabel>
          <section style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
          <CiCircleMinus style={{fontSize:30}}  onClick={() => setQuantity(q => q-1 >= 0 ? parseInt(q-1): parseInt(q))} />
          <OutlinedInput style={{marginLeft:'10px',marginRight:'10px', width:'50px', paddingTop:'10px'}} value={quantity} onChange={(e) => setQuantity(e.target.value)} />
          <FaCirclePlus style={{fontSize:30}} onClick={() => setQuantity(q => parseInt(q+1))}  />
          </section>
          <Divider />
          <FormLabel>Price</FormLabel>
          <p style={{fontSize:20, fontWeight:'bold'}}>R{product.price}</p>
          <div className="AddCart" style={{padding:0}}>
            <button disabled={!(quantity)} onClick={handleAddToCart}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div> : null}
    <Footer/>
    </div>
  );
}

export default ShowProduct;
