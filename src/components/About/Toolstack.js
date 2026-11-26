import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiTailwindcss,
  SiFigma,
  SiBootstrap,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <a
          href="https://code.visualstudio.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "white" }}
        >
          <SiVisualstudiocode />
        </a>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <a
          href="https://www.figma.com/files/team/1346087359212624072/recents-and-sharing/recently-viewed?fuid=1346087357160131444"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "white" }}
        >
          <SiFigma />
        </a>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <a
          href="https://tailwindcss.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "white" }}
        >
          <SiTailwindcss />
        </a>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <a
          href="https://getbootstrap.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "white" }}
        >
          <SiBootstrap />
        </a>
      </Col>
    </Row>
  );
}

export default Toolstack;
