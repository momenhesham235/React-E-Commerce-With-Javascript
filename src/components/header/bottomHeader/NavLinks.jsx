import { Link, useLocation } from "react-router-dom";
import { forwardRef } from "react";

const NavLinks = forwardRef(({ links, className, onClick }, ref) => {
  const location = useLocation();

  return (
    <ul className={className} ref={ref}>
      {links.map((link) => (
        <li
          key={link.id}
          className={location.pathname === link.path ? "active" : ""}
          onClick={onClick}
        >
          <Link to={link.path}>{link.name}</Link>
        </li>
      ))}
    </ul>
  );
});

export default NavLinks;
