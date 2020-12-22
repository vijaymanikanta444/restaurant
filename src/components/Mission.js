import React, { useState } from "react";
import Collapsible from "./Collapsible";

export default function Mission() {
  const [data, setdata] = useState({
    title: "MISSION",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat.",
  });
  return (
    <div>
      <Collapsible title={data.title} description={data.description} />
    </div>
  );
}
