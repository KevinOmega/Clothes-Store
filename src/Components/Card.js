import React from "react";

const Card = ({ id, name, image, price }) => {
  return (
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
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
