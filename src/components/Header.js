import "./Header.css";
import SearchBar from "./SearchBar";
import store_image from "../assets/onlineorinstore.png"

const Header = () => {
  return (
    <header>
      <img src={store_image} alt=""/>
      <SearchBar/>
    </header>
  );
};

export default Header;