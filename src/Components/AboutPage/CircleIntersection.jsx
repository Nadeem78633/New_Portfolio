import "../../assets/Css/AboutPage/circleIntersecton.css";
import TypingBro from "../../assets/img/AboutPage/Typing-bro.svg";
import Programming from "../../assets/img/AboutPage/Programming-amico.svg";
import ReactLogo from "../../assets/img/AboutPage/reactjs-icon.svg";
import { Grid, Typography } from "@mui/material";
const CircleIntersection = () => {
  return (
    <Grid container spacing={0}>
      <Grid
        item
        xs={12}
        sm={6}
        md={6}
        lg={6}
        xl={6}
        className="full-intro-container"
      >
        <Typography className="full-intro">
          <span className="namaste">Namaste!</span>
          <br />
          My name is <span className="react-js">Mohd Nadeem</span>, and I am a
          skilled <span className="react-js">React.js</span> developer with a passion for creating dynamic and
          engaging web applications. I hold a <span className="react-js">Bachelor's degree in Computer
          Science from Abdul Kalam University </span>, where I developed a strong
          foundation in computer science and web development. Over the past six
          months, I have gained practical experience in frontend web
          development, specializing in React.js.My skills include
          developing single-page applications, <span className="react-js">optimizing performance</span>, and
          creating reusable components that streamline the development process.
          I am dedicated to continuous learning and staying updated with the
          latest advancements in web technologies.
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={6} xl={6} className="grid-container">
        <div className="circle-container">
          <div className="circle circle1">
            <img src={ReactLogo} alt="Image 1" />
          </div>
          <div className="circle circle2">
            <div className="image-div">
              <img src={Programming} alt="Image 2" />
            </div>
          </div>
          <div className="circle circle3 intersection">
            <img src={TypingBro} alt="Image 3" />
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default CircleIntersection;
