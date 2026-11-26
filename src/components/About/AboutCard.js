import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am{" "}
            <span className="purple">Chanisata Muangsub </span>
            born in <span className="purple"> 2002.</span>
            <br />
            I graduated from King Mongkut’s University of Technology North
            Bangkok (KMUTNB) with a Bachelor of Engineering in Electronics
            Engineering Technology, majoring in Computer Engineering Technology.
            <br />
            My academic background includes Mobile and Cloud Computing,
            Artificial Intelligence, Software Engineering, and Computer System
            Development and I have gained internship experience in the field of{" "}
            <span className="purple">web development,</span>
            <br />
            including using Flutter to create beautiful applications that meet
            the needs of users.
            <br />I also enjoy{" "}
            <span className="purple">
              earning new technology to apply in various projects.{" "}
            </span>
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight />I enjoy playing badminton in my free time. I may
              not be a professional player,
              <span className="purple">
                {" "}
                but I never give up and I never lose!{" "}
              </span>
            </li>

            <li className="about-activity">
              <ImPointRight /> I love watching movies, especially
              <span className="purple"> Marvel movies and horror films. </span>
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
