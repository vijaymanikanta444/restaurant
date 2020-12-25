import React, { Component } from "react";
import Desserts from "./Desserts";
import MainCourse from "./MainCourse";
import Shakes from "./Shakes";
import Starters from "./Starters";
import Biryani from "./Biryani";
import ParallaxContent from "../layout/Parallax";

export default function Menu() {
  const img1 =
    "https://img.freepik.com/free-psd/top-view-fast-food-black-background-mock-up_23-2148321326.jpg?size=626&ext=jpg";
  const strength = 500;
  const transform = "translate(-50%, -50%)";
  return (
    <div>
      <div className="container mt200">
        <h3>Menu : </h3>
      </div>
      <ParallaxContent img1={img1} strength={strength} transform={transform} />
      <div className="container">
        <Starters />
        <MainCourse />
        <Biryani />
        <Desserts />
        <Shakes />
      </div>
    </div>
  );
}
