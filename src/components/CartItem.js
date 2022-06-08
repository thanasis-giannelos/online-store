import React from 'react'

export const CartItem = (props) => {
  const clickHandler = () => {
    props.liftState(props.title);
  };

  return (
    <div id='cart-item'>
      <div className="image-container">
        <img src={props.image}/>
      </div>
      <h2>{props.title}</h2>
      <h3>{props.price} $</h3>
      <h3>Quantity: {props.quantity}</h3>
      <button className='color' onClick={clickHandler}>Remove from Cart</button>
    </div>
  );
};