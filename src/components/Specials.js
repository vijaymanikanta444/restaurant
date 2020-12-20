import React, { useState } from 'react';
import { Card } from 'react-bootstrap';

export default function Specials() {
  const [weekDays, setweekDays] = useState([
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]);
  const [data, setdata] = useState([
    {
      img:
        'https://static01.nyt.com/images/2019/05/21/dining/kwr-mexican-hot-dogs/kwr-mexican-hot-dogs-articleLarge.jpg',
      title: 'Hot-Dogs',
      price: '160/-',
      category: 'non-veg',
    },
    {
      img: 'https://i.ytimg.com/vi/hrozhYx_mQE/maxresdefault.jpg',
      title: 'Mexican-French-Fries',
      price: '160/-',
      category: 'veg',
    },
    {
      img:
        'https://static01.nyt.com/images/2019/05/21/dining/kwr-mexican-hot-dogs/kwr-mexican-hot-dogs-articleLarge.jpg',
      title: 'Hot-Dogs',
      price: '160/-',
      category: 'veg',
    },
    {
      img:
        'https://static01.nyt.com/images/2019/05/21/dining/kwr-mexican-hot-dogs/kwr-mexican-hot-dogs-articleLarge.jpg',
      title: 'Hot-Dogs',
      price: '160/-',
      category: 'veg',
    },
    {
      img:
        'https://static01.nyt.com/images/2019/05/21/dining/kwr-mexican-hot-dogs/kwr-mexican-hot-dogs-articleLarge.jpg',
      title: 'Hot-Dogs',
      price: '160/-',
      category: 'veg',
    },
    {
      img:
        'https://static01.nyt.com/images/2019/05/21/dining/kwr-mexican-hot-dogs/kwr-mexican-hot-dogs-articleLarge.jpg',
      title: 'Hot-Dogs',
      price: '160/-',
      category: 'veg',
    },
    {
      img:
        'https://static01.nyt.com/images/2019/05/21/dining/kwr-mexican-hot-dogs/kwr-mexican-hot-dogs-articleLarge.jpg',
      title: 'Hot-Dogs',
      price: '160/-',
      category: 'veg',
    },
    {
      img:
        'https://static01.nyt.com/images/2019/05/21/dining/kwr-mexican-hot-dogs/kwr-mexican-hot-dogs-articleLarge.jpg',
      title: 'Hot-Dogs',
      price: '160/-',
      category: 'veg',
    },
  ]);
  const today = new Date();
  console.log(today.toDateString());
  console.log(data.length);
  return (
    <div className="mt200 App">
      <div>
        <h1 className="alex-brush fs50 yellow ">
          {weekDays[today.getDay()]}
          {`'s Specials`}
        </h1>
      </div>

      <div className="cards">
        {data.map((special) => (
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
                  style={{ paddingRight: '5px', color: 'green' }}
                  class="fas fa-rupee-sign"
                ></i>
                <span
                  className="play"
                  style={{ fontSize: '20px', color: 'black' }}
                >
                  {special.price}
                </span>
                <span
                  style={{ paddingLeft: '10px' }}
                  className={special.category == 'veg' ? 'green' : 'red'}
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
