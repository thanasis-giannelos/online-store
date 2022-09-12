import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";

export const ProductDescription = (props) => {
  const [product, setState] = useState(null);
  
  let { productId } = useParams();

  const clickHandler = () => {
    props.liftState(product);
  };

  useEffect(() => {
    const fetchData = async () => {
      let product = await fetch(`https://fakestoreapi.com/products/${productId}`);
      product = await product.json();
      setState(product);
    };
    fetchData();
  }, []);
  
  if (product) {
    return (
        <div className='container' id="productDescription">
          <div id="image-wrapper">
            <img src={product.image} alt=""/>
          </div>
          <div id="productInfo">
            <h1>{product.title}</h1>
            <h4>{product.category}</h4>
            <p>{product.rating.rate}/5 <span id='star-icon'><FaStar/></span>({product.rating.rate})</p>
            <h2>{product.price} $</h2>
            <p>{product.description}</p>
            <button onClick={clickHandler} className="color">Add to cart</button>
          </div>
        </div>
    );
  }
};