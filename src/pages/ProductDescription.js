import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";

export const ProductDescription = () => {
  const [data, setData] = useState(null);
  let { productId } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
    .then(res => res.json())
    .then(result => setData(result));
  }, []);
  
  if (data !== null) {
    return (
      <section id='product-description'>
        <div className='container'>
          <div className='image-wrapper'>
            <img src={data["image"]}/>
          </div>
          <div className='right-split'>
            <h1>{data["title"]}</h1>
            <p>{data["rating"]["rate"]}/5 <span id='star-icon'><FaStar/></span>({data["rating"]["count"]})</p>
            <h2>{data["price"]} $</h2>
            <p>{data["description"]}</p>
            <h4>{data["category"]}</h4>
            <button>Add to cart</button>
          </div>
        </div>
      </section>
    );
  }
};
