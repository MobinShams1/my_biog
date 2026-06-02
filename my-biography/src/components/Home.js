import img1 from "../Images-And-Video/images.jpg";

function Home() {
  return (
    <div style={{ 
      textAlign: "center", 
      minHeight: "100vh",  // به جای height:auto
      backgroundImage: "linear-gradient(135deg, #e8f4fd 0%, #f3e8ff 100%)",  // درست
      padding: "2rem",
      borderRadius:"2rem"
    }}>
      <h1>صفحه اصلی</h1>
      <p>به سایت بیوگرافی من خوش آمدید</p>
      <p>میتونید در لینک درباره من بیشتر با من آشنا بشید </p>
      
      <img style={{margin:"5rem" ,width:"35rem", height:"25rem", borderRadius:"2rem"}} src={img1}/>
    </div>
  );
}

export default Home;