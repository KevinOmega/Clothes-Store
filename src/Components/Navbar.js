import React from "react";
import { BsCartFill } from "react-icons/bs";
import { useGlobalContext } from "../context";

const Navbar = () => {
  const { setShowCart } = useGlobalContext();

  const handleCart = () => {
    setShowCart(true);
    document.body.style.overflowY = "hidden";
  };

  return (
    <section id="navbar">
      <div className="navbar-logo">
        <h1>CS</h1>
      </div>
      <div className="navbar-cart">
        <span>
          <BsCartFill onClick={handleCart} />
        </span>
      </div>
    </section>
  );
};

export default Navbar;
