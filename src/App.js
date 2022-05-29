import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ProductDescription } from './pages/ProductDescription';
import { Cart } from './pages/Cart';
import { useState } from 'react';

export const App = () => {
  const [cartItems, changeCartItems] = useState([]); 

  
  const addCartItem = (item) => {
    changeCartItems([...cartItems, item]);
  };

  const removeCartItem = (id) => {
    let tempArray = [...cartItems];
    for (let i = 0; i < tempArray.length; i++) {
      if (tempArray[i]["id"] === id) {
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
        <Route path='/' element={<Home/>}/>
        <Route path='/product_description/:productId' element={<ProductDescription liftState={addCartItem}/>}/>
        <Route path='/cart' element={<Cart data={cartItems} liftState={removeCartItem}/>}/>
      </Routes>

      <Footer/>
    </BrowserRouter>
  );
}