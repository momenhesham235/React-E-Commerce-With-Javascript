import { useState, useRef, useEffect } from "react";

const useHeaderUI = () => {
  const [open, setOpen] = useState({ category: false, menu: false });

  const categoryRef = useRef(null);
  const menuRef = useRef(null);

  const toggle = (key) => setOpen((s) => ({ ...s, [key]: !s[key] }));
  const closeAll = () => setOpen({ category: false, menu: false });

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (categoryRef.current && !categoryRef.current.contains(e.target)) {
        setOpen((s) => ({ ...s, category: false }));
      }
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen((s) => ({ ...s, menu: false }));
      }
    };

    window.addEventListener("mousedown", handleClickOutside);
    return () => window.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // close on resize
  useEffect(() => {
    const handleResize = () => closeAll();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { open, toggle, closeAll, categoryRef, menuRef };
};

export default useHeaderUI;
