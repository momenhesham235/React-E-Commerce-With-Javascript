import { motion } from "framer-motion";
import SearchForm from "./SearchForm";

const SearchModal = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <motion.div
      className="search_modal"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      onClick={onClose}
    >
      <div
        className="search_modal_content"
        onClick={(e) => e.stopPropagation()}
      >
        <SearchForm autoFocus onClose={onClose} />
        <button onClick={onClose}>✕</button>
      </div>
    </motion.div>
  );
};

export default SearchModal;
