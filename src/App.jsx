import { Routes, Route } from "react-router-dom";

import BottomHeader from "./components/header/BottomHeader";
import TopHeader from "./components/header/TopHeader";
import Home from "./pages/home/Home";
import ProductDetails from "./pages/productDetails/ProductDetailsPage";

const App = () => {
  return (
    <>
      <header>
        <TopHeader />
        <BottomHeader />
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </>
  );
};

export default App;
