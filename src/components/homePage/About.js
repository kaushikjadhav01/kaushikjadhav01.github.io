import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import WorkIcon from "@material-ui/icons/Work";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import SkillSvg from "../../images/about-shape.svg";
import { scrollReveal } from "../../animation";
import { useScroll } from "./useScroll";
import { motion } from "framer-motion";

const About = () => {
  const [tab, setTab] = useState("experience");
  const [element, controls] = useScroll();

  return (
    <motion.div id="about" className="about pb-6 pt-6">
      <img className="skills-img" src={SkillSvg} alt="" />

      <motion.div
        variants={window.innerWidth > 767 ? scrollReveal : null}
        ref={element}
        animate={controls}
        className="container"
      >
        <Row className="">
          <Col className="p-0 text-center" md={5} id="devcard">
          <a href="https://app.daily.dev/kaushikjadhav01"><img src="https://api.daily.dev/devcards/895c8eecd3614f3d90e7d6fd32a765a2.png?r=1op" width="400" alt="Kaushik Jadhav's Dev Card"/></a>
          </Col>
          <Col className="" md={7}>
            <div className="about-info">
              <h1 className="pb-4">
                <span className="chonburi-font green-text ">About</span> Me
              </h1>
              <p className="details">
              I am a Full Stack Developer with 6 yrs of engineering experience (4 yrs full time, 2 yrs internships) specializing in Backend, Frontend, Dev-Ops and Cloud. 
              I like doing cool things like exploring recent tools in the software industry, writing technical articles on Medium and participating in coding competitions. 
              I have hands-on experience in developing large scale production level apps and my managers have always appreciated me for things like writing “efficient code”, maintaining code quality and documentation standards and meeting aggressive deadlines without sacrificing the quality of work.
              </p>
              <div className="d-flex align-items-center resume-section ">
                <h6>Resume :</h6>
                <a rel="noopener noreferrer" href="https://drive.google.com/file/d/1YTS3Np3XX-qHHDz00c-TzEkPoWSigb_Z/view?usp=sharing" target="_blank">
                  View
                </a>
              </div>
              <div className="mt-5">
                <Row className="tabs mb-2">
                  <Col
                    className={`
                      ${tab === "experience"
                        ? "active-tab custom-mr-3"
                        : "inactive-tab"
                      } tab`}
                    onClick={() => setTab("experience")}
                  >
                    <WorkIcon />
                    <h5>Work Experiences</h5>
                  </Col>
                  <Col
                    className={`
                      ${tab === "education"
                        ? "active-tab custom-ml-3"
                        : "inactive-tab"
                      } tab`}
                    onClick={() => setTab("education")}
                  >
                    <LocalLibraryIcon />
                    <h5>Educations</h5>
                  </Col>
                </Row>
                <br/>
                <div className="about-sub-data">
                  {tab === "experience" ? (
                    <div className="work-experiences">
                      <h5><b>North Carolina State University</b>, Raleigh, NC, USA</h5>
                      <i>1. PHP Web Programmer</i><span class="workex-dates">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;May 2024 - Present</span><br/>
                      <i>2. Software Developer Intern</i><span class="workex-dates">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;November 2022 - May 2024</span><br/>
                      <div className="mt-2">
                        <img alt="Python" src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white"></img>{" "}
                        <img alt="Django" src="https://img.shields.io/badge/Django-20232A?style=for-the-badge&logo=django&logoColor=white"></img>{" "}
                        <img alt="ReactJS" src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"></img>{" "}
                        <img alt="Java" src="https://img.shields.io/badge/Java-5BA8C9?style=for-the-badge&logo=java&logoColor=white"></img>{" "}
                        <img alt="PHP" src="https://img.shields.io/badge/Php-7986B8?style=for-the-badge&logo=php&logoColor=white"></img>{" "}
                        <img alt="Laravel" src="https://img.shields.io/badge/Laravel-F13B2E?style=for-the-badge&logo=laravel&logoColor=white"></img>{" "}
                        <img alt="C#" src="https://img.shields.io/badge/C%23-035375?style=for-the-badge&logo=C%20sharp&logoColor=white"></img>{" "}
                        <img alt="SQL" src="https://img.shields.io/badge/sql-62B962?style=for-the-badge&logo=mysql&logoColor=white"></img>{" "}
                        <img alt="Javascript" src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"></img>{" "}
                        <img alt="Firebase" src="https://img.shields.io/badge/Firebase-ffaa00?style=for-the-badge&logo=Firebase&logoColor=white"></img>{" "}
                        <img alt="Google Cloud Platform" src="https://img.shields.io/badge/GCP-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white"></img>{" "}
                        <img alt="Kotlin" src="https://img.shields.io/badge/Kotlin-851773?style=for-the-badge&logo=kotlin&logoColor=white"></img>{" "}
                        <img alt="Swift" src="https://img.shields.io/badge/Swift-82D173?style=for-the-badge&logo=swift&logoColor=white"></img>{" "}
                        <img alt="Kubernetes" src="https://img.shields.io/badge/Kubernetes-0066cc?style=for-the-badge&logo=kubernetes&logoColor=white"></img>{" "}
                        <img alt="Oracle" src="https://img.shields.io/badge/Oracle-990000?style=for-the-badge&logo=oracle&logoColor=white"></img>{" "}
                      </div>
                      <br/>
                      <h5><b>Microsoft Corporation</b>, Charlotte, NC, USA</h5>
                      <i>Software Engineer Intern</i><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;May 2023 - August 2023</span><br/>
                      <div className="mt-2">
                        <img alt="C#" src="https://img.shields.io/badge/C%23-035375?style=for-the-badge&logo=C%20sharp&logoColor=white"></img>{" "}
                        <img alt=".NET" src="https://img.shields.io/badge/.NET-851773?style=for-the-badge&logo=.NET&logoColor=white"></img>{" "}
                        <img alt="ChatGPT" src="https://img.shields.io/badge/ChatGPT-5BA8C9?style=for-the-badge&logo=openai&logoColor=white"></img>{" "}
                        <img alt="Azure" src="https://img.shields.io/badge/Azure-0089D6?style=for-the-badge&logo=microsoft-azure&logoColor=white"></img>{" "}
                        <img alt="SQL" src="https://img.shields.io/badge/sql-62B962?style=for-the-badge&logo=mysql&logoColor=white"></img>{" "}
                        <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-323330?style=for-the-badge&logo=typescript&logoColor=F7DF1E"></img>{" "}
                        <img alt="Angular" src="https://img.shields.io/badge/Angular-593D88?style=for-the-badge&logo=angular&logoColor=white"></img>{" "}
                        <img alt="Bicep" src="https://img.shields.io/badge/Bicep-4285F4?style=for-the-badge&logo=bicep&logoColor=white"></img>{" "}
                        <img alt="Bot Framework Composer" src="https://img.shields.io/badge/Bot_FrameWork_Composer-5BA8C9?style=for-the-badge&logo=ebox&logoColor=white"></img>{" "}
                        <img alt="Power Automate" src="https://img.shields.io/badge/Power_Automate-0089D6?style=for-the-badge&logo=powerautomate&logoColor=white"></img>{" "}
                      </div>
                      <br/>
                      <h5><b>Browserstack</b>, Mumbai, MH, India</h5>
                      <i>Software Engineer</i><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;April 2021 - July 2022</span><br/>
                      <div className="mt-2">
                        <img alt="Rails" src="https://img.shields.io/badge/Ruby_on_Rails-A10E3B?style=for-the-badge&logo=rubyonrails&logoColor=white"></img>{" "}
                        <img alt="Ruby" src="https://img.shields.io/badge/Ruby-A10E3B?style=for-the-badge&logo=ruby&logoColor=white"></img>{" "}
                        <img alt="Python" src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white"></img>{" "}
                        <img alt="ReactJS" src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"></img>{" "}
                        <img alt="Java" src="https://img.shields.io/badge/Java-5BA8C9?style=for-the-badge&logo=java&logoColor=white"></img>{" "}
                        <img alt="SpringMVC" src="https://img.shields.io/badge/Spring-82D173?style=for-the-badge&logo=spring&logoColor=white"></img>{" "}
                        <img alt="Django" src="https://img.shields.io/badge/Django-20232A?style=for-the-badge&logo=django&logoColor=white"></img>{" "}
                        <img alt="SQL" src="https://img.shields.io/badge/MySQL-62B962?style=for-the-badge&logo=mysql&logoColor=white"></img>{" "}
                        <img alt="Javascript" src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"></img>{" "}
                        <img alt="AWS" src="https://img.shields.io/badge/AWS-EC7211?style=for-the-badge&logo=amazon-aws&logoColor=white"></img>{" "}
                        <img alt="Jenkins" src="https://img.shields.io/badge/Jenkins-cc6600?style=for-the-badge&logo=jenkins&logoColor=white"></img>{" "}
                        <img alt="PHP" src="https://img.shields.io/badge/Php-7986B8?style=for-the-badge&logo=php&logoColor=white"></img>{" "}
                        <img alt="Laravel" src="https://img.shields.io/badge/Laravel-F13B2E?style=for-the-badge&logo=laravel&logoColor=white"></img>{" "}
                        <img alt="Kubernetes" src="https://img.shields.io/badge/Kubernetes-0066cc?style=for-the-badge&logo=kubernetes&logoColor=white"></img>{" "}
                      </div>
                      <br/>
                      <h5><b>Ajackus</b>, Mumbai, MH, India</h5>
                      <i>Python Django Developer</i><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;August 2020 - March 2021</span><br/>
                      <div className="mt-2">
                        <img alt="Python" src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white"></img>{" "}
                        <img alt="ReactJS" src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"></img>{" "}
                        <img alt="Django" src="https://img.shields.io/badge/Django-20232A?style=for-the-badge&logo=django&logoColor=white"></img>{" "}
                        <img alt="PostgreSQL" src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white"></img>{" "}
                        <img alt="Javascript" src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"></img>{" "}
                        <img alt="AWS" src="https://img.shields.io/badge/AWS-EC7211?style=for-the-badge&logo=amazon-aws&logoColor=white"></img>{" "}
                        <img alt="NodeJS" src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"></img>{" "}
                        <img alt="Jenkins" src="https://img.shields.io/badge/Jenkins-cc6600?style=for-the-badge&logo=jenkins&logoColor=white"></img>{" "}
                        <img alt="Docker" src="https://img.shields.io/badge/Docker-006699?style=for-the-badge&logo=docker&logoColor=white"></img>{" "}
                        <img alt="Gunicorn" src="https://img.shields.io/badge/Gunicorn-ff3399?style=for-the-badge&logo=graphql&logoColor=white"></img>{" "}
                        <img alt="Nginx" src="https://img.shields.io/badge/Nginx-009900?style=for-the-badge&logo=nginx&logoColor=white"></img>{" "}
                        <img alt="Ansible" src="https://img.shields.io/badge/Ansible-151515?style=for-the-badge&logo=ansible&logoColor=white"></img>{" "}
                        <img alt="Terraform" src="https://img.shields.io/badge/Terraform-844FBA?style=for-the-badge&logo=terraform&logoColor=white"></img>{" "}
                      </div>
                      <br/>
                      <h5><b>Gyanberry</b>, Mumbai, MH, India</h5>
                      <i>Web Developer Intern</i><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;August 2019 - October 2019</span><br/>
                      <div className="mt-2">
                        <img alt="Wordpress" src="https://img.shields.io/badge/Wordpress-000000?style=for-the-badge&logo=wordpress&logoColor=FFFFFF"></img>{" "}
                        <img alt="Bootstrap" src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white"></img>{" "}
                        <img alt="SQL" src="https://img.shields.io/badge/SQL-62B962?style=for-the-badge&logo=mysql&logoColor=white"></img>{" "}
                        <img alt="Javascript" src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"></img>{" "}
                        <img alt="HTML" src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"></img>{" "}
                        <img alt="CSS" src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"></img>{" "}
                        <img alt="PHP" src="https://img.shields.io/badge/Php-7986B8?style=for-the-badge&logo=php&logoColor=white"></img>{" "}
                      </div>
                      <br/>
                      <h5><b>Veda Labs</b>, Mumbai, MH, India</h5>
                      <i>Machine Learning Engineer Intern</i><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;January 2019 - June 2019</span><br/>
                      <div className="mt-2">
                        <img alt="Python" src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white"></img>{" "}
                        <img alt="Angular" src="https://img.shields.io/badge/Angular-593D88?style=for-the-badge&logo=angular&logoColor=white"></img>{" "}
                        <img alt="NodeJS" src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"></img>{" "}
                        <img alt="Bootstrap" src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white"></img>{" "}
                        <img alt="SQL" src="https://img.shields.io/badge/SQL-62B962?style=for-the-badge&logo=mysql&logoColor=white"></img>{" "}
                        <img alt="Javascript" src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"></img>{" "}
                        <img alt="HTML" src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"></img>{" "}
                        <img alt="CSS" src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"></img>{" "}
                      </div>
                      <br/>
                      <h5><b>Neuron Inc</b>, Mumbai, MH, India</h5>
                      <i>Data Analyst Intern</i><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;November 2018 - June 2018</span><br/>
                      <div className="mt-2">
                        <img alt="Rails" src="https://img.shields.io/badge/Ruby_on_Rails-A10E3B?style=for-the-badge&logo=rubyonrails&logoColor=white"></img>{" "}
                        <img alt="Ruby" src="https://img.shields.io/badge/Ruby-A10E3B?style=for-the-badge&logo=ruby&logoColor=white"></img>{" "}
                        <img alt="Python" src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white"></img>{" "}
                        <img alt="ReactJS" src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"></img>{" "}
                        <img alt="Java" src="https://img.shields.io/badge/Java-5BA8C9?style=for-the-badge&logo=java&logoColor=white"></img>{" "}
                        <img alt="SpringMVC" src="https://img.shields.io/badge/Spring-82D173?style=for-the-badge&logo=spring&logoColor=white"></img>{" "}
                        <img alt="Django" src="https://img.shields.io/badge/Django-20232A?style=for-the-badge&logo=django&logoColor=white"></img>{" "}
                        <img alt="SQL" src="https://img.shields.io/badge/MySQL-62B962?style=for-the-badge&logo=mysql&logoColor=white"></img>{" "}
                        <img alt="Javascript" src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"></img>{" "}
                        <img alt="AWS" src="https://img.shields.io/badge/AWS-EC7211?style=for-the-badge&logo=amazon-aws&logoColor=white"></img>{" "}
                        <img alt="Jenkins" src="https://img.shields.io/badge/Jenkins-cc6600?style=for-the-badge&logo=jenkins&logoColor=white"></img>{" "}
                        <img alt="PHP" src="https://img.shields.io/badge/Php-7986B8?style=for-the-badge&logo=php&logoColor=white"></img>{" "}
                        <img alt="Laravel" src="https://img.shields.io/badge/Laravel-F13B2E?style=for-the-badge&logo=laravel&logoColor=white"></img>{" "}
                        <img alt="Kubernetes" src="https://img.shields.io/badge/Kubernetes-0066cc?style=for-the-badge&logo=kubernetes&logoColor=white"></img>{" "}
                      </div>
                    </div>
                  ) : null}
                  {tab === "education" ? (
                    <div className="education">
                      <div>
                        <h5><b>North Carolina State University, NC, USA</b></h5>
                        <p className="text-justify">
                          <b>Master of Computer Science</b><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;August 2022 - May 2024</span><br/>
                          <a href="https://kajadhav.me">
                            <img alt="Portfolio" src="https://img.shields.io/badge/CGPA-3.8/4.0-success?color=success&logo=readme" width="20%"></img>
                          </a>
                          <br/>
                            Courses: Algorithms, Software Engineering, Object Oriented Development, Neural Networks, Network Security, HCI.
                        </p>
                      </div>
                      <div className="mt-4">
                        <h5><b>University of Mumbai, Mumbai, MH, India</b></h5>
                        <p className="text-justify">
                            <b>Bachelor of Engineering (Information Technology)</b><span>&nbsp;&nbsp;August 2016 - July 2020</span><br/>
                            <a href="https://kajadhav.me">
                              <img alt="Portfolio" src="https://img.shields.io/badge/CGPA-9.07/10.0_or_3.8/4.0-success?color=success&logo=readme" width="32%"></img>
                            </a>
                            <br/>
                            Courses: Computer Networks, Big Data Analytics, Data Structures, Operating Systems, Database Management..
                        </p>
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </motion.div>
    </motion.div>
  );
};

export default About;
