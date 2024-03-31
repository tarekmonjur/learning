import { Link, NavLink } from "react-router-dom";
import logo from "../assets/fn-logo.webp";

export default function Header(): React.ReactElement {
  const getClass = ({ isActive }) => (isActive ? "nav-active" : "");

  return (
    <header className="container">
      <Link to="/">
        <img
          className="logo"
          src={logo}
          alt="Tech logo"
          title="Tech | Home"
        />
      </Link>

      <nav>
        <NavLink to="/" className={getClass}>
          Home
        </NavLink>
        <NavLink to="/about" className={getClass}>
          About
        </NavLink>
        <NavLink to="/categories" className={getClass}>
          Categories
        </NavLink>
        <NavLink to="/signup" className={getClass}>
          Signup
        </NavLink>
      </nav>
    </header>
  );
}
