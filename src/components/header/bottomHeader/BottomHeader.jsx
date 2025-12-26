// BottomHeader.jsx
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { PiSignInBold } from "react-icons/pi";
import { FaUserPlus } from "react-icons/fa6";

import useFetch from "../../../hooks/useFetch";
import { getCategories } from "../../../services/category.service";
import navLinks from "../../../utils/constant/header.data";

import "./bottomHeader.css"; // لو حابب تفصل CSS

const BottomHeader = () => {
  const location = useLocation();
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { data: categories, loading } = useFetch(getCategories, []);

  return (
    <div className="bottom_header">
      <div className="container">
        <nav className="nav">
          {/* category nav */}
          <div className="category_nav">
            <div
              className="category_btn"
              onClick={() => setIsCategoryOpen(!isCategoryOpen)}
            >
              <IoMdMenu />
              <p>Browse Categories</p>
              <MdOutlineArrowDropDown />
            </div>

            <div
              className={`category_nav_list ${isCategoryOpen ? "active" : ""}`}
            >
              <ul>
                {loading ? (
                  <li>Loading...</li>
                ) : (
                  categories.map((category) => (
                    <li key={category.name}>
                      <Link to={`/category/${category.slug}`}>
                        {category.name}
                      </Link>
                    </li>
                  ))
                )}
              </ul>
            </div>
          </div>

          {/* desktop nav links */}
          <ul className="nav_links">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={location.pathname === link.path ? "active" : ""}
              >
                <Link to={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>

          {/* mobile nav links */}
          <ul className={`mobile_nav_links ${isMenuOpen ? "active" : ""}`}>
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={location.pathname === link.path ? "active" : ""}
              >
                <Link to={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* right icons */}
        <div className="sign_register_icon">
          <button
            className="menu_btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            Menu <IoMdMenu />
          </button>
          <Link to="/login">
            <PiSignInBold />
          </Link>
          <Link to="/register">
            <FaUserPlus />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BottomHeader;
