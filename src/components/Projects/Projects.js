import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import project from "../../Assets/Projects/project.jpg";
import csv from "../../Assets/Projects/csv.jpg";
import Bee from "../../Assets/Projects/Bee.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <a
              href="https://www.csvenergy.co.th/th/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <ProjectCard
                imgPath={csv}
                isBlog={false}
                title="CSV Energy Co., Ltd."
                description="Responsible for technical presentations, consultations, EV charging station design, sales support, proposal preparation, and project coordination with government and private-sector clients, as well as international manufacturers."
              />
            </a>
          </Col>

          <Col md={4} className="project-card">
            <a
              href="https://www.joylada.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <ProjectCard
                imgPath={Bee}
                isBlog={false}
                title="Internship at Ookbee U Co., Ltd "
                description="Developed and maintained web applications using React.js, Next.js, and TypeScript, implemented user interfaces, integrated APIs, fixed bugs, and collaborated with the development team to improve application functionality and user experience."
              />
            </a>
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project}
              isBlog={false}
              title="GRADUATION PROJECT"
              description="Developed a Flutter-based mobile application that compares supermarket product prices, recommends budget-friendly shopping options, and provides store locations and navigation routes to help users make cost-effective purchasing decisions."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
