import ProductsList from "./Components/ProductsList";
import Slider from "./Components/Slider";
import About from "./Components/About";
import ProductDetails from "./Components/ProductDetails";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Cart from "./Components/Cart";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Slider />
              <ProductsList />
            </>
          }
        />
        <Route path="cart" element={<Cart />} />
        <Route path="about" element={<About />} />
        <Route path="product/:productId" element={<ProductDetails />} />
        <Route path="contact-us" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
