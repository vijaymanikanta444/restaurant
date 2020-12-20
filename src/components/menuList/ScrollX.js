import React from "react";
import { Card } from "react-bootstrap";
import Carousel from "react-elastic-carousel";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 760, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

export default function ScrollX({ data }) {
  return (
    <div className="App">
      <div className="cards1">
        <Carousel breakPoints={breakPoints}>
          {data.map((starters, i) => (
            <div key={i} className="card1">
              <Card.Img
                variant="top"
                height="175px"
                width="100%"
                src={starters.img}
              />
              <Card.Body>
                <Card.Title className="exo2">{starters.title}</Card.Title>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">
                  <i
                    style={{ paddingRight: "5px", color: "green" }}
                    className="fas fa-rupee-sign"
                  ></i>
                  <span
                    className="play"
                    style={{ fontSize: "20px", color: "black" }}
                  >
                    {starters.price}
                  </span>
                  <span
                    style={{ paddingLeft: "10px" }}
                    className={starters.category == "veg" ? "green" : "red"}
                  >
                    <i className="far fa-dot-circle"></i>
                  </span>
                </small>
              </Card.Footer>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
