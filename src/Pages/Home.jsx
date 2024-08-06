import "../assets/Css/home.css";
import {
  About,
  Introduction,
  Projects,
 
} from "../Components";
import { Grid } from "@mui/material";

const Home = () => {
  return (
    <div>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
          <Introduction />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
          <About />
        </Grid>
      </Grid>

      <Projects />
     
    </div>
  );
};

export default Home;
