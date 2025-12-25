import "./header.css";
import { logo } from "../../assets";

import { Link } from "react-router-dom";
import Image from "../common/Image";

import { FaSearch } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import useCartStore from "../../store/cart.store";

const TopHeader = () => {
  const { cart } = useCartStore();
  return (
    <div className="top_header">
      <div className="container">
        <Link to="/" className="logo">
          <Image src={logo} alt="logo" />
        </Link>

        <form className="search_box">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search for products"
          />
          <button type="submit">
            <FaSearch />
          </button>
        </form>

        <div className="header_icons">
          <div className="icon">
            <FaRegHeart />
            <span className="count">0</span>
          </div>

          <Link to="/cart">
            <div className="icon">
              <TiShoppingCart />
              <span className="count">{cart.length}</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
