import { Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { PiSignInBold } from "react-icons/pi";
import { FaUserPlus } from "react-icons/fa6";

import useFetch from "../../../hooks/useFetch";
import { getCategories } from "../../../services/category.service";
import navLinks from "../../../utils/constant/header.data";

import useHeaderUI from "../../../hooks/useHeaderUI";
import NavLinks from "./NavLinks";

import "./bottomHeader.css";

const BottomHeader = () => {
  const { open, toggle, closeAll, categoryRef, menuRef } = useHeaderUI();
  const { data: categories = [], loading } = useFetch(getCategories, []);

  return (
    <div className="bottom_header">
      <div className="container">
        <nav className="nav">
          {/* Category */}
          <div className="category_nav" ref={categoryRef}>
            <button className="category_btn" onClick={() => toggle("category")}>
              <IoMdMenu />
              <p>Browse Categories</p>
              <MdOutlineArrowDropDown />
            </button>

            <div
              className={`category_nav_list ${open.category ? "active" : ""}`}
            >
              <ul>
                {loading ? (
                  <li>Loading...</li>
                ) : (
                  [...categories]
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .map((cat) => (
                      <li key={cat.slug} onClick={closeAll}>
                        <Link to={`/category/${cat.slug}`}>{cat.name}</Link>
                      </li>
                    ))
                )}
              </ul>
            </div>
          </div>

          {/* Desktop */}
          <NavLinks links={navLinks} className="nav_links" />

          {/* Mobile */}
          <NavLinks
            links={navLinks}
            className={`mobile_nav_links ${open.menu ? "active" : ""}`}
            onClick={closeAll}
            ref={menuRef}
          />
        </nav>

        {/* Right */}
        <div className="sign_register_icon">
          <button className="menu_btn" onClick={() => toggle("menu")}>
            <IoMdMenu aria-label="open menu" />
          </button>

          <Link to="/login">
            <PiSignInBold aria-label="sign in" />
          </Link>

          <Link to="/register">
            <FaUserPlus aria-label="sign up" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BottomHeader;
