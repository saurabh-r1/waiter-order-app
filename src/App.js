import React, { useState, useEffect } from "react";
import OrderForm from "./Components/OrderForm";
import OrderList from "./Components/OrderList";

const App = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Load orders from local storage when the component mounts
    const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(savedOrders);
  }, []);

  useEffect(() => {
    // Save orders to local storage whenever the orders state changes
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  const addOrder = (order) => {
    setOrders([...orders, order]);
  };

  return (
    <div>
      <h1>Waiter Order App</h1>
      <OrderForm addOrder={addOrder} />
      <hr />
      <OrderList orders={orders} table="1" />
      <OrderList orders={orders} table="2" />
      {/* Add more tables as needed */}
    </div>
  );
};

export default App;
