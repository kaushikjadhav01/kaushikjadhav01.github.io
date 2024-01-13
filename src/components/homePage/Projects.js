// import { Button } from "@material-ui/core";
import { motion } from "framer-motion";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { scrollReveal } from "../../animation";
import { useScroll } from "./useScroll";
import Badge from "react-bootstrap/Badge";
import Img from "react-cool-img";

const myProjects = [
  {
    image: "/images/mdp.png",
    title: "Medicine Data Portal",
    description:
      "Data Reporting Portal to help thousands of partner companies simultaneously edit business reports with 500k rows of huge data with real-time messaging with AWS, Python, Django, React, NodeJS and PostgreSQL.",
    source: "https://github.com/kaushikjadhav01/Medicine-Data-Portal__Data-Reporting-Tool",
    demoLink: "http://mdp.kajadhav.me/"
  },
  {
    image: "/images/stock.png",
    title: "Stock Market Prediction",
    description:
      "The App forecasts stock prices of the next seven days for any given stock under NASDAQ or NSE as input by the user. Predictions are made using three algorithms: ARIMA, LSTM, Linear Regression.",
    source: "https://github.com/kaushikjadhav01/Stock-Market-Prediction-Web-App-using-Machine-Learning-And-Sentiment-Analysis",
    demoLink: "https://www.youtube.com/"
  },
  {
    image: "/images/bookmart.png",
    title: "BookMart",
    description:
      "Online Book Shopping System class project using Ruby on Rails. Made using Ruby on Rails Javascript mysql docker html css bootstrap. It is a web application that allows users to browse through books and purchase them.",
    source: "https://github.com/kaushikjadhav01/BookMart",
    demoLink: "http://bookmart.kajadhav.me/"
  }
];

const Projects = () => {
  const [element, controls] = useScroll();
  return (
    <div className="projects" id="projects">
      <motion.div
        variants={window.innerWidth > 767 ? scrollReveal : null}
        ref={element}
        animate={controls}
        className="container pt-6 pb-6"
      >
        <div className="heading-section">
          <h1>
            <span className="chonburi-font green-text">Projects</span>
          </h1>
        </div>
        <div className="projects-cards">
          <Row className="justify-content-center">
            {myProjects.map((project, index) => {
              return (
                <Col md={4} className="mb-5" key={index + 1}>
                  <Badge className="lmckdncd" pill variant="warning">
                    {project.badge}
                  </Badge>
                  {project.liveweb && (
                    <Badge className="jdnkcjd" pill variant="danger">
                      <a rel="noopener noreferrer"
                        href={project.liveweb}
                        target="_blank"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Youtube
                      </a>
                    </Badge>
                  )}
                  <div className="project-card">
                    <div className="img-section">
                      <Img
                        placeholder="https://p4.wallpaperbetter.com/wallpaper/990/450/548/loading-wallpaper-preview.jpg"
                        src={project.image}
                        error="/images/download.png"
                        alt="React Cool Img"
                      />
                      <div className="imageCardEffect"></div>
                    </div>
                    <div className="project-info">
                      <h5 className="color-white font-weight-bold">
                        {project.title}
                      </h5>
                      <p className="color-white">{project.description}</p>
                      <div className="d-flex justify-content-between mr-4">
                        <a rel="noopener noreferrer"
                          href={project.source}
                          className="project-card-btn"
                          target="_blank"
                        >
                          Source Code
                        </a>
                        <a rel="noopener noreferrer"
                          href={project.demoLink}
                          className="project-card-btn"
                          target="_blank"
                        >
                          Live Demo
                        </a>
                      </div>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
