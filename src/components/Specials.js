import React, { useState } from "react";
import { Card } from "react-bootstrap";

export default function Specials() {
  const [weekDays, setweekDays] = useState([
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ]);
  const [data, setdata] = useState({
    Sunday: [
      {
        img:
          "https://static01.nyt.com/images/2019/05/21/dining/kwr-mexican-hot-dogs/kwr-mexican-hot-dogs-articleLarge.jpg",
        title: "Hot-Dogs",
        price: "160/-",
        category: "non-veg",
      },
      {
        img:
          "https://www.indianhealthyrecipes.com/wp-content/uploads/2019/02/chicken-biryani-recipe.jpg",
        title: "Pedagadi-Biryani",
        price: "249/-",
        category: "non-veg",
      },
    ],
    Monday: [
      {
        img:
          "https://im.whatshot.in/img/2018/Aug/shutterstock-797179129-1533660658.jpg",
        title: "Pani-Less-Puri",
        price: "29/-",
        category: "veg",
      },
      {
        img: "https://i.ytimg.com/vi/hrozhYx_mQE/maxresdefault.jpg",
        title: "Mexican-French-Fries",
        price: "59/-",
        category: "veg",
      },
    ],
    Tuesday: [
      {
        img: "https://i.ytimg.com/vi/zzrTusXqk4g/maxresdefault.jpg",
        title: "Marripalem-Potato-Fry",
        price: "139/-",
        category: "veg",
      },
      {
        img: "https://avatars1.githubusercontent.com/u/64799480?v=4",
        title: "Kurnool-Kichidi",
        price: "999/-",
        category: "veg",
      },
    ],
    Wednesday: [
      {
        img:
          "https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/ikgoqbkdsderfzjrtdxu",
        title: "DIET-clg-Dosa",
        price: "49/-",
        category: "veg",
      },
      {
        img:
          "https://b.zmtcdn.com/data/pictures/3/17977903/e1c47b60653bd71c1a2001494deb85bd.jpg",
        title: "Air-Less-Puri",
        price: "79/-",
        category: "veg",
      },
    ],
    Thursday: [
      {
        img: "https://i.ytimg.com/vi/7QxyIgR4tz8/hqdefault.jpg",
        title: "Reshma-Kaju-Tomato",
        price: "499/-",
        category: "veg",
      },
      {
        img:
          "https://www.cookwithmanali.com/wp-content/uploads/2014/11/Soft-Homemade-Naan-500x500.jpg",
        title: "Butter-Naan",
        price: "99/-",
        category: "veg",
      },
    ],
    Friday: [
      {
        img:
          "https://thekaravaliwok.com/wp-content/uploads/2017/06/2017-06-19-15-25-50.jpg",
        title: "Curd-Rice",
        price: "159/-",
        category: "veg",
      },
      {
        img:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKspEqzBhvOOs5selPaLQJj2LbfMjeHO6Mrg&usqp=CAU",
        title: "Pinagadi-Pulihora",
        price: "41/-",
        category: "veg",
      },
    ],
    Saturday: [
      {
        img:
          "https://www.sitarafoods.com/images/Sitara/image-Narinja_Mitai-1590735098421.jpg",
        title: "N.A.D-Narinja-Mitai",
        price: "69/-",
        category: "veg",
      },
      {
        img:
          "https://asmallbite.com/wp-content/uploads/2018/07/Tiffin-Sambar-with-toordal-recipe.jpg",
        title: "SaradaNagar-Sambar",
        price: "99/-",
        category: "veg",
      },
    ],
  });
  const today = new Date();
  console.log(today.toDateString());
  console.log(data.length);
  const day = weekDays[today.getDay()];
  return (
    <div className="mt200 App">
      <div>
        <h1 className="alex-brush fs50 yellow ">
          {day}
          {`'s Specials`}
        </h1>
      </div>

      <div className="cards">
        {data[day].map((special) => (
          <div className="card">
            <Card.Img
              variant="top"
              height="200px"
              width="100%"
              src={special.img}
            />
            <Card.Body>
              <Card.Title className="exo2">{special.title}</Card.Title>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">
                <i
                  style={{ paddingRight: "5px", color: "green" }}
                  class="fas fa-rupee-sign"
                ></i>
                <span
                  className="play"
                  style={{ fontSize: "20px", color: "black" }}
                >
                  {special.price}
                </span>
                <span
                  style={{ paddingLeft: "10px" }}
                  className={special.category == "veg" ? "green" : "red"}
                >
                  <i class="far fa-dot-circle"></i>
                </span>
              </small>
            </Card.Footer>
          </div>
        ))}
      </div>
    </div>
  );
}
