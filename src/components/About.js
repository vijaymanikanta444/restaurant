import React from "react";
// import Collapsible from "./Collapsible";
// import Mission from "./Mission";
// import Vision from "./Vision";

export default function About() {
  return (
    <div className="container mt200">
      {/* <Collapsible /> */}

      <h4 className="App" style={{ textDecoration: "underline" }}>
        MISSION{" "}
      </h4>
      <div className="w80" style={{ textAlign: "justify" }}>
        <p>
          {" "}
          this is the replacement of mission details (open <code>
            about.js
          </code>{" "}
          to modify the content)
        </p>
      </div>
      <h4 className="App" style={{ textDecoration: "underline" }}>
        VISION{" "}
      </h4>
      <p className="w80" style={{ textAlign: "justify" }}>
        {" "}
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea
        commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing
        elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        utaliquip ex ea commodo consequat.
      </p>
    </div>
  );
}
