import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../Projects/ProjectCards";
import Particle from "../Particle"; 
import os from  "../../Assets/Projects/os.png";
import dbms from  "../../Assets/Projects/dbms.png";
import sd from  "../../Assets/Projects/sd.png";
import full from  "../../Assets/Projects/full.png";
import cpp from  "../../Assets/Projects/cpp.png";
import java from  "../../Assets/Projects/java.png";

function Certificate() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My   <strong className="purple">Certificates </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are my Certificates.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cpp}
              isBlog={false}
              title="C++ from Coding Ninjas"
              demoLink="https://ninjasfiles.s3.amazonaws.com/certificate3292402473032e921d3bd8c38abdd30a452598f.pdf"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={java}
              isBlog={false}
              title="Java from Coding Ninjas"
              demoLink="https://ninjasfiles.s3.amazonaws.com/certificate34198531513f1ad407830a2a12319b503729066.pdf"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={os}
              isBlog={false}
              title="Operating System from Coding Ninjas"
              demoLink="https://ninjasfiles.s3.amazonaws.com/certificate344315370409f9f1c241674fa0fca92786f4d8f.pdf"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dbms}
              isBlog={false}
              title="DBMS from Coding Ninjas"
              demoLink="https://ninjasfiles.s3.amazonaws.com/certificate344315480639fab40346df085beaa98e8af8b35.pdf"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={full}
              isBlog={false}
              title="Full Stack Development from Apna College"
              demoLink="https://drive.google.com/file/d/1AYSvnoQjjf46qAa9gLXkyTOLXDU3cY9v/view?usp=drive_link"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sd}
              isBlog={false}
              title="System Design from Coding Ninjas"
              demoLink="https://ninjasfiles.s3.amazonaws.com/certificate3443155def890df76f1dfd33175bdf80d71fefd.pdf"
            />
          </Col> 
 
        </Row>
      </Container>
    </Container>
  );
}

export default Certificate;
