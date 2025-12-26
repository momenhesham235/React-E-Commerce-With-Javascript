import { Routes, Route } from "react-router-dom";

import TopHeader from "./components/header/topHeader/TopHeader";
import BottomHeader from "./components/header/bottomHeader/BottomHeader";
import Home from "./pages/home/Home";
import ProductDetails from "./pages/productDetails/ProductDetailsPage";
import CartPage from "./pages/cart/CartPage";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <header>
        <TopHeader />
        <BottomHeader />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>

      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#e9e9e9",
            borderRadius: "5px",
            padding: "14px",
          },
        }}
      />
    </>
  );
};

export default App;
