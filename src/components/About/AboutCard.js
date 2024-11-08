import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Chanisata Muangsub </span>
           born in <span className="purple"> 2002.</span>
            <br />
            I am currently a 4th year student
            <br />
            I have completed Integrated MSc (IMSc) in Maths and Computing at BIT
            Mesra.
            I am interested and passionate about <span className="purple">web application development,</span>
            <br />
            including using Flutter to create beautiful applications that meet the needs of users.
            <br />
            I also enjoy <span className="purple">earning new technology to apply in various projects. </span>
            Please take care of yourself! 😊
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
