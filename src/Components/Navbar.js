import React from "react";
import { BsCartFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <section id="navbar">
      <div className="navbar-logo">
        <h1>CS</h1>
      </div>
      <div className="navbar-cart">
        <span>
          <BsCartFill />
        </span>
      </div>
    </section>
  );
};

export default Navbar;
