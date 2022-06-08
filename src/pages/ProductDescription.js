import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";

export const ProductDescription = (props) => {
  const [data, setData] = useState(null);
  
  let { productId } = useParams();

  const clickHandler = () => {
    props.liftState(data);
  };

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
    .then(res => res.json())
    .then(result => setData(result));
  }, []);
  
  if (data !== null) {
    return (
        <div className='container' id="productDescription">
          <div id="image-wrapper">
            <img src={data["image"]}/>
          </div>
          <div id="productInfo">
            <h1>{data.title}</h1>
            <h4>{data.category}</h4>
            <p>{data.rating.rate}/5 <span id='star-icon'><FaStar/></span>({data.rating.rate})</p>
            <h2>{data.price} $</h2>
            <p>{data.description}</p>
            <button onClick={clickHandler} className="color">Add to cart</button>
          </div>
        </div>
    );
  }
};