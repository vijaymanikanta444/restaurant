import React, { Component } from "react";
import Desserts from "./Desserts";
import MainCourse from "./MainCourse";
import Shakes from "./Shakes";
import Starters from "./Starters";

export default class Menu extends Component {
  render() {
    return (
      <div className="container mt200">
        <h3>Menu : </h3>
        <div className="container">
          <Starters />
          <MainCourse />
          <Desserts />
          <Shakes />
        </div>
      </div>
    );
  }
}
