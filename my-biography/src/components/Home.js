// src/components/Home.jsx
import img1 from "../Images-And-Video/images.jpg";
import classes from "./Home.module.css";  // اضافه کردن import CSS

function Home() {
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>صفحه اصلی</h1>
      <p className={classes.subtitle}>
        به سایت بیوگرافی من خوش آمدید
      </p>
      <p className={classes.description}>
        می‌توانید در لینک درباره من بیشتر با من آشنا شوید
      </p>
      
      <img 
        className={classes.image}
        src={img1} 
        alt="تصویر بیوگرافی"
      />
    </div>
  );
}

export default Home;