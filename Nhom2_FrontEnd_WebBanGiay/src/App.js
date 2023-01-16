import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
// import Home from "./pages/Home/Home";
import Blog from "./pages/Blog/Blog";
import Cart from "./pages/Cart/Cart";
import Product from "./pages/Product/Product";
import NotFound from "./pages/NotFound/NotFound";
import Footer from "./components/footer/Footer";
import Product_Create from "./components/Product-components/Product_Create";
import Product_Edit from "./components/Product-components/Product_Edit";
import Product_Detail from "./components/Product-components/Product_Detail";

import Category from "./pages/Category/Category";
import Category_Create from "./components/Category-components/Category_Create";
import Category_Edit from "./components/Category-components/Category_Edit";
import Category_Detail from "./components/Category-components/Category_Detail";

import Cart_Product from "./components/Cart-components/Cart_Product";
import Cart_Detail from "./components/Cart-components/Cart_Detail";

import Contact from "./components/Contact-components/Contact";

import Login from "./pages/User/Login/Login";
import Registration from "./pages/User/Registration/Registration";
import Forgot from "./pages/User/Forgot/Forgot";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />

        <Routes>
          <Route path="/cart" element={<Cart_Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/cart/detail" element={<Cart_Detail />} />

          <Route path="/product" element={<Product />} />
          <Route path="/product/create" element={<Product_Create />} />
          <Route path="/product/edit/:empid" element={<Product_Edit />} />
          <Route path="/product/detail/:empid" element={<Product_Detail />} />

          <Route path="/category" element={<Category />} />
          <Route path="/category/create" element={<Category_Create />} />
          <Route path="/category/edit/:empid" element={<Category_Edit />} />
          <Route path="/category/detail/:empid" element={<Category_Detail />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />

          <Route path="/" element={<Cart_Product />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Signup" element={<Registration />} />
          <Route path="/Forgot" element={<Forgot />} />
        </Routes>
        <Footer />
      </header>
    </div>
  );
}

export default App;
