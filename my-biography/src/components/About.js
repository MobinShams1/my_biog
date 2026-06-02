import bioData from "../data/BioData";

function About() {
  const aboutMe = bioData.about;

  return (
    <div style={{marginTop:"5rem" }}>

        <p style={{textAlign:"center", marginTop:"4rem" ,marginLeft:"2rem", marginRight:"2rem", fontSize:"20px"}}>{aboutMe}</p>
      </div>
  );
}

export default About;
