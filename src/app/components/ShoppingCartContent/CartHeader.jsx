

import { useState, useContext } from "react";
import { IoCartOutline } from "react-icons/io5";
import { IoCloseCircleSharp } from "react-icons/io5";
import ShoppingCartContext from "../ShoppingCartContext/ShoppingCartContext.mjs";

const CartHeader = () => {

const {
  handleCartDisplay
} = useContext(ShoppingCartContext)

  return (
    <div id='cart-header' >
      <IoCartOutline id='cart-outline' />
      <h1 id='cart-h1' >Shopping Cart</h1>
      <IoCloseCircleSharp onClick={handleCartDisplay} id='close-circle' />
    </div>
  )
}

export default CartHeader
