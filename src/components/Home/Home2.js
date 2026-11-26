import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/b.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am passionate about creating websites, developing digital
              platforms, and building user-friendly applications.
              <br />
              <br />I enjoy exploring new
              <i>
                <b className="purple"> technologies, solving problems, </b>
                and identifying and fixing bugs to improve application
                performance and user experience.
              </i>
              <br />
              <br />
              My technical interests include{" "}
              <b className="purple">Flutter, Dart, HTML,Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  modern JavaScript libraries and frameworks such as React.js
                  and Next.js.
                </b>
              </i>
              <br />
              <br />
              Front-End DI am particularly interested in evelopment, while also
              eager to expand my knowledge of
              <i>
                <b className="purple"> Back-End Development </b>
                and
                <b className="purple"> full-stack technologies. </b>I enjoy
                learning new tools, adapting to emerging technologies, and
                turning ideas into practical digital solutions.
              </i>
              <br />
              {/* &nbsp; like */}
              <br />I believe that continuous learning, problem-solving, and
              attention to detail are essential qualities for becoming a great
              developer.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Chanisatabarry"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.instagram.com/barrybbear_?igsh=MXVwMmZyaXB3MGx3Mw=="
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
