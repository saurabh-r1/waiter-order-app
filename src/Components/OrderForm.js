import React, { useState } from "react";

const OrderForm = ({ addOrder }) => {
  const [orderId, setOrderId] = useState("");
  const [price, setPrice] = useState("");
  const [dish, setDish] = useState("");
  const [table, setTable] = useState("1"); // Default table value is 1

  const handleSubmit = (e) => {
    e.preventDefault();
    addOrder({ orderId, price, dish, table });
    setOrderId("");
    setPrice("");
    setDish("");
    setTable("1"); // Reset table back to 1 after submitting
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
        <select value={table} onChange={(e) => setTable(e.target.value)}>
          <option value="1">Table 1</option>
          <option value="2">Table 2</option>
          <option value="3">Table 3</option>
          <option value="4">Table 4</option>

        </select>
      </label>
      <button type="submit">Add to Bill</button>
    </form>
  );
};

export default OrderForm;
