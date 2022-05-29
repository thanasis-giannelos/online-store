import React from 'react'

export const CartItem = (props) => {
  const clickHandler = () => {
    props.liftState(props.data["id"]);
  };

  return (
    <div className='cart-item'>
      <div className="image-container">
        <img src={props.data["image"]}/>
      </div>
      <h2>{props.data["price"]} $</h2>
      <p>{props.data["title"]}</p>
      <button onClick={clickHandler}>Remove from Cart</button>
    </div>
  );
};