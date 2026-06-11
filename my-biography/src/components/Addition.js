import bioData from "../data/BioData";
import classes from "./Addition.module.css";

function Addition() {
  const gitHubName = bioData.githubLink;
  const email = bioData.email;
  const phone = bioData.phone;

  return (
    <div className={classes.container}>
      <p className={classes.title}>:راه‌های ارتباطی با من </p>

      <p className={classes.infoItem}>{email}</p>
      <p className={classes.infoItem}>
         
        <a 
          href={gitHubName} 
          target="_blank" 
          rel="noopener noreferrer"
          className={classes.link}
        >
          {gitHubName}
        </a>
      </p>
      <p className={classes.infoItem}>{phone}</p>
    </div>
  );
}

export default Addition;