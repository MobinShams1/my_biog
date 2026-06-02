import classes from "./Skills.module.css";
import {
  DiJavascript1,
  DiHtml5,
  DiCss3,
  DiDatabase,
  DiReact,
} from "react-icons/di";
import "./IconAnimations.css";
import bioData from "../data/BioData";

function Skills() {
  const skills = bioData.skills;

  // لیست مهارت‌های اصلی با آیکون
  const mainSkills = [
    { name: "HTML", icon: <DiHtml5 className="icon-bounce" />, color: "#E34F26" },
    { name: "CSS", icon: <DiCss3 className="icon-bounce" />, color: "#1572B6" },
    { name: "JavaScript", icon: <DiJavascript1 className="icon-bounce" />, color: "#F7DF1E" },
    { name: "React", icon: <DiReact className="icon-spin" />, color: "#61DAFB" },
    { name: "Database", icon: <DiDatabase className="icon-bounce" />, color: "#4479A1" },
    
  ];

  return (
    <div className={classes.container}>
      <p className={classes.mySkillsTitle}>مهارت‌های من</p>

      <div className={classes.skillsGrid}>
        {mainSkills.map((skill, index) => (
          <div key={index} className={classes.skillItem}>
            <div className={classes.skillIcon} style={{ color: skill.color }}>
              {skill.icon}
            </div>
            <p className={classes.skillTitle}>{skill.name}</p>
          </div>
        ))}
      </div>

      <div className={classes.allSkillsSection}>
        <p className={classes.allSkillsTitle}>تمام مهارت‌های من :</p>
        <ul className={classes.allSkillsList}>
          {skills.map((skill, index) => (
            <li key={index} className={classes.allSkillsItem}>
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Skills;