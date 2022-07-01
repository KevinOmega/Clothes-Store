import React from "react";
import { BsXLg, BsCartXFill } from "react-icons/bs";
import { useGlobalContext } from "../context";
import CartProducts from "./CartProducts";

const Cart = () => {
  const { cart, setCart, showCart, setShowCart } = useGlobalContext();

  const calculateTotalPrice = (total, currentValue) => {
    return total + currentValue.price * currentValue.amount;
  };

  const changeAmount = (type, id) => {
    switch (type) {
      case "add":
        console.log(cart);
        setCart((currentCart) => [
          ...currentCart.map((product) => {
            if (id === product.id) {
              return {
                ...product,
                amount: product.amount + 1,
              };
            }
            return product;
          }),
        ]);
        break;
      case "less":
        setCart((currentCart) => [
          ...currentCart.map((product) => {
            if (product.id === id && product.amount > 1) {
              return { ...product, amount: product.amount - 1 };
            }
            return product;
          }),
        ]);
        break;
      case "remove":
        setCart((currentCart) => [
          ...currentCart.filter((product) => product.id !== id),
        ]);
        break;
      default:
        console.log("error");
    }
  };

  const handleX = () => {
    setShowCart(false);
    document.body.style.overflowY = "visible";
  };

  return (
    <div className={`cart-wrapper ${showCart && "cart-active"}`}>
      <section id="cart">
        <span className="x-btn" onClick={handleX}>
          <BsXLg />
        </span>
        <div className="cart-header">
          <h1>My Cart</h1>
        </div>
        {cart.length > 0 ? (
          <div className="cart-center">
            <div className="cart-center-cards">
              {cart.map((product, index) => (
                <CartProducts
                  key={index}
                  {...product}
                  changeAmount={changeAmount}
                ></CartProducts>
              ))}
            </div>
            <div className="cart-center-info">
              <div className="total-price">
                Total Price : {cart.reduce(calculateTotalPrice, 0).toFixed(2)} $
              </div>
              <div className="btn">
                <button>Buy</button>
              </div>
            </div>
          </div>
        ) : (
          <div className="voidCart">
            <h4>You have no items in your cart</h4>
            <span>
              <BsCartXFill />
            </span>
          </div>
        )}
      </section>
    </div>
  );
};

export default Cart;
