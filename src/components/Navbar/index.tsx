import './styles.css';
import 'bootstrap/js/src/collapse.js';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import { useContext, useEffect } from 'react';
import { AuthContext } from 'AuthContext';
import { getTokenData, isAuthenticated } from 'util/auth';
import { removeAuthData } from 'util/storage';



export const Navbar = () => {

  const {authContextData, setAuthContextData } = useContext(AuthContext);

  useEffect(() => {
    if (isAuthenticated()) {
      setAuthContextData({
        authenticated: true,
        tokenData: getTokenData(),
      });
    } else {
      setAuthContextData({
        authenticated: false,
      });
    }
  }, [setAuthContextData]);

  const handleLogoutClick =(event: React.MouseEvent<HTMLAnchorElement> )=>{
    event.preventDefault();
    removeAuthData();
    setAuthContextData({
    authenticated: false,
  });
}

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
        <div className='nav-Login-logout'>
          {authContextData.authenticated ? (
            <>
            <span className='nav-username'>{authContextData.tokenData?.user_name}</span>
            <Link to="#logout" onClick={handleLogoutClick} >LOGOUT</Link>
            </>
          ) : (
            <Link to="/admin/auth">LOGIN</Link>
          )}
        </div>
      </div>
    </nav>
  );
};
