import React, { Fragment } from 'react';
import { Shelf } from "../components/Shelf";


export const Home = props => {  
  
  return (
    <Fragment>
      {props.categories.map(category => {
        return (
          <Shelf
            key={category} 
            category={category} 
            products={props.products.filter(product => product.category === category)}
          />
        );
      })}
    </Fragment>
  );  
};