import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ProductDescription } from './pages/ProductDescription';
import { Cart } from './pages/Cart';
import { useState, useEffect } from 'react';


export const App = () => {
  const [fetchedProducts, setFetchedProducts] = useState([]);
  const [fetchedCategories, setFetchedCategories] = useState([]);
  const [cartItems, changeCartItems] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(result => setFetchedProducts(...fetchedProducts, result))
      .then(result => fetch("https://fakestoreapi.com/products/categories"))
      .then(res => res.json())
      .then(result => setFetchedCategories(...fetchedCategories, result))
  }, []);

  let itemsAndQuantities = {};
  cartItems.forEach(item => {
    if (item.title in itemsAndQuantities) {
      itemsAndQuantities[item.title][0] += 1;
    } else {
      itemsAndQuantities[item.title] = [];
      itemsAndQuantities[item.title][0] = 1;
      itemsAndQuantities[item.title][1] = item.price;
      itemsAndQuantities[item.title][2] = item.image;
    }
  });

  const addCartItem = item => changeCartItems([...cartItems, item]);

  const removeCartItem = itemTitle => {
    let tempArray = [...cartItems];
    for (let i = 0; i < tempArray.length; i++) {
      if (tempArray[i].title === itemTitle) {
        tempArray.splice(i, 1);
        changeCartItems(tempArray);
        tempArray = null;
        break;
      }
    }
  };

  return (
    <BrowserRouter>
      <Header cartItemsCounter={cartItems.length}/>
          <Routes>
            <Route path='/' element={<Home products={fetchedProducts} categories={fetchedCategories}/>}/>
            <Route path='/product_description/:productId' element={<ProductDescription liftState={addCartItem}/>}/>
            <Route path='/cart' element={<Cart data={itemsAndQuantities} liftState={removeCartItem}/>}/>
          </Routes>
      <Footer/>
    </BrowserRouter>
  );
}