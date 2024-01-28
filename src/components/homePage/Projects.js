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
    demoLink: "https://www.youtube.com/watch?v=xnq7mBdJAJk"
  },
  {
    image: "/images/daisyui.png",
    title: "DaisyUI",
    description:
      "Contributed to the react components repo of open-source UI library daisyUI. It is a component library for Tailwind CSS. I fixed one broken feature, few package deprecation issues and browser plugins compatibility issues.",
    source: "https://github.com/daisyui/react-daisyui",
    demoLink: "http://react.daisyui.com/"
  },
  {
    image: "/images/bookmart.png",
    title: "BookMart",
    description:
      "Online Book Shopping System class project using Ruby on Rails. Made using Ruby on Rails Javascript mysql docker html css bootstrap. It is a web application that allows users to browse through books and purchase them and also has admin interfaces.",
    source: "https://github.com/kaushikjadhav01/BookMart",
    demoLink: "http://bookmart.kajadhav.me/"
  },
  {
    image: "/images/food.png",
    title: "Online Food Ordering Site",
    description:
      "Online Food Ordering System Website using PHP, SQL, HTML, JavaScript & CSS. Admin can: Create, Retrieve, Update Delete Food items, Create, Retrieve, Update Delete Users, Refund Money, Filter Food items, Update items in cart, Resolve Support Tickets, etc.",
    source: "https://github.com/kaushikjadhav01/Online-Food-Ordering-Web-App",
    demoLink: "http://food.kajadhav.me/"
  },
  {
    image: "/images/covid.png",
    title: "COVID 19 Detector App",
    description:
      "COVID-19 Detection based on Chest X-rays and CT Scans using four Transfer Learning algorithms: VGG16, ResNet50, InceptionV3, Xception. The models were trained for 500 epochs on around 1000 Chest X-rays and around 750 CT Scan images on Google Colab GPU.",
    source: "https://github.com/kaushikjadhav01/COVID-19-Detection-Flask-App-based-on-Chest-X-rays-and-CT-Scans",
    demoLink: "http://coviddetector.kajadhav.me/"
  },
  {
    image: "/images/candon.png",
    title: "Cancer Donation Portal",
    description:
      "Very basic Flask App for Cancer Donation Portal using basic Python, SQLite3, HTML, CSS and Javascript. Users can register and log in to their account.",
    source: "https://github.com/kaushikjadhav01/Cancer-Donation-Portal-Python-Flask-App",
    demoLink: "http://3.23.155.244:8000/"
  },
  {
    image: "/images/chatgpt.png",
    title: "ChatGPT clone using MERN stack",
    description:
      "ChatGPT clone using MongoDB, Express.JS, React.JS, Node.JS. It was developed and integrated with the OpenAI API.",
    source: "https://github.com/kaushikjadhav01/ChatGPT-Clone-MERN",
    demoLink: "https://chatgpt-8z57.onrender.com/login/"
  },
  {
    image: "/images/deep.jpg",
    title: "Facial Emotion, Age & Gender Recognition System",
    description:
      "Computer Vision module for detecting emotion, age and gender of a person in an image, video or real time webcam using Keras and OpenCV.",
    source: "https://github.com/kaushikjadhav01/Deep-Surveillance-Monitor-Facial-Emotion-Age-Gender-Recognition-System",
  },
  {
    image: "/images/xpens.png",
    title: "XpensAuditor",
    description:
      "Java, Python, Firebase Android App to track and share expenses among multiple users with several features like real time SMS and email alerts, interactive charts of expenses, etc.",
    source: "https://github.com/NCSU-Fall-2022-SE-Project-Team-11/XpensAuditor---Group-11"
  },
  {
    image: "/images/rtod.png",
    title: "Real Time Object Detection API",
    description:
      "A Faster R-CNN based Object Detection API that detects all objects in an image, video or live webcam using TensorFlow and OpenCV.",
    source: "https://github.com/kaushikjadhav01/Real-Time-Object-Detection-API-using-TensorFlow",
  },
  {
    image: "/images/plugin.png",
    title: "ChatGPT Currnecy Converter Plugin",
    description: "ChatGPT Currnecy Converter Plugin made using Python, React, Typescript, Nextjs, Postgres, Docker, AWS and Elasticsearch.",
    source: "https://replit.com/@kajadhav/currency-conversion",
    demoLink: "https://gptstore.ai/plugins/currency-conversion--nerrosa-repl-co"
  },
  {
    image: "/images/moviebot.png",
    title: "Movie Recommendation Slack bot",
    description:
      "Movie Recommendation Chatbot provides information about a movie like plot, genre, revenue, budget, imdb rating, imdb links, etc.",
    source: "https://github.com/kaushikjadhav01/Movie-Recommendation-Chatbot"
  },
  {
    image: "/images/breast.png",
    title: "Breast Cancer Prediction",
    description:
      "Breast Cancer Prediction using transfer learning model of VGG16 and techniques like Regularization, Data Augmentation, Cross Validation and Hyperparameter Optimization.",
    source: "https://github.com/kaushikjadhav01/Breast-Cancer-Prediction-ML-Python",
  },
  {
    image: "/images/terrain.png",
    title: "Terrain Identification from Time Series Data",
    description: "A Random Forest Classifier to classify the samples into standing or walking in solid ground, going down the stairs, going up the stairs, walking on grass.",
    source: "https://github.com/kaushikjadhav01/Terrain-Identification-from-Time-Series-Data"
  }
];

const Projects = () => {
  const [element, controls] = useScroll();
  return (
    <div className="projects" id="projects">
      <motion.div
        variants={window.innerWidth > 6000 ? scrollReveal : null}
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
                        {project.demoLink?
                        <a rel="noopener noreferrer"
                          href={project.demoLink}
                          className="project-card-btn"
                          target="_blank"
                        >
                          Live Demo
                        </a>
                        :null}
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
