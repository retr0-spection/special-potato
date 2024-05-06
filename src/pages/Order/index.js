import React, { useEffect } from "react";
import useStore from "../../zustand/store";
import API from "../../api";

const OrderListComponent = () => {
  const [orders, setOrder] = React.useState([]);
  const [items, setItems] = React.useState([]);
  const { profile } = useStore();

  const getOrders = async () => {
    const config = {
      headers: {
        Authorization: "Bearer " + profile.token,
      },
    };

    const res = await API.ORDER.getByUserId(config);

    if (res.data) {
      setOrder(res.data.orders);
      setItems(res.data.items)
    }
  };

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <div>
      <h1>Orders</h1>
      {orders.map((order) => {
        let _orderItems = JSON.parse(order.items);
        let finalItems = [];
        items.map((_item) => {
            console.log(_item)
          _orderItems.map((orderItem) => {
            if (_item.itemId == orderItem) {
              finalItems.push(_item);
            }
          });
        });

        return (
          <section>
            <p>OrderNo: {order.id}</p>
            {finalItems.map((item) => {
              return (
                <section
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img src={item.image} style={{ width:'50px', height:'50px', borderRadius:'5px' }}/>
                    <p style={{ paddingLeft: "10px" }}>{item.name}</p>
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
