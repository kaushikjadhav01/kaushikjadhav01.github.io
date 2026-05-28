import React from "react";
import { Col, Row } from "react-bootstrap";
import { pageAnimation, titleAnim } from "../../animation";
import { useScroll } from "./useScroll";
import { motion } from "framer-motion";
import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEye';

// const TransformText = () => {
//     return "</ Changing the world one commit at a Time >"
// }

const Home = ({countData}) => {
  const [element, controls] = useScroll();
  return (
    <div id="home" className="fix  ">
      <div className="bg-image">
      
        <motion.div
          variants={pageAnimation}
          ref={element}
          animate={controls}
          className="container home-page-intro "
        >
          <Row className="home-row">
            <Col md={8}>
              <motion.div className="intro-section">
                <motion.h6 variants={titleAnim} className="mb-2">
                <img
                  placeholder="/images/companies.gif"
                  src="/images/companies.gif"
                  alt="companies Gif"
                  width="45%"
                  max-width="45%"
                  id="companies"
                />
                {/* <p className="mb-3" style={{color:"white"}}>{" Portfolio Visits "}<RemoveRedEyeIcon/>{" "}{countData}</p> */}
                <p align="left">
                  <a href="https://github.com/kaushikjadhav01/kaushikjadhav01">
                    <img src="https://komarev.com/ghpvc/?username=kaushikjadhav01&color=red" alt="profile views" />{" "}
                  </a>
                  <a href="https://stackoverflow.com/users/21890981">
                    <img alt="Stack Exchange reputation" src="https://img.shields.io/stackexchange/stackoverflow/r/21890981?color=orange&label=reputation&logo=stackoverflow"/>{" "}
                  </a>
                  <a href="https://github.com/kaushikjadhav01?tab=followers">
                    <img alt="GitHub followers" src="https://img.shields.io/github/followers/kaushikjadhav01?color=yellow&logo=github"/>{" "}
                  </a>
                  <a href="https://medium.com/@kaushikjadhav01">
                    <img alt="Medium" src="https://img.shields.io/badge/medium-75+-green?color=green&logo=medium"/>{" "}
                  </a>
                  <a href="https://www.linkedin.com/in/kajadhav">
                    <img alt="Linkedin followers" src="https://img.shields.io/badge/followers-1.1K-blue?color=blue&logo=linkedin"/>{" "}
                  </a>
                </p>
                </motion.h6>
                <motion.h1 variants={titleAnim} className="mb-4">
                  Hi, I'm <span className="chonburi-font green-text">Kaushik</span> {" "} Jadhav
                </motion.h1>
                <motion.h3 variants={titleAnim} className="mb-4">
                PHP Web Programmer @ {" "} <span className="chonburi-font green-text">North Carolina State University</span>
                <br/>MS CS @ {" "} <span className="chonburi-font green-text">North Carolina State University</span>
                <br/>Ex-<span className="chonburi-font green-text">Microsoft</span>
                <br/>Ex-<span className="chonburi-font green-text">Browserstack</span>
                </motion.h3>
              </motion.div>
            </Col>
            <Col md={4}>
            <img
              placeholder="/images/avatar.gif"
              src="/images/avatar.gif"
              alt="Avatar Gif"
              width="135%"
              max-width="135%"
              id="avatar"
            />
            </Col>
          </Row>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
