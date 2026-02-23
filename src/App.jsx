import NavBar from "./components/NavBar/Navbar";
import Navigation from "./components/Navigation/Navigation";
import productsData from "../data/products.js";
import "./App.css";
import { useState } from "react";
import Product from "./components/Product/Product.jsx";

function App() {
  const [products] = useState(productsData);
  const [cart, setCart] = useState([]);
  const addToCart = (id) => {
    const mainProduct = products.find((product) => product.id === id);

    if (mainProduct) {
      setCart([...cart, mainProduct]);
      console.log(cart);
    }
  };

  const removeProduct = (id) => {
    const newCart = cart.filter((product) => product.id !== id);
    setCart(newCart);
  };
  const clearBasket = () => {
    setCart([]);
    console.log("fatat", cart);
  };
  return (
    <>
      <NavBar />

      <section
        id="products-row"
        className="container mx-auto grid grid-cols-4 gap-5">
        {products.map((product) => (
          <Product {...product} key={product.id} addToCart={addToCart} />
        ))}
      </section>
      <Navigation
        cart={cart}
        removeProduct={removeProduct}
        clearBasket={clearBasket}
      />
    </>
  );
}

export default App;
