import { ProductCard } from "./ProductCard";


export const Shelf = (props) => {
  return (
    <div className="container">
      <h3>{props.category.toUpperCase()}</h3>
      <div className="shelf-products">
        {props.data.map(product => <ProductCard item={product}/>)}
      </div>
    </div>
  );
};
