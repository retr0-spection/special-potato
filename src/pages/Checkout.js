import React from "react";
import "../frontend/checkout.css";
import "../frontend/stock.css";
import { Button, Input, InputLabel } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Rings } from "react-loader-spinner";
import useStore from "../zustand/store";

function Checkout() {
    const [isLoading, setIsLoading] = React.useState(false)
    const navigate = useNavigate()
    const {emptyCart} = useStore()

    const submit = () => {
        setIsLoading(true)

        setTimeout(() => {
            setIsLoading(false)
            navigate('/')
            alert('Order Complete')
            emptyCart()
        }, 5000)
    }
  return (
    <body>
        <h1>Checkout</h1>
        <section style={{display:'flex',padding:'2%'}}>
            <section style={{width:'50%'}}>
                <h3>Payment Methods</h3>
                <section>
                    <InputLabel>Card Number</InputLabel>
                    <Input style={{width:'100%'}} />
                </section>
                <section>
                    <InputLabel>Cvv</InputLabel>
                    <Input  style={{width:'100%'}}/>
                </section>
                <section>
                    <InputLabel>Expiry Date</InputLabel>
                    <Input style={{width:'100%'}} />
                </section>
            </section>
            <section style={{width:'50%'}}>
                <h3>Delivery Address</h3>
                <section>
                    <InputLabel>Steet Name</InputLabel>
                    <Input required style={{width:'100%'}} />
                </section>
                <section>
                    <InputLabel >Street Number</InputLabel>
                    <Input type="number" required  style={{width:'100%'}}/>
                </section>
                <section>
                    <InputLabel>Building Name (optional)</InputLabel>
                    <Input style={{width:'100%'}}/>
                </section>
                <section>
                    <InputLabel>Postal Code</InputLabel>
                    <Input type="number" required style={{width:'100%'}} />
                </section>
            </section>
        </section>
        <section style={{display:'flex', justifyContent:'end'}}>
            <Button onClick={submit} style={{backgroundColor:'black', color:'white'}}>
                {isLoading ?  <Rings
                  visible={true}
                  height="30"
                  width="30"
                  color="gray"
                  ariaLabel="rings-loading"
                />   :  'Confirm Order' }
            </Button>
        </section>
    </body>
  );
}

export default Checkout;
