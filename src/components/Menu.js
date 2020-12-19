import React, { Component } from 'react';
import Desserts from './menuList/Desserts';
import MainCourse from './menuList/MainCourse';
import Shakes from './menuList/Shakes';
import Starters from './menuList/Starters';

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
