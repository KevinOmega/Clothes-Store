import React, { useState } from "react";
import { products } from "../Back-End/Products";
import Card from "./Card";

const Home = () => {
  const [currentType, setCurrentType] = useState("shirt");

  return (
    <section id="home">
      <div className="home-options">
        <div className="option">T-shirts</div>
        <div className="option">Pants</div>
        <div className="option">Shoes</div>
      </div>

      <div className="home-center">
        {products
          .filter((product) => product.type === currentType)
          .map((product) => (
            <Card key={product.id} {...product}></Card>
          ))}
      </div>
    </section>
  );
};

export default Home;
