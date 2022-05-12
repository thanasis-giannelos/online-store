import ProductCard from "./ProductCard";
import "./Shelf.css";

const Shelf = (props) => {

  return (
    <div className="shelf">
      <div className="shelf-title">
        <h2>{props.category.toUpperCase()}</h2>
      </div>
      <div className="shelf-products">
        {props.data.map(product => <ProductCard item={product}/>)}
      </div>
    </div>
  );
};

export default Shelf;