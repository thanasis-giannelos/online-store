import { FaSearch, FaShoppingCart, FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Header = (props) => {
  return (
    <header>
      <div className='container' >
        <div className='branding'>
          <Link to="/"><h1>myStore</h1></Link>
        </div>
        <nav>
          <form >
            <input type="text" placeholder="search..." name="search"/>
            <button type="submit"><FaSearch/></button>
          </form>
        </nav>
        <div className='user-menu'>
          <ul>
            <li><Link to={"/cart"}><FaShoppingCart/><span>{props.cartItemsCounter}</span></Link></li>
            <li><a href='#'><FaRegUser/></a></li>
          </ul>
        </div>
      </div>
    </header>
  );
};
