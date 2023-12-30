import { motion } from "framer-motion";
import React from "react";
import { scrollReveal } from "../../animation";
import { useScroll } from "./useScroll";

const Skills = () => {
  const [element, controls] = useScroll();
  return (
    <div id="skills" className="skills-section">
      <motion.div
        variants={scrollReveal}
        ref={element}
        animate={controls}
        className="container"
        width="50%"
        id = "skills-container"
      >
        <div className="heading-section mb-4">
          <h1>
            <span className="chonburi-font green-text">Skills</span>
          </h1>
        </div>
        <h4><span className="chonburi-font green-text">Programming Languages</span></h4>
        <table className="table-dark mt-2 mb-4" width="100%">
          <tr>
            <td align="center" width="96" className="pt-2">
                <img src="https://skillicons.dev/icons?i=python" alt="icon" width="65" height="65" />
              <br/>Python
            </td>
            <td align="center" width="96" className="pt-2">
                <img src="https://skillicons.dev/icons?i=java" alt="icon" width="65" height="65" />
              <br/>Java
            </td>
            <td align="center" width="96" className="pt-2">
                <img src="https://skillicons.dev/icons?i=js" alt="icon" width="65" height="65" />
              <br/>Javascript
            </td>
            <td align="center" width="96" className="pt-2">
                <img src="https://skillicons.dev/icons?i=mysql" alt="icon" width="65" height="65" />
              <br/>SQL
            </td>
            <td align="center" width="96" className="pt-2">
                <img src="https://skillicons.dev/icons?i=cs" alt="icon" width="65" height="65" />
              <br/>C#
            </td>
            <td align="center" width="96" className="pt-2">
                <img src="https://skillicons.dev/icons?i=ruby" alt="icon" width="65" height="65" />
              <br/>Ruby
            </td>
            </tr>
            <tr>
            <td align="center" width="96" className="pt-2">
                <img src="https://skillicons.dev/icons?i=php" alt="icon" width="65" height="65" />
              <br/>PHP
            </td>
            <td align="center" width="96" className="pt-2">
                <img src="https://skillicons.dev/icons?i=kotlin" alt="icon" width="65" height="65" />
              <br/>Kotlin
            </td>
            <td align="center" width="96" className="pt-2">
                <img src="https://skillicons.dev/icons?i=swift" alt="icon" width="65" height="65" />
              <br/>Swift
            </td>
            <td align="center" width="96" className="pt-2">
                <img src="https://skillicons.dev/icons?i=c" alt="icon" width="65" height="65" />
              <br/>C
            </td>
            <td align="center" width="96" className="pt-2">
                <img src="https://skillicons.dev/icons?i=cpp" alt="icon" width="65" height="65" />
              <br/>C++
            </td>
            <td align="center"  width="96">
                <img src="https://skillicons.dev/icons?i=html" width="48" height="48" alt="HTML" />
              <br/>HTML
            </td>
            </tr>
            <tr>
            <td align="center"  width="96">
                <img src="https://skillicons.dev/icons?i=ts" width="48" height="48" alt="HTML" />
              <br/>Typescript
            </td>
            <td align="center" width="96" className="pt-2">
                <img src="https://skillicons.dev/icons?i=r" width="48" height="48" alt="dart" />
              <br/>R
            </td> 
            <td align="center" width="96" className="pt-2">
                <img src="https://skillicons.dev/icons?i=dart" width="48" height="48" alt="dart" />
              <br/>Dart
            </td>
            <td align="center" width="96" className="pt-2">
              <img src="https://skillicons.dev/icons?i=go" width="48" height="48" alt="dart" />
              <br/>Go
            </td>
            <td align="center" width="96" className="pt-2">
              <img src="https://skillicons.dev/icons?i=scala" width="48" height="48" alt="dart" />
              <br/>Scala
            </td>
            <td align="center" width="96" className="pt-2">
              <img src="https://skillicons.dev/icons?i=lua" width="48" height="48" alt="dart" />
              <br/>Lua
            </td>
          </tr>
        </table>

        <h4><span className="chonburi-font green-text">Front-End Frameworks</span></h4>
        <table className="table-dark mt-2 mb-4" width="100%">
          <tr>
            <td align="center" width="96" className="pt-2">
              <a href="#macropower-tech">
                <img src="https://skillicons.dev/icons?i=react" alt="icon" width="65" height="65" />
              </a>
              <br/>React
            </td>
            <td align="center" width="96" className="pt-2">
                <img src="https://skillicons.dev/icons?i=angular" alt="icon" width="65" height="65" />
              <br/>Angular
            </td>
            <td align="center" width="96" className="pt-2">
                <img src="https://skillicons.dev/icons?i=wordpress" alt="icon" width="65" height="65" />
              <br/>Wordpress
            </td>
            <td align="center" width="96" className="pt-2">
                <img src="https://skillicons.dev/icons?i=vue" alt="icon" width="65" height="65" />
              <br/>Vue.JS
            </td>
            <td align="center" width="96" className="pt-2">
                <img src="https://skillicons.dev/icons?i=graphql" alt="icon" width="65" height="65" />
              <br/>GraphQL
            </td>
            <td align="center" width="96" className="pt-2">
                <img src="https://skillicons.dev/icons?i=threejs" alt="icon" width="65" height="65" />
              <br/>Three.JS
            </td>
            </tr>
            <tr>
            <td align="center" width="96" className="pt-2">
                <img src="https://skillicons.dev/icons?i=redux" alt="icon" width="65" height="65" />
              <br/>Redux
            </td>
            <td align="center" width="96" className="pt-2">
                <img src="https://skillicons.dev/icons?i=bootstrap" alt="icon" width="65" height="65" />
              <br/>Bootstrap
            </td>
            <td align="center" width="96" className="pt-2">
                <img src="https://skillicons.dev/icons?i=css" alt="icon" width="65" height="65" />
              <br/>CSS
            </td>
            <td align="center" width="96" className="pt-2">
                <img src="https://skillicons.dev/icons?i=jquery" alt="icon" width="65" height="65" />
              <br/>Jquery
            </td>
            <td align="center"  width="96">
                <img src="https://skillicons.dev/icons?i=tailwind" width="48" height="48" alt="HTML" />
              <br/>Tailwind
            </td>
            <td align="center"  width="96">
                <img src="https://skillicons.dev/icons?i=sass" width="48" height="48" alt="HTML" />
              <br/>SASS
            </td>
          </tr>
        </table>

        <h4><span className="chonburi-font green-text">Back-End Frameworks</span></h4>
        <table className="table-dark mt-2 mb-4" width="100%">
          <tr>
            <td align="center" width="96" className="pt-2">
              <a href="#macropower-tech">
                <img src="https://skillicons.dev/icons?i=django" alt="icon" width="65" height="65" />
              </a>
              <br/>Django
            </td>
            <td align="center" width="96" className="pt-2">
                <img src="https://skillicons.dev/icons?i=flask" alt="icon" width="65" height="65" />
              <br/>Flask
            </td>
            <td align="center" width="96" className="pt-2">
                <img src="https://skillicons.dev/icons?i=dotnet" alt="icon" width="65" height="65" />
              <br/>.NET
            </td>
            <td align="center" width="96" className="pt-2">
                <img src="https://skillicons.dev/icons?i=spring" alt="icon" width="65" height="65" />
              <br/>Spring
            </td>
            <td align="center" width="96" className="pt-2">
                <img src="https://skillicons.dev/icons?i=rails" alt="icon" width="65" height="65" />
              <br/>Ruby on Rails
            </td>
            <td align="center" width="96" className="pt-2">
                <img src="https://skillicons.dev/icons?i=nodejs" alt="icon" width="65" height="65" />
              <br/>Node.JS
            </td>
            </tr>
            <tr>
            <td align="center" width="96" className="pt-2">
                <img src="https://skillicons.dev/icons?i=express" alt="icon" width="65" height="65" />
              <br/>Express.JS
            </td>
            <td align="center" width="96" className="pt-2">
                <img src="https://skillicons.dev/icons?i=laravel" alt="icon" width="65" height="65" />
              <br/>Laravel
            </td>
            <td align="center" width="96" className="pt-2">
                <img src="https://skillicons.dev/icons?i=nginx" alt="icon" width="65" height="65" />
              <br/>Nginx
            </td>
            <td align="center" width="96" className="pt-2">
                <img src="https://skillicons.dev/icons?i=redis" alt="icon" width="65" height="65" />
              <br/>Redis
            </td>
            <td align="center"  width="96">
                <img src="https://skillicons.dev/icons?i=tensorflow" width="48" height="48" alt="HTML" />
              <br/>TensorFlow
            </td>
            <td align="center"  width="96">
                <img src="https://skillicons.dev/icons?i=pytorch" width="48" height="48" alt="HTML" />
              <br/>PyTorch
            </td>
          </tr>
        </table>

        <h4><span className="chonburi-font green-text">Databases</span></h4>
        <table className="table-dark mt-2 mb-4" width="100%">
          <tr>
            <td align="center" width="96" className="pt-2">
                <img src="https://skillicons.dev/icons?i=mongodb" alt="icon" width="65" height="65" />
              <br/>MongoDB
            </td>
            <td align="center" width="96" className="pt-2">
                <img src="https://skillicons.dev/icons?i=postgres" alt="icon" width="65" height="65" />
              <br/>PostgreSQL
            </td>
            <td align="center" width="96" className="pt-2">
                <img src="https://skillicons.dev/icons?i=mysql" alt="icon" width="65" height="65" />
              <br/>MySQL
            </td>
            <td align="center" width="96" className="pt-2">
                <img src="https://skillicons.dev/icons?i=sqlite" alt="icon" width="65" height="65" />
              <br/>SQLite
            </td>
            <td align="center" width="96" className="pt-2">
                <img src="https://skillicons.dev/icons?i=firebase" alt="icon" width="65" height="65" />
              <br/>Firebase
            </td>
            <td align="center" width="96" className="pt-2">
                <img src="https://upload.wikimedia.org/wikipedia/de/thumb/8/8c/Microsoft_SQL_Server_Logo.svg/1200px-Microsoft_SQL_Server_Logo.svg.png" alt="icon" width="65" height="65" />
              <br/>SQL Server
            </td>
            </tr>
        </table>

        <h4><span className="chonburi-font green-text">Mobile App Development</span></h4>
        <table className="table-dark mt-2 mb-4" width="100%">
          <tr>
            <td align="center" width="96" className="pt-2">
                <img src="https://skillicons.dev/icons?i=androidstudio" alt="icon" width="65" height="65" />
              <br/>Android Studio
            </td>
            <td align="center" width="96" className="pt-2">
                <img src="https://skillicons.dev/icons?i=flutter" alt="icon" width="65" height="65" />
              <br/>Flutter
            </td>
            <td align="center" width="96" className="pt-2">
                <img src="https://skillicons.dev/icons?i=react" alt="icon" width="65" height="65" />
              <br/>React Native
            </td>
            <td align="center" width="96" className="pt-2">
                <img src="https://skillicons.dev/icons?i=dart" alt="icon" width="65" height="65" />
              <br/>Dart
            </td>
            </tr>
        </table>

        <h4><span className="chonburi-font green-text">DevOps</span></h4>
        <table className="table-dark mt-2 mb-4" width="100%">
          <tr>
            <td align="center" width="96" className="pt-2">
                <img src="https://skillicons.dev/icons?i=aws" alt="icon" width="65" height="65" />
              <br/>AWS
            </td>
            <td align="center" width="96" className="pt-2">
                <img src="https://skillicons.dev/icons?i=azure" alt="icon" width="65" height="65" />
              <br/>Azure
            </td>
            <td align="center" width="96" className="pt-2">
                <img src="https://skillicons.dev/icons?i=gcp" alt="icon" width="65" height="65" />
              <br/>GCP
            </td>
            <td align="center" width="96" className="pt-2">
                <img src="https://skillicons.dev/icons?i=docker" alt="icon" width="65" height="65" />
              <br/>Docker
            </td>
            <td align="center" width="96" className="pt-2">
                <img src="https://skillicons.dev/icons?i=kubernetes" alt="icon" width="65" height="65" />
              <br/>Kubernetes
            </td>
            <td align="center" width="96" className="pt-2">
                <img src="https://skillicons.dev/icons?i=jenkins" alt="icon" width="65" height="65" />
              <br/>Jenkins
            </td>
            </tr>
        </table>

        <h4><span className="chonburi-font green-text">Design Tools</span></h4>
        <table className="table-dark mt-2 mb-4" width="100%">
          <tr>
            <td align="center" width="96" className="pt-2">
                <img src="https://skillicons.dev/icons?i=xd" alt="icon" width="65" height="65" />
              <br/>Adobe XD
            </td>
            <td align="center" width="96" className="pt-2">
                <img src="https://skillicons.dev/icons?i=figma" alt="icon" width="65" height="65" />
              <br/>Figma
            </td>
            <td align="center" width="96" className="pt-2">
                <img src="https://skillicons.dev/icons?i=blender" alt="icon" width="65" height="65" />
              <br/>Blender
            </td>
            <td align="center" width="96" className="pt-2">
                <img src="https://skillicons.dev/icons?i=photoshop" alt="icon" width="65" height="65" />
              <br/>Photoshop
            </td>
            </tr>
        </table>

        <h4><span className="chonburi-font green-text">Testing</span></h4>
        <table className="table-dark mt-2 mb-4" width="100%">
          <tr>
            <td align="center" width="96" className="pt-2">
                <img src="https://skillicons.dev/icons?i=jest" alt="icon" width="65" height="65" />
              <br/>Jest
            </td>
            <td align="center" width="96" className="pt-2">
                <img src="https://skillicons.dev/icons?i=selenium" alt="icon" width="65" height="65" />
              <br/>Selenium
            </td>
            <td align="center" width="96" className="pt-2">
                <img src="https://docs.pytest.org/en/7.4.x/_static/pytest_logo_curves.svg" alt="icon" width="65" height="65" />
              <br/>PyTest
            </td>
            <td align="center" width="96" className="pt-2">
                <img src="https://avatars.githubusercontent.com/u/320565?s=200&v=4" alt="icon" width="65" height="65" />
              <br/>Cucumber
            </td>
            </tr>
        </table>

      </motion.div>
    </div>
  );
};

export default Skills;
