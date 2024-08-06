// SocialMedia.js
import { useEffect } from "react";
import { Typography } from "@mui/material";
import "../assets/Css/socialMedia.css";
import Divider from "@mui/material/Divider";

const SocialMedia = () => {
  const links = [
    {
      id: 1,
      title: "Github",
      link: "temp",
      url: "https://github.com/Nadeem78633",
    },
    {
      id: 2,
      title: "LinkedIn",
      link: "temp",
      url: "https://www.linkedin.com/in/nadeem4code/",
    },
  ];

  const setDividerWidth = (linkId) => {
    const linkText = document.getElementById(`link-${linkId}`);
    const divider = document.getElementById(`divider-${linkId}`);
    if (linkText && divider) {
      const textWidth = linkText.getBoundingClientRect().width;
      divider.style.width = `${textWidth}px`;
    }
  };

  useEffect(() => {
    links.forEach((link) => setDividerWidth(link.id));
  }, []); 

  return (
    <div className="margin-bottom">
      <div className="social-media-container">
        <Typography className="social-media">Let's Connect :)</Typography>
        <div className="social-links">
          {links.map((link) => (
            <a key={link.id} href={link.url} className="project-link">
              <div className="social-link">
                <Typography
                  id={`link-${link.id}`}
                  className="link-title"
                  style={{ marginBottom: "5px" }}
                >
                  {link.title}
                </Typography>
                <Divider id={`divider-${link.id}`} className="social-divider" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
