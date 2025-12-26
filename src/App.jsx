import { Routes, Route } from "react-router-dom";

import TopHeader from "./components/header/topHeader/TopHeader";
import BottomHeader from "./components/header/bottomHeader/BottomHeader";
import Home from "./pages/home/Home";
import ProductDetails from "./pages/productDetails/ProductDetailsPage";
import CartPage from "./pages/cart/CartPage";
import ScrollToTop from "./components/common/ScrollToTop";
import CategoryPage from "./pages/category/CategoryPage";

import { AnimatePresence } from "framer-motion";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <header>
        <TopHeader />
        <BottomHeader />
      </header>

      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </AnimatePresence>
      <ScrollToTop />
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#e9e9e9",
            borderRadius: "8px",
            padding: "12px",
            maxWidth: "90vw", // For responsive design
          },
        }}
      />
    </>
  );
};

export default App;
