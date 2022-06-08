import { FaSearch, FaShoppingCart, FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Header = (props) => {
  return (
    <header className="color">
      <div className="container">
        <ul>
          <li><Link to={"/cart"}><FaShoppingCart/><span>{props.cartItemsCounter}</span></Link></li>
          <li><a href='#'><FaRegUser/></a></li>
        </ul>
        <h1><Link to="/">myStore</Link></h1>
        <form> 
          <input type="text" className="color" name="search"/>
          <button type="submit" className="color"><FaSearch/></button>
        </form>
      </div>
    </header>
  );
};