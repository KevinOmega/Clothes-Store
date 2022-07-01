import React from "react";

const CartProducts = ({ id, name, image, price, amount, changeAmount }) => {
  return (
    <div className="card-product">
      <div className="card-product-hero">
        <img src={image} alt={name} />
      </div>
      <p>{name}</p>
      <p className="price">{(price * amount).toFixed(2)}$</p>
      <button onClick={() => changeAmount("remove", id)}>Remove</button>
      <div className="amount">
        <span className="btn" onClick={() => changeAmount("less", id)}>
          --
        </span>
        <span>{amount}</span>
        <span className="btn" onClick={() => changeAmount("add", id)}>
          +
        </span>
      </div>
    </div>
  );
};

export default CartProducts;
