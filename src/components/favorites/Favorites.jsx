import "./favorites.css";

import { Link } from "react-router-dom";
import useFavoritesStore from "../../store/favorites.store";

const Favorites = () => {
  const { favorites, removeFavorite, clearFavorites } = useFavoritesStore();

  if (favorites.length === 0) {
    return (
      <div className="favorites_empty">
        <h2>No favorites yet ❤️</h2>
        <p>Browse products and add them to your favorites</p>
        <Link to="/" className="btn">
          Go Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="favorites_page">
      <div className="container">
        <div className="favorites_header">
          <h2>Your Favorites</h2>
          <button className="clear_btn" onClick={clearFavorites}>
            Clear All
          </button>
        </div>

        <div className="favorites_list">
          {favorites.map((product) => (
            <div className="favorite_card" key={product.id}>
              <Link to={`/product/${product.id}`}>
                <img src={product.images?.[0]} alt={product.title} />
              </Link>

              <div className="favorite_info">
                <h3>{product.title}</h3>
                <p className="price">${product.price}</p>

                <div className="favorite_actions">
                  <Link to={`/product/${product.id}`} className="btn_outline">
                    View
                  </Link>
                  <button
                    className="remove_btn"
                    onClick={() => removeFavorite(product.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favorites;
