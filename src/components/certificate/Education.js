import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../Projects/ProjectCards";
import Particle from "../Particle";
import search from "../../Assets/Projects/search.png";
import weather from "../../Assets/Projects/weather.png";
import zerodha from "../../Assets/Projects/zerodha.png";
 

function Education() {
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
              imgPath={zerodha}
              isBlog={false}
              title="Zerodha Frontend Clone"
              description="This is a frontend clone of Zerodha, built using HTML, CSS, JavaScript, and React. The project replicates the UI of Zerodha’s trading platform, ensuring a responsive and clean user experience."
              ghLink="https://github.com/masoomraza2002/zerodha"
              demoLink="https://zerodha-delta-lake.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={search}
              isBlog={false}
              title="Quest Search"
              description="This project is Quest searchQuest Search is a project designed to enhance the search experience, offering users an intuitive and efficient way to find relevant information quickly and easily."
              ghLink="https://github.com/masoomraza2002/speakX" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Live Weather"
              description="Weather Forecasting React UI is a responsive web application built with React.js that provides real-time weather information for cities worldwide. Utilizing the OpenWeatherMap API, it offers current weather conditions, including temperature, humidity, and wind speed, with dynamic icons representing various weather states."
              ghLink="https://github.com/masoomraza2002/weather"
              demoLink="https://weather-five-ashen.vercel.app/"              
            />
          </Col>  
 
        </Row>
      </Container>
    </Container>
  );
}

export default Education;
