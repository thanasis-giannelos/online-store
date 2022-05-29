import { ProductCard } from "./ProductCard";


export const Shelf = (props) => {
  return (
    <div className="container" id='shelf'>
      <h2>{props.category.toUpperCase()}</h2>
      <div className="shelf-products">
        {props.data.map(product => <ProductCard item={product}/>)}
      </div>
    </div>
  );
};
