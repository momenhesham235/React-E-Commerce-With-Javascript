import { useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { searchProducts } from "../../../services/products.service";
import useFetch from "../../../hooks/useFetch";

import "./topHeader.css";
const SearchForm = ({ className = "", autoFocus = false, onClose }) => {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const wrapperRef = useRef(null);

  const { data } = useFetch(
    () =>
      query.trim()
        ? searchProducts(query.trim())
        : Promise.resolve({ data: { products: [] } }),
    [query.trim()]
  );

  // close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    navigate(`/search?q=${encodeURIComponent(query)}`);
    setOpen(false);
    onClose?.();
  };

  const products = data?.data?.products || [];

  return (
    <div className="search_wrapper" ref={wrapperRef}>
      <form className={`search_box ${className}`} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for products..."
          autoFocus={autoFocus}
          autoComplete="off"
          value={query}
          onFocus={() => setOpen(true)}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
        />
        <button type="submit">
          <FaSearch />
        </button>
      </form>

      {/* Suggestions */}
      {open && query.trim() && products.length > 0 && (
        <div className="search_results">
          {products.map((product) => (
            <div
              key={product.id}
              className="search_result"
              onClick={() => {
                navigate(`/product/${product.id}`);
                setOpen(false);
                onClose?.();
              }}
            >
              <img src={product.images[0]} alt={product.title} />
              <p>{product.title}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchForm;
