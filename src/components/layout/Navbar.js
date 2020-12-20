import React from 'react';

export default function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg  navbar-dark bg-dark fixed-top container-fluid mt137"
      aria-label="Main navigation"
    >
      <div class="container w80">
        <a class="navbar-brand" href="/">
          Home
        </a>
        <button
          class="navbar-toggler p-0 border-0"
          type="button"
          data-bs-toggle="offcanvas"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div
          class="navbar-collapse offcanvas-collapse"
          id="navbarsExampleDefault"
        >
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="/menu">
                Menu
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/about">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/contact">
                Contact
              </a>
            </li>
            <li className="nav-item dropdown">
              <div class="dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="/"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  Select
                </a>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" href="action1">
                    Action1
                  </a>
                  <a class="dropdown-item" href="action2">
                    Action2
                  </a>
                  <a class="dropdown-item" href="action3">
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
