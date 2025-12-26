import "./topHeader.css";

import { useState } from "react";
import { Link } from "react-router-dom";

import Image from "../../common/Image";
import { logo } from "../../../assets";
import { FaSearch, FaRegHeart } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import useCartStore from "../../../store/cart.store";
import { motion } from "framer-motion";

const TopHeader = () => {
  const { cart } = useCartStore();
  const [openSearch, setOpenSearch] = useState(false);

  return (
    <>
      <div className="top_header">
        <div className="container">
          {/* Logo */}
          <Link to="/" className="logo">
            <Image src={logo} alt="logo" />
          </Link>

          {/* Desktop Search */}
          <form className="search_box desktop_search">
            <input type="text" placeholder="Search for products" />
            <button type="submit">
              <FaSearch />
            </button>
          </form>

          {/* Icons */}
          <div className="header_icons">
            {/* Mobile Search Button */}
            <button
              className="mobile_search_btn"
              onClick={() => setOpenSearch(true)}
            >
              <FaSearch />
            </button>

            <FaRegHeart />

            <Link to="/cart" className="cart_icon">
              <TiShoppingCart />
              <span className="count">{cart.length}</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Search Modal (Mobile) */}
      {openSearch && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="search_modal"
          onClick={() => setOpenSearch(false)}
        >
          <div
            className="search_modal_content"
            onClick={(e) => e.stopPropagation()}
          >
            <input type="text" placeholder="Search for products..." autoFocus />
            <button onClick={() => setOpenSearch(false)}>✕</button>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default TopHeader;
