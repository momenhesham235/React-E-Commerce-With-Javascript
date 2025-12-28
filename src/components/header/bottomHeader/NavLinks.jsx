import { Link, useLocation } from "react-router-dom";

const NavLinks = ({ links, className, onClick }) => {
  const location = useLocation();

  return (
    <ul className={className}>
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
};

export default NavLinks;
