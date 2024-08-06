import "../assets/Css/about.css";
import { Grid } from "@mui/material";

import Boy from "../assets/img/boy.png";

const About = () => {
  return (
    <div className="card-container">
      <Grid container spacing={0}>
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          lg={6}
          xl={6}
          className="grids-container"
        >
          <div className="about-circle-container">
            <div className="circles circles1">
              <img src={Boy} alt="Image 1" />
            </div>
            <div className="circles circles2">
              <div className="images-div"></div>
            </div>
            <div className="circles circles3 intersections"></div>
          </div>
        </Grid>
        
      </Grid>
    </div>
  );
};

export default About;
