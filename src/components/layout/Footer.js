import React from 'react';

export default function Footer() {
  return (
    <div className="App mt50">
      <div>
        <div className="bg p5">
          <div className="fs25">
            <i class="fas fa-crown"></i>
            <span className="prl-20">ROYAL KITCHEN</span>
            <i class="fas fa-crown"></i>
          </div>
        </div>
        <br />
        <p>
          Vepagunta - Sabbavaram Rd, Visakhapatnam, Andhra-Pradesh.
          Pincode-531173 , India
          <br />
          Restaurant: <strong class="ltr">+91-7075909775</strong> - Catering:{' '}
          <strong class="ltr">+91-7659922621</strong>
        </p>
        <div id="copyright">
          <div class="w-container">
            <p>&copy; 2020 Royal Kitchen </p>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
}
