import React, { useState } from "react";
import { Accordion, Card, Button } from "react-bootstrap";

export default function Collapsible() {
  return (
    <Accordion>
      <Card className="cardStyle">
        <Card.Header>
          <Accordion.Toggle as={Button} eventKey="0">
            MISSION
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
            doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            utaliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit, sed doeiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi utaliquip ex ea commodo consequat.
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card className="cardStyle">
        <Card.Header>
          <Accordion.Toggle as={Button} eventKey="1">
            VISION
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
            doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            utaliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit, sed doeiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi utaliquip ex ea commodo consequat.
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}
