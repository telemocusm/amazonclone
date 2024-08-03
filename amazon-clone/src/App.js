import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./component/home/Home";
import Product from "./component/product/Product";
import Header from "./component/layout/Header";
import ProductDetails from "./component/layout/ProductDetails";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={
            < Navigate to="/home"/>
          } />
          <Route path="/home" element={<Home />}></Route>
          <Route path="/home/username" element={<p>Welcome User</p>} />
          <Route path="/product" element={<Product />} />
          <Route path="/product-details/:id" element={<ProductDetails />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
