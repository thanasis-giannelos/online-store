import React, { Fragment, useEffect, useState } from 'react';
import { products, productCategories } from "./assets/data";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";


function App() {

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
      <Header/>
      {/* {loading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>} */}
      {displayFromEveryCategory()}
      <Footer/>
    </Fragment>
  );
}


const Header = () => {
  return (
    <header>
      <form >
        <input type="text" placeholder="search..." name="search"/>
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

const Footer = () => {
  return (
    <footer>
      <div className="content-box">
        <h3>Help & Information</h3>
        <ul>
        <li><a href="#">FAQ</a></li>
        <li><a href="#">Track your order</a></li>
        <li><a href="#">Return policy</a></li>
        <li><a href="#">Delivey</a></li>
        </ul>
      </div>
      <div className="content-box">
        <h3>About Store</h3>
        <ul>
        <li><a href="#">About us</a></li>
        <li><a href="#">Philosophy</a></li>
        <li><a href="#">Careers at Store</a></li>
        </ul>
      </div>
      <div className="content-box">
        <h3>Become a Member</h3>
        <ul>
        <li><a href="#">Sign In</a></li>
        <li><a href="#">Sign Up</a></li>
        <li><a href="#">Newsletter</a></li>
        <li><a href="#">Leave Feedback</a></li>
        </ul>
      </div>
      <div className="content-box social-media">
        <h3>Follow us</h3>
        <ul>
        <li><a href="#"><FaFacebook/></a></li>
        <li><a href="#"><FaInstagram/></a></li>
        <li><a href="#"><FaTwitter/></a></li>
        </ul>
      </div>
    </footer>
  );
};

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


export default App;