import React, { useState } from "react";

const OrderForm = ({ addOrder }) => {
  const [orderId, setOrderId] = useState("");
  const [price, setPrice] = useState("");
  const [dish, setDish] = useState("");
  const [table, setTable] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addOrder({ orderId, price, dish, table });
    setOrderId("");
    setPrice("");
    setDish("");
    setTable("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Order ID:
        <input type="text" value={orderId} onChange={(e) => setOrderId(e.target.value)} />
      </label>
      <label>
        Price:
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
      </label>
      <label>
        Dish:
        <input type="text" value={dish} onChange={(e) => setDish(e.target.value)} />
      </label>
      <label>
        Table:
        <input type="text" value={table} onChange={(e) => setTable(e.target.value)} />
      </label>
      <button type="submit">Add to Bill</button>
    </form>
  );
};

export default OrderForm;
