import NavBar from "./components/NavBar/Navbar";
import Navigation from "./components/Navigation/Navigation";
import productsData from "../data/products.js";
import "./App.css";
import { useState } from "react";
import Product from "./components/Product/Product.jsx";

function App() {
  const [products] = useState(productsData);
  return (
    <>
      <NavBar />

      <section
        id="products-row"
        className="container mx-auto grid grid-cols-4 gap-5">
        {products.map((product) => (
          <Product {...product} key={product.id} />
        ))}
      </section>
      <Navigation />
    </>
  );
}

export default App;
