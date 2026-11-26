import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiJava,
} from "react-icons/di";
import { SiFirebase } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <a
          href="https://www.w3schools.com/cpp/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "white" }}
        >
          <CgCPlusPlus />
        </a>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <a
          href="https://www.w3schools.com/js/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "white" }}
        >
          <DiJavascript1 />
        </a>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <a
          href="https://nodejs.org/en"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "white" }}
        >
          <DiNodejs />
        </a>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <a
          href="https://react.dev/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "white" }}
        >
          <DiReact />
        </a>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <a
          href="https://firebase.google.com/?utm_source=google&utm_medium=cpc&utm_campaign=Cloud-SS-DR-Firebase-FY26-global-gsem-1713590&utm_content=text-ad&utm_term=KW_firebase&gad_source=1&gad_campaignid=23417478209&gbraid=0AAAAADpUDOhQ4Xnt5c6HanEq6H0RPG92F&gclid=CjwKCAiAzp_YBhAJEiwASf8kHXT_wJQltTNlHu2_SzN7uW1fB_HK7-lXG1qkivnor6xqernoaqLzYxoCvooQAvD_BwE"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "white" }}
        >
          <SiFirebase />
        </a>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <a
          href="https://www.python.org/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "white" }}
        >
          <DiPython />
        </a>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <a
          href="https://www.java.com/en/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "white" }}
        >
          <DiJava />
        </a>
      </Col>
    </Row>
  );
}

export default Techstack;
