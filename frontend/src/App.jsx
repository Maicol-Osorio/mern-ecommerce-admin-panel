import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Footer from "./components/Footer";

import bannermens from "./assets/bannermens.png"
import bannerwomens from "./assets/bannerwomens.png"
import bannerkids from "./assets/bannerkids.png"

export default function App() {
  return (
    <main className="bg-primary text-tertiary">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mens" element={<Category banner={bannermens} category={"men"} />}/>
          <Route path="/womens" element={<Category banner={bannerwomens} category={"women"}/>} />
          <Route path="/kids" element={<Category banner={bannerkids} category={"kid"}/>}/>
          <Route path="/product" element={Products}>
            <Route path=":productId" element={Products}></Route>
          </Route>
          <Route path="/cart-page" element={<Cart/>}/>
          <Route path="/login" element={Login}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </main>
  )
}