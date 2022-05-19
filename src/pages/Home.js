import React, { Fragment, useEffect, useState } from 'react';
import { products, productCategories } from "../assets/data";
import { Shelf } from "../components/Shelf";


export const Home = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [storedProducts, setStoredProducts] = useState(products);
  const [categories, setCategories] = useState(productCategories);
  
  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products")
  //     .then(res => res.json())
  //     .then(
  //       (result) => {
  //         setLoading(false);
  //         setStoredProducts(result);
  //       },
  //       (error) => {
  //         setLoading(false);
  //         setError(error);
  //       }
  //     )
  //     .then(result => {
  //       return fetch("https://fakestoreapi.com/products/categories");
  //     })
  //     .then(res => res.json())
  //     .then(
  //       (result) => {
  //         setCategories(result);
  //       },
  //       (error) => {setError(error)}
  //     );
  // }, []);
  
  const displayFromEveryCategory = () => {
    const categoryShelves = [];
    let sameCategoryProducts = [];
    for (const category of categories) {
      sameCategoryProducts = [...storedProducts.filter(product => product["category"] === category)];
      categoryShelves.push(<Shelf category={category} data={sameCategoryProducts}/>);
      sameCategoryProducts = [];
    }
    return categoryShelves;  
  };
  
  return (
    <Fragment>
      {/* <ProductSpotlight/> */}
      {/* {loading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>} */}
      {displayFromEveryCategory()}
    </Fragment>
  );  
};
