import { Card, Typography, Grid } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import "../assets/Css/skills.css";
import SocialMedia from "./SocialMedia";
import CopyRight from "./CopyRight";

const Skills = () => {
  const data = [
    { id: 1, skill: "React Js." },
    { id: 2, skill: "Redux " },
    { id: 3, skill: "Javascript" },
    { id: 4, skill: "Html" },
    { id: 5, skill: "Css" },
    { id: 6, skill: "Node JS." },
  ];
  return (
    <div className="skill-container">
      <Typography className="skill">Skills .</Typography>
      <Grid container spacing={2} className="containers">
        {data.map((skill) => (
          <Grid key={skill.id} item xs={6} sm={4} md={4} lg={2} xl={2}>
            <Card className="skill-card">
              <CircleIcon className="circle-icon" />
              <div className="skill-data">
                <Typography className="data-typography">
                  {skill.skill}
                </Typography>
              </div>
            </Card>
          </Grid>
        ))}
      </Grid>
      <SocialMedia />
      <CopyRight />
    </div>
  );
};

export default Skills;
