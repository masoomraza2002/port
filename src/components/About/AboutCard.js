import React from "react";
import Card from "react-bootstrap/Card";
// import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Masoom Raza </span>
            from <span className="purple"> Saran, Bihar, India.</span>
            <br />
            I am currently Pursuing B.Tech in Computer Science and Engineering at Lovely Professional University.
            <br />
            <br />
          </p>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Masoom</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
