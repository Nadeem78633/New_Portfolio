import "../assets/Css/project.css";
import { Typography, Grid, Card, CardMedia, CardContent } from "@mui/material";
import quizApp from "../assets/img/Projects/quizApp.png";
import ecommerce from "../assets/img/Projects/e-commerce.png";
import weatherApp from "../assets/img/Projects/weatherApp.png";
import mosque from "../assets/img/Projects/mosque.png";
import SocialMedia from "./SocialMedia";
import CopyRight from "./CopyRight";
const Projects = () => {
  const projects = [
    {
      id: 1,
      project: "Weather App",
      img: weatherApp,
      link: "https://prepfully.vercel.app/",
      description:
        "The Weather App is a modern, user-friendly application designed to keep users updated with the latest weather conditions. Developed with a focus on accuracy and simplicity, this app is a reliable tool for daily and weekly weather forecasts.",
    },
    {
      id: 2,
      project: "Quiz App",
      img: quizApp,
      link: "https://agent-insights-rho.vercel.app/",
      description:
        "The Quiz App is an interactive and educational application designed to provide users with a fun way to test their knowledge on various subjects. The app is based on a question-and-answer format, where users can select a category and answer questions to score points and track their progress.",
    },
    {
      id: 3,
      project: "Mosque Webste",
      img: mosque,
      link: "https://jama-masjid.vercel.app/",
      description: `The Mosque Website is a comprehensive online platform designed to serve the Muslim community by providing essential services and information related to mosques. It aims to enhance the user's spiritual journey by offering convenient access to prayer times, mosque locations, events, and religious content, all through a user-friendly web interface.`,
    },
    {
      id: 4,
      project: "E-Commerce Website",
      img: ecommerce,
      link: "https://proshop-66nv.onrender.com/",
      description:
        "Explore our extensive range of products, e.g., electronics, fashion, home essentials curated to meet diverse tastes and needs. With new arrivals and bestsellers updated regularly, you’re always in for something fresh and exciting.",
    },
  ];
  return (
    <>
      <div className="container">
        <Typography className="projects">Projects</Typography>
        <Grid container spacing={2}>
          {projects.map((project) => (
            <Grid key={project.id} item xs={12} sm={12} md={6} lg={6} xl={6}>
              <a href={project.link} className="project-link">
                <Card className="project-card" sx={{ minHeight: 345 }}>
                  <CardMedia
                    sx={{ objectFit: "fill", borderRadius: "10px" }}
                    component="img"
                    height="345"
                    image={project.img}
                    alt={project.img}
                  />
                  <CardContent>
                    <div className="project-data">
                      <Typography className="data-typography">
                        {project.project}
                      </Typography>
                    </div>
                    <Typography className="project-description">
                      {project.description.length > 200
                        ? `${project.description.slice(0, 200)} ...`
                        : project.description}
                    </Typography>
                  </CardContent>
                </Card>
              </a>
            </Grid>
          ))}
        </Grid>
      </div>
      <SocialMedia />
      <CopyRight />
    </>
  );
};

export default Projects;
