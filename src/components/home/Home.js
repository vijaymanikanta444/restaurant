import React from "react";
import ParallaxContent from "../layout/Parallax";
import Slider from "./Slider";
// import Test from "./Test";

export default function Home() {
  const img1 =
    "https://img.freepik.com/free-psd/top-view-fast-food-black-background-mock-up_23-2148321326.jpg?size=626&ext=jpg";
  const strength = 500;
  return (
    <div>
      <Slider />
      <ParallaxContent img1={img1} strength={strength} />
      {/* <Test /> */}
    </div>
  );
}
