import "./topHeader.css";

import { useState } from "react";
import { Link } from "react-router-dom";

import Image from "../../common/Image";
import { logo } from "../../../assets";
import { FaSearch, FaRegHeart } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";

import useCartStore from "../../../store/cart.store";
import SearchForm from "./SearchForm";
import SearchModal from "./SearchModal";
import useFavoritesStore from "../../../store/favorites.store";

const TopHeader = () => {
  const { cart } = useCartStore();
  const { getFavoritesCount } = useFavoritesStore();
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
          <SearchForm className="desktop_search" />

          {/* Icons */}
          <div className="header_icons">
            <button
              className="mobile_search_btn"
              onClick={() => setOpenSearch(true)}
            >
              <FaSearch aria-label="open search modal" />
            </button>

            <Link to="/favorites" className="cart_icon">
              <FaRegHeart />
              <span className="count">{getFavoritesCount()}</span>
            </Link>

            <Link to="/cart" className="cart_icon">
              <TiShoppingCart />
              <span className="count">{cart.length}</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Search Modal */}
      <SearchModal open={openSearch} onClose={() => setOpenSearch(false)} />
    </>
  );
};

export default TopHeader;
