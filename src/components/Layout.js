import React from "react"
import { useSelector } from "react-redux"
import CartItems from "./CartItems"
import Header from "./Header"
import Products from "./Products"
import "./Layout.css"
const Layout = () => {
  const cartItem = useSelector((state) => state.cart.itemList)
  let total = 0
  cartItem.forEach(item => {
    total += item.totalPrice
  })
  const showCart = useSelector((state) => state.cart.showCart)

  return (
    <React.Fragment>
      <div className="layout">
        <Header />
        <Products />
        { showCart && <CartItems /> }
        <div
          style={{
            textAlign: "right",
            marginRight: "50px",
            marginBottom: "20px",
            marginTop: "1rem",
          }}
        >
          <h3>Total: {total}</h3>
          <button className="orderBtn">Place Order</button>
        </div>{" "}
      </div>
    </React.Fragment>
  );
};

export default Layout;
