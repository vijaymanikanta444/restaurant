import React from "react";
import { Parallax } from "react-parallax";

export default function ParallaxContent({ img1 }) {
  const center = {
    padding: "10px",
    left: "50%",
    top: "50%",
    background: " #212f3d",
    position: "absolute",
    transform: "translate(-50%, -50%)",
    color: "white",
    fontSize: "30px",
    fontWeight: "bold",
  };
  return (
    <div className="mb50 ">
      <Parallax bgImage={img1} bgImageAlt="the cat" strength={500}>
        <div style={{ height: 800 }}>
          <div style={center}>
            Content goes here. Parallax height grows with content height.
          </div>
        </div>
      </Parallax>
    </div>
  );
}
