import React from "react";

const OrderList = ({ orders, table }) => {
  const filteredOrders = orders.filter((order) => order.table === table);

  return (
    <div>
      <h2>Orders for Table {table}</h2>
      {filteredOrders.length === 0 ? (
        <p>No orders yet for this table.</p>
      ) : (
        <ul>
          {filteredOrders.map((order) => (
            <li key={order.orderId}>
              Order ID: {order.orderId}, Price: {order.price}, Dish: {order.dish}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OrderList;
