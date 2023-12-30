import { motion } from "framer-motion";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { scrollReveal } from "../../animation";
import { useScroll } from "./useScroll";


const Contact = () => {
  const [element, controls] = useScroll();
  return (
    <div className="contact-section-bg" id="contact">
      <motion.div
        variants={scrollReveal}
        ref={element}
        animate={controls}
        className="container pt-6 pb-6 "
      >
        <Row className="justify-content-between">
          <Col md={6}>
            <h1>
              <span className="chonburi-font green-text">Get</span> in Touch
            </h1>
            <h6 className="mb-4">
              Got a cool project? Wanna Hire Me?<br/>Feel free to contact!
            </h6>
            <h5 className="mb-4">
              <span className="chonburi-font green-text">Phone No:</span> +1 984 683 2003
            </h5>
            <h5 className="mb-4">
              <span className="chonburi-font green-text">Email:</span>{" "}
              kajadhav@ncsu.edu
            </h5>
          </Col>
        </Row>
      </motion.div>
    </div>
  );
};

export default Contact;
