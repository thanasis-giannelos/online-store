import { Link } from "react-router-dom";

export const ProductCard = (props) => {

  return (
    <Link to={"/product_description/" + props.item.id}>
      <div className="product-card">
        <div className="image-container">
          <img src={props.item.image}/>
        </div>
        <p>{props.item.category.toUpperCase()}</p>
        <h5>{props.item.title}</h5>
        <p>{props.item.rating.rate}/5 ({props.item.rating.count})</p>
        <h3>{props.item.price} $</h3>
      </div>
    </Link>
  );
};