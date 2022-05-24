import './styles.css';
import 'bootstrap/js/src/collapse.js';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary main-nav">
      <div className="container-fluid">
        <Link to="/products" className="nav-logo-text">
          <h4>Pegasus</h4>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#dscatalog-navbar"
          aria-controls="dscatalog-navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="dscatalog-navbar">
          <ul className="navbar-nav offset-md-2 main-menu">
            <li>
              <NavLink
                to="/products"
                style={(isActive) => ({ color: isActive ? 'white' : '' })}
              >
                CATÁLOGO
              </NavLink>
            </li>
            <li>
              <NavLink
                to="admin"
                style={(isActive) => ({ color: isActive ? 'white' : '' })}
              >
                ADMIN
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                style={(isActive) => ({ color: isActive ? 'white' : '' })}
              >
                BLOG
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
