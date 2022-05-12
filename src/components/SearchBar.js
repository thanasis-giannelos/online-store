import "./SearchBar.css";

const SearchBar = () => {
  return (
    <form >
      <input type="text" placeholder="search..." name="search"/>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;