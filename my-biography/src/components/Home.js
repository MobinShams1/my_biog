import img1 from "../Images-And-Video/images.jpg";

function Home() {
  return (
    <div style={{ 
      textAlign: "center", 
      minHeight: "100vh",
      backgroundImage: "linear-gradient(135deg, #e8f4fd 0%, #f3e8ff 100%)",
      padding: "1rem",
    }}>
      <h1 style={{ fontSize: "clamp(1.5rem, 5vw, 2.5rem)" }}>صفحه اصلی</h1>
      <p style={{ fontSize: "clamp(0.9rem, 4vw, 1.2rem)" }}>
        به سایت بیوگرافی من خوش آمدید
      </p>
      <p style={{ fontSize: "clamp(0.8rem, 3.5vw, 1rem)" }}>
        می‌توانید در لینک درباره من بیشتر با من آشنا شوید
      </p>
      
      <img 
        style={{
          margin: "2rem auto",
          width: "min(90%, 35rem)",   
          height: "auto",              
          borderRadius: "2rem",
          display: "block",
          objectFit: "cover"
        }} 
        src={img1} 
        alt="تصویر بیوگرافی"
      />
    </div>
  );
}

export default Home;