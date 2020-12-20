import React from "react";

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
          width: "20%",
          margin: "auto",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <a href="https://www.facebook.com/" className="iconFollow">
          <i class="fab fa-facebook" style={{ color: "#2E89ff" }}></i>
        </a>
        <a href="https://twitter.com/?lang=en" className="iconFollow">
          <i class="fab fa-twitter" style={{ color: "white" }}></i>
        </a>
        <a href="https://www.youtube.com/" className="iconFollow">
          <i class="fab fa-youtube" style={{ color: "#ff0101" }}></i>
        </a>
      </div>
    </div>
  );
}
