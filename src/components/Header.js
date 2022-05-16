import "./Header.css";

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

export default Header;