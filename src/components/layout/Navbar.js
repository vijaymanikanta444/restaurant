import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [active, setactive] = useState('');
  const onclick = (e) => {
    setactive(e.target.id);
  };
  console.log(active);
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg  navbar-dark bg-dark fixed-top container-fluid mt137"
        aria-label="Main navigation"
      >
        <div className="container w80">
          <Link className="navbar-brand" to="/" onClick={onclick} id="home">
            <i
              className={
                active == 'home' ? 'active fas fa-home' : 'fas fa-home'
              }
            ></i>
          </Link>
          <input
            className="navbar-toggler p-0 border-0"
            type="button"
            data-bs-toggle="offcanvas"
            aria-label="Toggle navigation"
            value={<span className="navbar-toggler-icon"></span>}
          />
          {/* </input> */}

          <div
            className="navbar-collapse offcanvas-collapse"
            id="navbarsExampleDefault"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={active == 'menu' ? 'active nav-link' : 'nav-link'}
                  to="/menu"
                  onClick={onclick}
                  id="menu"
                >
                  Menu
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className={active == 'about' ? 'active nav-link' : 'nav-link'}
                  to="/about"
                  onClick={onclick}
                  id="about"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={
                    active == 'contact' ? 'active nav-link' : 'nav-link'
                  }
                  to="/contact"
                  onClick={onclick}
                  id="contact"
                >
                  Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={
                    active == 'specials' ? 'active nav-link' : 'nav-link'
                  }
                  to="/specials"
                  onClick={onclick}
                  id="specials"
                >
                  Special's
                </Link>
              </li>
              <li className="nav-item dropdown">
                <div className="dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="/"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Select
                  </Link>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <Link className="dropdown-item" to="action1">
                      Action1
                    </Link>
                    <Link className="dropdown-item" to="action2">
                      Action2
                    </Link>
                    <Link className="dropdown-item" to="action3">
                      Action3
                    </Link>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
