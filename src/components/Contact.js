import React from "react";
// import ParallaxContent from "./layout/Parallax";

export default function Contact() {
  const img1 =
    "https://st2.depositphotos.com/1265075/7446/i/600/depositphotos_74468913-stock-photo-contact-us-icons-on-cubes.jpg";

  const strength = 100;
  const transform = "translate(-10%, -10%)";
  return (
    <div>
      <div className="container mt200">
        {/* <ParallaxContent img1={img1} strength={strength} transform={transform} /> */}
        <h4 className="App" style={{ textDecoration: "underline" }}>
          CONTACT US{" "}
        </h4>
        <div className="w80" style={{ textAlign: "justify" }}>
          <p>
            {" "}
            this is the replacement of contact details (open{" "}
            <code>Contact.js</code> to modify the content)
          </p>
        </div>
      </div>
    </div>
  );
}
