import React, { useState } from 'react'
import { CartItem } from '../components/CartItem';
import { Link } from "react-router-dom";

export const Cart = (props) => {
  let totalPrice = 0;
  props.data.forEach(item => totalPrice += item["price"]);

  const getState = (itemId) => {
    props.liftState(itemId);
  };

  return (
    <div className='container' id='cart'>
      <div id='cart-items'>
        {props.data.length === 0 && <h1>No items in Cart</h1>}
        {props.data.length > 0 && props.data.map(item => <CartItem data={item} liftState={getState}/>)}
      </div>
      <div id='checkout'>
        <h4 id='total'>Total</h4>
        <p id='total-value'>{(Math.round(totalPrice * 100) / 100).toFixed(2)} $</p>
        <button id='checkout-btn'>Checkout</button>
        <button id='continueShopping-btn'><Link to="/">Continue Shopping</Link></button>
      </div>
    </div>
  );
}
