import "../assets/Css/AboutPage/AboutPage.css";
import { CircleIntersection } from "../Components/AboutPage";
import { Skills } from "../Components";

const About = () => {
  return (
    <div className="about-container">
      <CircleIntersection />
      <Skills />
    </div>
  );
};

export default About;
