import React, { useState } from "react";

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
  const today = new Date();
  console.log(today.toDateString());

  return (
    <div className="mt200 App">
      <p>{weekDays[today.getDay()]}</p>
    </div>
  );
}
