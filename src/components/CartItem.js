import React from 'react'
import anImg from "/home/sakis/Desktop/React/online-store-app/src/assets/61mtL65D4cL._AC_SX679_.jpg";

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