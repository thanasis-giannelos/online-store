import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ProductDescription } from './pages/ProductDescription';

export const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product_description/:productId' element={<ProductDescription/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}