import React from "react";
import "../styles/_footer.scss";
import { Col, Nav, Row } from "react-bootstrap";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

const Footer = () => {
  return (
    <div className="footer pb-5 pt-5 ">
      <div className="container">
        <Row className="justify-content-between align-items-center">
          <Col md={3} xs={12}>
            <div className="d-flex justify-content-between footer-info mt-4">
            <Nav.Link rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/kajadhav/"
                  className="nav-item cursor-pointer"
                  aria-label="Linkedin"
                  target="_blank"
                >
                 <LinkedInIcon/>
                </Nav.Link>
                <Nav.Link rel="noopener noreferrer"
                  href="https://github.com/kaushikjadhav01"
                  className="nav-item cursor-pointer"
                  target="_blank"
                  aria-label="github"
                >
                  <GitHubIcon />
                </Nav.Link>
                <Nav.Link rel="noopener noreferrer"
                  href="https://medium.com/@kaushikjadhav01"
                  className="nav-item cursor-pointer"
                  target="_blank"
                  aria-label="medium"
                >
                  <img
                    height="25px"
                    src="images/med.png"
                    alt="icon"
                  />
                </Nav.Link>
                <Nav.Link rel="noopener noreferrer"
                  href="https://app.codesignal.com/profile/kaushik_j_vtc"
                  className="nav-item cursor-pointer"
                  target="_blank"
                  aria-label="youtube"
                >
                  <img
                    height="25px"
                    src="images/codesignal.png"
                    alt="icon"
                  />
                </Nav.Link>
                <Nav.Link rel="noopener noreferrer"
                  href="https://app.daily.dev/kaushikjadhav01"
                  className="nav-item cursor-pointer"
                  target="_blank"
                  aria-label="app.daily.dev"
                >
                  <img
                    height="25px"
                    src="images/appdailydev.png"
                    alt="icon"
                  />
                </Nav.Link>
                <Nav.Link rel="noopener noreferrer"
                  href="https://scholar.google.com/citations?user=iRYcFi0AAAAJ"
                  className="nav-item cursor-pointer"
                  target="_blank"
                  aria-label="google-scholar"
                >
                  <img
                    height="25px"
                    src="images/google-scholar.png"
                    alt="icon"
                  />
                </Nav.Link>
                <Nav.Link rel="noopener noreferrer"
                  href="https://g.dev/kaushikjadhav01"
                  className="nav-item cursor-pointer"
                  target="_blank"
                  aria-label="google-devs"
                >
                  <img
                    height="25px"
                    src="images/googledevs.png"
                    alt="icon"
                  />
                </Nav.Link>
                <Nav.Link rel="noopener noreferrer"
                  href="https://stackoverflow.com/users/21890981/kaushik-jadhav"
                  className="nav-item cursor-pointer"
                  target="_blank"
                  aria-label="stackoverflow"
                >
                  <img
                    height="25px"
                    src="images/so.png"
                    alt="icon"
                  />
                </Nav.Link>
            </div>
          </Col>
          <Col md={5} xs={12}>
            <ul className="d-flex justify-content-between p-0 w-100 footer-info mt-4 ">
              <li className="p-1">
                <a rel="noopener noreferrer" href="#home">Home</a>
              </li>
              <li className="p-1">
                <a rel="noopener noreferrer" href="#about">About</a>
              </li>
              <li className="p-1">
                <a rel="noopener noreferrer" href="#skills">Skills</a>
              </li>
              <li className="p-1">
                <a rel="noopener noreferrer" href="#projects">Projects</a>
              </li>
              <li className="p-1">
                <a rel="noopener noreferrer" href="#github-stats">GitHub Stats</a>
              </li>
              <li className="p-1">
                <a rel="noopener noreferrer" href="#contact">Contact</a>
              </li>
            </ul>
          </Col>
        </Row>
        <div className="text-center mt-4  footer-end">
          <p>
            Developed by{" "}
            <span className="chonburi-font green-text"> Kaushik Jadhav</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
