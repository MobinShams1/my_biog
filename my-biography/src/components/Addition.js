import bioData from "../data/BioData";

function Addition() {

  const gitHubName = bioData.githubLink;
  const email = bioData.email;
  const phone = bioData.phone;

  return<div style={{marginTop:"2rem", marginLeft:"1rem", marginRight:"1rem"}}>
    <p style={{fontSize:"20px", textAlign:"right" ,fontWeight:"bold" }}>:راه های ارتباطی با من </p>
    
    <p style={{fontSize:"15px", textAlign:"left" ,fontWeight:"bold" }}>email : {email}</p>
    <p style={{fontSize:"15px", textAlign:"left" ,fontWeight:"bold" }}>GitHub link : {gitHubName}</p>
    <p style={{fontSize:"15px", textAlign:"left" ,fontWeight:"bold" }}>PhonNumber :{phone}</p>
  </div>
}

export default Addition;