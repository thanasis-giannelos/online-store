import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ProductDescription } from './pages/ProductDescription';
import { Cart } from './pages/Cart';
import { useState, useEffect } from 'react';


export const App = () => {
  const [state, setState] = useState({products: [], categories: []});
  const [cartItems, changeCartItems] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        let fetchedProducts = await fetch("https://fakestoreapi.com/products");
        let fetchedCategories = await fetch("https://fakestoreapi.com/products/categories");
        fetchedProducts = await fetchedProducts.json();
        fetchedCategories = await fetchedCategories.json();
        setState({products: [...fetchedProducts], categories: [...fetchedCategories]});
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  let mapObj = {};
  for (const item of cartItems) {
    if (!mapObj.hasOwnProperty(item.title)) {
      mapObj[item.title] = {count: 1, price: item.price, imgURL: item.image};
      continue;
    }
    mapObj[item.title].count += 1;
  }

  const addCartItem = item => changeCartItems([...cartItems, item]);

  const removeCartItem = itemTitle => {
    changeCartItems(prevCartItems => {
      let index = prevCartItems.findIndex(item => item.title === itemTitle);
      return [...prevCartItems.slice(0, index), ...prevCartItems.slice(index+1)];
    });
  };

  return (
    <BrowserRouter>
      <Header cartItemsCounter={cartItems.length}/>
          <Routes>
            <Route path='/'                               element={<Home products={state.products} categories={state.categories}/>}/>
            <Route path='/product_description/:productId' element={<ProductDescription liftState={addCartItem}/>}/>
            <Route path='/cart'                           element={<Cart mapObj={mapObj} liftState={removeCartItem}/>}/>
          </Routes>
      <Footer/>
    </BrowserRouter>
  );
}