// import { Button } from "@material-ui/core";
import { motion } from "framer-motion";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { scrollReveal } from "../../animation";
import { useScroll } from "./useScroll";
import Img from 'react-cool-img';

const myProjects = [
  {
    image: "images/blog1.jpg",
    title: "COVID-19 DETECTOR APP WITH X-RAYS & CT SCANS",
    dLink:"MACHINE LEARNING & AI",
    demoLink: "https://towardsdatascience.com/covid-19-detector-flask-app-based-on-chest-x-rays-and-ct-scans-using-deep-learning-a0db89e1ed2a/",
  },
  {
    image: "images/blog3.jpg",
    title: "OBJECT DETECTION VIA SMARTPHONE CAMERA",
    dLink:"COMPUTER VISION & AI",
    demoLink: "https://medium.com/swlh/object-detection-via-smartphone-camera-using-faster-r-cnn-c910471b0a53/",
  },
  {
    image: "images/blog2.jpg",
    title: "LIVE VIDEO SKETCHING THROUGH WEBCAM USING COMPUTER VISION",
    dLink:"COMPUTER VISION & AI",
    demoLink: "https://towardsdatascience.com/live-video-sketching-through-webcam-using-computer-vision-30beed29f33e/",
  }
];

const SocialProfiles = () => {
  const [element, controls] = useScroll();
  return (
    <div className="projects1" id="blogs">
      <motion.div
        variants={window.innerWidth > 767 ? scrollReveal : null}
        ref={element}
        animate={controls}
        className="container pt-6 pb-6"
      >
        <div className="heading-section">
          <h1>
            <span className="chonburi-font green-text">Blogs</span>
          </h1>
        </div>
        <div className="projects-cards">
          <Row className="justify-content-center">
            {myProjects.map((project,index) => {
              return (
                <Col md={4} className="mb-5" key={index+1}>
                  <div className="project-card1">
                    <div className="img-section">
                    <Img
                      placeholder="/images/Loading.mp4"
                      src={project.image}
                       error="/images/download.png"
                       alt="React Cool Img"
                       className='fixImageDynamic'
                      />
                      <div className="imageCardEffect"></div>
                    </div>
                    <div className="project-info1">
                      <h5 className="color-white font-weight-bold">
                        {project.title}
                      </h5>
                      <p className="color-white">{project.dLink}</p>
                     {project.demoLink && <div className="d-flex justify-content-between mr-4">
                        <a rel="noopener noreferrer"
                          href={project.demoLink}
                          className="project-card-btn"
                          target="_blank"
                        >
                          Read
                        </a>
                      </div>}
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

export default SocialProfiles;
