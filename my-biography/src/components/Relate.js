import About from "./About";
import Skills from "./Skills";
import Addition from "./Addition";
import classes from "./Relate.module.css";

function Relate() {
  return (
    <div className={classes.three_column}>
      <div className={classes.culomn1}>
        <About />
      </div>
      <div className={classes.column2}>
        <Skills  />
      </div>
      <div className={classes.culomn1}>
        <Addition />
      </div>
    </div>
  );
}

export default Relate;
