import classes from "./Skills.module.css";
import {
  DiJavascript1,
  DiHtml5,
  DiCss3,
  DiDatabase,
  DiReact
} from "react-icons/di";
import { SiMicrosoftsqlserver } from "react-icons/si";
import "./IconAnimations.css";
import bioData from "../data/BioData";
function Skills() {
  const skills = bioData.skills;

  return (
    <div>
      <p className={classes.mySkillsTitle}>مهارت های من</p>
      <ul className={classes.ul}>
        <li>
          <p className={classes.SkillsTitle}>HTML</p>
          <DiHtml5 className="icon-bounce" style={{ fontSize: "15rem" }} />
        </li>
        <li>
          <p className={classes.SkillsTitle}>CSS</p>
          <DiCss3 className="icon-bounce" style={{ fontSize: "15rem" }} />
        </li>
        <li>
          <p className={classes.SkillsTitle}>JS</p>
          <DiJavascript1
            className="icon-bounce"
            style={{ fontSize: "15rem" }}
          />
        </li>
        <li>
          <p className={classes.SkillsTitle}>React</p>
          <DiReact className="icon-spin" style={{ fontSize: "15rem" }} />
        </li>
        <li>
          <p className={classes.SkillsTitle}>DataBase</p>
          <DiDatabase className="icon-bounce" style={{ fontSize: "15rem" }} />
        </li>
        <li>
          <p className={classes.SkillsTitle}>SQL Server</p>
          <SiMicrosoftsqlserver
            className="icon-bounce"
            style={{ fontSize: "15rem" }}
          />
        </li>
      </ul>
    </div>
  );
}

export default Skills;
