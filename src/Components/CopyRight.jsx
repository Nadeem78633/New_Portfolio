import { Typography } from "@mui/material";
import "../assets/Css/copyright.css";


const CopyRight = () => {
const year=new Date().getFullYear()
  
  return (
    <>
      <div className="copyright-container">
        <Typography className="copy">
          
          &copy; {year} <span className="copy-nadeem">Nadeeem</span> . All rights reserved .
        </Typography>
      </div>
    </>
  );
};

export default CopyRight;
