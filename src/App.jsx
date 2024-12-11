import { Outlet, Route, Routes } from 'react-router'
import './App.css'
import Home from './components/home/Home'
import About from './components/about/About'
import Products from './components/products/Products'
import Cart from './components/cart/Cart'

function App() {

  return (
    <>   
    <Routes>
  <Route index element={<Home />} />
  <Route path="about" element={<About />} />
  <Route path="about" element={<About />} />
  <Route path="products" element={<Products />} />
  <Route path="cart" element={<Cart />} />
  </Routes>  
    <Outlet />
    </>
  )
}

export default App
