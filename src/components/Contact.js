import React from "react";
import ParallaxContent from "./layout/Parallax";

export default function Contact() {
  const img1 =
    "https://st2.depositphotos.com/1265075/7446/i/600/depositphotos_74468913-stock-photo-contact-us-icons-on-cubes.jpg";
  return (
    <div>
      <div className="container mt200">
        <h1>Contact</h1>
      </div>
      <ParallaxContent img1={img1} />
    </div>
  );
}
