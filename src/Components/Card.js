import React from "react";
import { useGlobalContext } from "../context";
import { products } from "../Back-End/Products";

const Card = ({ id, name, image, price }) => {
  const { cart, setCart } = useGlobalContext();

  const addToCart = () => {
    const auxiliar = cart.filter((product) => product.id === id);
    if (auxiliar.length === 0) {
      setCart((currentCart) => [
        ...currentCart,
        { ...products.filter((product) => product.id === id)[0], amount: 1 },
      ]);
    }
  };

  return (
    <div className="card-container">
      <div className="card">
        <div className="card-header">
          <h4>{name}</h4>
        </div>
        <div className="card-hero">
          <img src={image} alt={name} />
        </div>
        <div className="card-center">
          <div className="card-center-price">{price}$</div>
          <div className="card-center-btn">
            <button onClick={addToCart}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
