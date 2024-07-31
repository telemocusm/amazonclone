import './App.css';
import {Routes , Route} from 'react-router-dom'
import Home from './component/home/Home';
import Product from './component/product/Product';
import Header from './component/layout/Header';
import ProductDetails from './component/layout/ProductDetails';



function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/product' element={<Product/>}></Route>
        <Route path='/product-detail/:' element={<ProductDetails/>}></Route>
      </Routes>

    </>
  )
}

export default App;
