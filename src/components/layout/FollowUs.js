import React from 'react';

export default function FollowUs() {
  return (
    <div className="App">
      <div className="mt50 exo2 fs25">
        <span>FOLLOW US</span>
      </div>
      <div className="pt-2">
        <p>Connect, follow and have a conversation with us</p>
      </div>
      <div
        style={{
          width: '11%',
          margin: 'auto',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <a href="www.facebook.com" target="_blank" className="iconFollow">
          <i class="fab fa-facebook" style={{ color: '#2E89ff' }}></i>
        </a>
        <a href="www.twitter.com" target="_blank" className="iconFollow">
          <i class="fab fa-twitter" style={{ color: 'white' }}></i>
        </a>
        <a href="www.youtube.com" target="_blank" className="iconFollow">
          <i class="fab fa-youtube" style={{ color: '#ff0101' }}></i>
        </a>
      </div>
    </div>
  );
}
