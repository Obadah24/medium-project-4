import React from "react"
import { useSelector } from "react-redux"
import CartItem from "./CartItem"
import "./Cart.css"
const CartItems = () => {
  const cartItems = useSelector((state) => state.cart.itemList)
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {" "}
            <CartItem
              name={item.name}
              quantity={item.quantity}
              total={item.totalPrice}
              price={item.price}
              id={item.id}
              />{" "}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CartItems
