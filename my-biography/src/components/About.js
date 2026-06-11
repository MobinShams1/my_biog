import bioData from "../data/BioData";
import classes from "./About.module.css";

function About() {
  const aboutMe = bioData.about;
  const myProjectLink = [
    "https://mobinshams1.github.io/my_biog",
    "https://mobinshams1.github.io/Event-Project",
  ];

  return (
    <div className={classes.container}>
      <p className={classes.text}>{aboutMe}</p>
      <div className={classes.projects}>
        <p className={classes.title}>My Project Links :</p>
        {myProjectLink.map((link, index) => (
          <a
            key={index}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={classes.link}
          >
            {link}
          </a>
        ))}
      </div>
    </div>
  );
}

export default About;
