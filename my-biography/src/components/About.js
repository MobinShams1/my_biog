import bioData from "../data/BioData";
import classes from "./About.module.css";

function About() {
  const aboutMe = bioData.about;

  return (
    <div className={classes.container}>
      <p className={classes.text}>{aboutMe}</p>
    </div>
  );
}

export default About;