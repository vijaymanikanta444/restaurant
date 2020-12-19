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
            {/* <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="dropdown01"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Menu
              </a>
              <ul
                class="dropdown-menu dropdown-menu-dark"
                aria-labelledby="dropdown01"
              >
                <li>
                  <a class="dropdown-item" href="/starter">
                    starters
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Food
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Desserts
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    shakes
                  </a>
                </li>
              </ul>
            </li> */}
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

            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="dropdown01"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Settings
              </a>
              <ul
                class="dropdown-menu dropdown-menu-dark"
                aria-labelledby="dropdown01"
              >
                <li>
                  <a class="dropdown-item" href="#">
                    Action1
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Action2
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Action3
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
