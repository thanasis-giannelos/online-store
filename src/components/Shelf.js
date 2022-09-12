import { Link } from "react-router-dom";
import { ProductCard } from "./ProductCard";


export const Shelf = (props) => {

  return (
    <div className="container">
      <h3>{props.category.toUpperCase()}</h3>
      <div className="shelf-products">
        {props.products.map(product => {
          return (
            <Link to={"/product_description/" + product.id} key={product.id.toString()}>
              <ProductCard key={product.id.toString()} item={product}/>
            </Link>
          );
        })}
      </div>
    </div>
  );
};



