import { motion } from "framer-motion";
import React from "react";
import { scrollReveal } from "../../animation";
import { useScroll } from "./useScroll";
import CodersRankActivity from "@codersrank/activity";
window.customElements.define("codersrank-activity", CodersRankActivity);
const GitHub = () => {
  const [element, controls] = useScroll();
  return (
    <div id="github-stats" className="skills-section">
      <motion.div
        variants={scrollReveal}
        ref={element}
        animate={controls}
        className="container"
        id="github-stats-container"
      >
        <div className="heading-section">
          <h1>
            <span className="chonburi-font green-text">Github</span>{" "}Stats
          </h1>
        </div>
        <div className="skills-cards justify-content-between align-items-center"  style={{paddingLeft:"15%"}}>
        <img src="https://github-readme-stats.vercel.app/api?username=kaushikjadhav01&show_icons=true&hide_border=false&theme=jolly&count_private=true&include_all_commits=true" height="140px" width="360px" alt="Github Stats" />
        <img src="http://github-readme-streak-stats.herokuapp.com?user=kaushikjadhav01&theme=jolly&date_format=j%20M%5B%20Y%5D" alt="GitHub Streak" height="140px" width="360px"/>
        <img src="https://github-trophies.vercel.app/?username=kaushikjadhav01&theme=discord" width="720px" height="240px" alt="Github Trophies"/><br/>
        <img src="https://github-readme-stats.vercel.app/api/wakatime?username=codemaker2015&layout=compact&theme=blue-green" alt="kaushikjadhav01 wakatime stats" width="278px"/>
        <img src="images/skyline.gif" width="440" alt="Skyline gif"/>
        <img src="https://github-readme-activity-graph.vercel.app/graph?username=kaushikjadhav01&bg_color=ffffff&color=000000&line=04e61b&point=403d3d&area=true&hide_border=true"  alt="kaushikjadhav01 activity graph" width="720px"/>
        <img src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=kaushikjadhav01&theme=monokai" width="720px" alt="Github Profile Summary"/>
        <img src="https://raw.githubusercontent.com/kaushikjadhav01/kaushikjadhav01/output/github-contribution-grid-snake.svg" width="720px" alt="Github Snake"/>
        </div>
      </motion.div>
    </div>
  );
};

export default GitHub;
