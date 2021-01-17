import React from "react";
import { Row, Col } from "react-bootstrap";
import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineGithub,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { IconContext } from "react-icons";

export default function Footer() {
  return (
    <Row className="text-center footer py-4">
      <IconContext.Provider value={{ className: "custom-icon" }}>
        <Col>
          <a
            href="https://www.facebook.com/profile.php?id=100010434435290"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineFacebook />
          </a>
        </Col>
        <Col>
          <a
            href="https://www.instagram.com/kevin.leonardo.sh/"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineInstagram />
          </a>
        </Col>
        <Col>
          <a
            href="https://github.com/Absolute001"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineGithub />
          </a>
        </Col>
        <Col>
          <a
            href="https://www.linkedin.com/in/kevin-shallvari-a6177b1b8/"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineLinkedin />
          </a>
        </Col>
      </IconContext.Provider>
    </Row>
  );
}
