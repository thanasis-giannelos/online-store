import "./ProductCard.css"

const ProductCard = (props) => {

  return (
    <div className="product-card">
      <div className="image-container">
        <img src={props.item["image"]}/>
      </div>
      <p>{props.item["category"].toUpperCase()}</p>
      <div className="title-container">
        <h5>{props.item["title"]}</h5>
      </div>
      <p>{props.item["rating"]["rate"]}/5 ({props.item["rating"]["count"]})</p>
      <h3>{props.item["price"]} $</h3>
    </div>
  );
};

export default ProductCard;