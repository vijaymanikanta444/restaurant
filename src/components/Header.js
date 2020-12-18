import React from 'react';
// import TextGradient from 'react-textgradient';

export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top container-fluid bg-dark bb">
        <div className="locate w80 ">
          <div className="p10">
            <a class="navbar-brand p-l2 " href="#">
              <img
                className="round "
                //   src="https://i.pinimg.com/originals/b1/77/87/b177879cded969777698b9d51c9ae212.gif"
                //   src="https://cdn.shopify.com/s/files/1/1095/6418/products/Gif-008-T_large.gif?v=1597325526"
                // src="https://paavu.com/wp-content/uploads/2019/10/lion-wine.gif"
                // src="https://cdn.dribbble.com/users/3345883/screenshots/9162158/liquid_rk_logo.gif"
                src="https://66.media.tumblr.com/tumblr_lvo8isW1MC1r6aoq4o1_400.gif"
                alt="animated Logo"
                height="100"
                width="100"
              />
            </a>
          </div>

          <div className="white langar  gradient logo-location">
            {/* <i className="fas fa-crown fs25 text-crown p-r1" /> */}
            <span className="fs50">ROYAL_KITCHEN</span>
          </div>
          <div>
            <div className="p-r4 white fs50 gradient">
              <i className="fas fa-crown text-crown p-r1" />
              {/* ROYAL KITCHEN */}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
