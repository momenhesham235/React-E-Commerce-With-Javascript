import { useEffect, useRef, useState } from "react";

const useHeaderUI = () => {
  const [open, setOpen] = useState({
    category: false,
    menu: false,
  });

  const categoryRef = useRef(null);
  const menuRef = useRef(null);

  const toggle = (key) => {
    setOpen((prev) => ({
      category: key === "category" ? !prev.category : false,
      menu: key === "menu" ? !prev.menu : false,
    }));
  };

  const closeAll = () => {
    setOpen({ category: false, menu: false });
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (categoryRef.current && !categoryRef.current.contains(e.target)) {
        setOpen((prev) => ({ ...prev, category: false }));
      }

      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen((prev) => ({ ...prev, menu: false }));
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return {
    open,
    toggle,
    closeAll,
    categoryRef,
    menuRef,
  };
};

export default useHeaderUI;
