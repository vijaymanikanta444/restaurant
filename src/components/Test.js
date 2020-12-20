import React, { useState } from 'react';
import { Card } from 'react-bootstrap';

export default function Test() {
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
  return (
    <div className="mt200 App">
      <h1>Test</h1>

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
              <Card.Title>{special.title}</Card.Title>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">
                <i
                  style={{ paddingRight: '5px', color: 'green' }}
                  class="fas fa-rupee-sign"
                ></i>
                <strong style={{ fontSize: '20px' }}>{special.price}</strong>
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
