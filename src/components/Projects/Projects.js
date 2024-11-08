import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import code from "../../Assets/Projects/code.jpg";
import project from "../../Assets/Projects/project.jpg";

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
            <ProjectCard
              imgPath={project}
              isBlog={false}
              title="Project"
              description="This is my undergraduate thesis project, which involves developing an application to compare product prices across different stores. It also utilizes the Longdo Map API."
            />
          </Col>
<Col md={4} className="project-card">
            <ProjectCard
              imgPath={code}
              isBlog={false}
              title="Flutter App"
              description="I made a web app about selling shoes online. But it's only a demo."
            />
          </Col>
          

          

          

          

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
