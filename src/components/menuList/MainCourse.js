import React, { useState } from 'react';
import ScrollX from './ScrollX';

export default function MainCourse() {
  const [data, setdata] = useState([
    {
      img:
        'https://www.cookshideout.com/wp-content/uploads/2014/11/Veg-Manchurian-Low-Fat-FI.jpg',
      title: 'Manchuriya',
      price: '199',
    },
    {
      img:
        'https://www.cookshideout.com/wp-content/uploads/2014/11/Veg-Manchurian-Low-Fat-FI.jpg',
      title: 'Manchuriya',
      price: '299',
    },
    {
      img:
        'https://www.cookshideout.com/wp-content/uploads/2014/11/Veg-Manchurian-Low-Fat-FI.jpg',
      title: 'Manchuriya',
      price: '399',
    },
    {
      img:
        'https://www.cookshideout.com/wp-content/uploads/2014/11/Veg-Manchurian-Low-Fat-FI.jpg',
      title: 'Manchuriya',
      price: '499',
    },
    {
      img:
        'https://www.cookshideout.com/wp-content/uploads/2014/11/Veg-Manchurian-Low-Fat-FI.jpg',
      title: 'Manchuriya',
      price: '199',
    },
    {
      img:
        'https://www.cookshideout.com/wp-content/uploads/2014/11/Veg-Manchurian-Low-Fat-FI.jpg',
      title: 'Manchuriya',
      price: '199',
    },
    {
      img:
        'https://www.cookshideout.com/wp-content/uploads/2014/11/Veg-Manchurian-Low-Fat-FI.jpg',
      title: 'Manchuriya',
      price: '199',
    },
    {
      img:
        'https://www.cookshideout.com/wp-content/uploads/2014/11/Veg-Manchurian-Low-Fat-FI.jpg',
      title: 'Manchuriya',
      price: '199',
    },
    {
      img:
        'https://www.cookshideout.com/wp-content/uploads/2014/11/Veg-Manchurian-Low-Fat-FI.jpg',
      title: 'Manchuriya',
      price: '199',
    },
  ]);

  return (
    <div>
      <div className="bg p5 br40">
        <h4 className="nova-flat App fs25">Main Course</h4>
      </div>
      <ScrollX data={data} />
    </div>
  );
}
