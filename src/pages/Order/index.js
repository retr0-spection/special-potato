import React, { useEffect } from "react";
import useStore from "../../zustand/store";
import API from "../../api";

const OrderListComponent = () => {
  const [orders, setOrder] = React.useState([]);
  const { profile } = useStore();

  const getOrders = async () => {
    const config = {
      headers: {
        Authorization: "Bearer " + profile.token,
      },
    };

    const res = await API.ORDER.getByUserId(config);

    if (res.data) {
      setOrder(res.data);
    }
  };

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <div>
      <h1>Order History</h1>
      {orders.map((order) => {
       

        return (
          <section style={{border:'solid', borderWidth:'1px',borderColor:'gray', margin:'10px', borderRadius:10}}>
            <p style={{fontWeight:'bold'}}>Order Numeber: {order.id}</p>
            {order.products.map((item) => {
              return (
                <section
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img src={item.image} style={{ width:'150px', height:'250px', borderRadius:'5px', objectFit:'cover' }}/>
                    <p style={{ paddingLeft: "10px", fontWeight:'bold',  }}>{item.name}</p>
                  </div>
                  <div>
                    <p>Order Confirmed</p>
                  </div>
                </section>
              );
            })}
          </section>
        );
      })}
    </div>
  );
};

export default OrderListComponent;
