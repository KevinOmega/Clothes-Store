import React, { useState } from "react";
import { products } from "../Back-End/Products";
import Card from "./Card";

const Home = () => {
  const [currentType, setCurrentType] = useState("shirt");

  const handleOption = (type) => {
    setCurrentType(type);
  };

  return (
    <section id="home">
      <div className="home-options">
        <div
          className={`option ${currentType === "shirt" && "active-option"}`}
          onClick={() => handleOption("shirt")}
        >
          T-shirts
        </div>
        <div
          className={`option ${currentType === "pant" && "active-option"}`}
          onClick={() => handleOption("pant")}
        >
          Pants
        </div>
        <div
          className={`option ${currentType === "shoes" && "active-option"}`}
          onClick={() => handleOption("shoes")}
        >
          Shoes
        </div>
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
