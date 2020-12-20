import React from "react";

export default function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg  navbar-dark bg-dark fixed-top container-fluid mt137"
      aria-label="Main navigation"
    >
      <div className="container w80">
        <a className="navbar-brand" href="/">
          Home
        </a>
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
              <a className="nav-link" href="/menu">
                Menu
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/specials">
                Special's
              </a>
            </li>
            <li className="nav-item dropdown">
              <div className="dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  Select
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <a className="dropdown-item" href="action1">
                    Action1
                  </a>
                  <a className="dropdown-item" href="action2">
                    Action2
                  </a>
                  <a className="dropdown-item" href="action3">
                    Action3
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
