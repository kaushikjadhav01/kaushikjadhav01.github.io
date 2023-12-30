import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "../styles/_nav.scss";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";


const NavPart = () => {
  return (
    <div className="fixed ">
      <div className={window.innerWidth > 767 ? "px-5" : "px-2"}>
        <Navbar collapseOnSelect expand="lg" className=" p-0">
          <Navbar.Brand href="/" className="logo p-0">
            KJ
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto ml-4 nav-left-side">
              <Nav.Link rel="noopener noreferrer" href="#home" className="nav-item">
                Home
              </Nav.Link>
              <Nav.Link rel="noopener noreferrer" href="#about" className="nav-item">
                About
              </Nav.Link>

              <Nav.Link rel="noopener noreferrer" href="#skills" className="nav-item">
                Skills
              </Nav.Link>
              <Nav.Link rel="noopener noreferrer" href="#projects" className="nav-item">
                Projects
              </Nav.Link>
              <Nav.Link rel="noopener noreferrer" href="#github-stats" className="nav-item">
                Github Stats
              </Nav.Link>

              <Nav.Link rel="noopener noreferrer" href="#contact" className="nav-item">
                Contact
              </Nav.Link>
            </Nav>
            <Nav
              className={`ml-auto ${
                window.innerWidth > 767 ? "" : "mt-5"
              }`}
            >
              <div className="d-flex justify-content-between">
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
                <Nav.Link rel="noopener noreferrer"
                  href="https://dev.to/kaushikjadhav01"
                  className="nav-item cursor-pointer"
                  target="_blank"
                  aria-label="dev.to"
                >
                  <img
                    height="25px"
                    src="images/devto.png"
                    alt="icon"
                  />
                </Nav.Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default NavPart;
