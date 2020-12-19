import { Carousel } from "react-bootstrap";
import React, { useState } from "react";

export default function Home() {
  const [data, setdata] = useState([
    {
      src:
        "https://cdn.pixabay.com/photo/2012/08/27/14/19/mountains-55067__340.png",
      alt: "First slide",
      title: "First slide1",
      description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      src:
        "https://img.freepik.com/free-psd/top-view-fast-food-black-background-mock-up_23-2148321326.jpg?size=626&ext=jpg",
      alt: "Second slide",
      title: "Second slide label",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      src:
        "https://i1.wp.com/www.theholidaylens.com/wp-content/uploads/2018/09/P9080343.jpg?resize=1038%2C576&ssl=1",
      alt: "Third slide",
      title: "Third slide label",
      description:
        "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
    },
    {
      src:
        "https://c0.wallpaperflare.com/preview/296/409/113/clouds-corn-corn-field-crop.jpg",
      alt: "Fourth slide",
      title: "Fourth slide label",
      description: "Nature is the best medicine",
    },
    {
      src:
        "https://img.huffingtonpost.com/asset/5d0a88512500004e12e94a01.jpeg?ops=scalefit_720_noupscale",
      alt: "Fifth slide",
      title: "Fifth slide label",
      description: "A plate full of varieties",
    },
  ]);
  return (
    <div className="mt200">
      <div className="containerSlide ">
        <Carousel>
          {data.map((element) => (
            <Carousel.Item interval={2500}>
              <img
                className="d-block w-100"
                src={element.src}
                alt={element.alt}
                height="400px"
              />
              <Carousel.Caption>
                <h3>{element.title}</h3>
                <p>{element.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
