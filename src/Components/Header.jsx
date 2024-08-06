import { NavLink } from "react-router-dom";
import { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
  Container,
} from "@mui/material";
import "../assets/Css/header.css";
import finalMenu from "../assets/img/final_menu.svg";

const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <AppBar position="relative" className="app-bar">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <NavLink to="/" style={{ textDecoration: "none" }}>
              <Typography className="mohd-nadeem" sx={{ flexGrow: 1 }}>
                Mohd <br /> Nadeem
              </Typography>
            </NavLink>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
                justifyContent: "flex-end",
              }}
            >
              <img
                src={finalMenu}
                alt="newMenu"
                onClick={handleOpenNavMenu}
                style={{ width: "50px", height: "50px", color: "red" }}
              />

              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: {
                    xs: "block",
                    md: "none",
                  },
                  "& .MuiPaper-root": {
                    background: "white !important",
                    border: "1px solid white",
                  },
                }}
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <NavLink
                    to="/link"
                    className={({ isActive }) =>
                      isActive ? "project project-active" : "project"
                    }
                  >
                    Projects
                  </NavLink>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      isActive ? "project project-active" : "project"
                    }
                  >
                    About
                  </NavLink>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <a
                    href="https://drive.google.com/file/d/1XjBXYyHDv_79pi-oXTT9zAvUdGsxBp9G/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project"
                  >
                    Resume
                  </a>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <a
                    href="https://www.linkedin.com/in/nadeem4code/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project"
                  >
                    LinkedIn
                  </a>
                </MenuItem>
              </Menu>
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "flex-end",
                gap: "50px",
              }}
              className="navlink-container"
            >
              <NavLink
                to="/link"
                className={({ isActive }) =>
                  isActive ? "project project-active" : "project"
                }
              >
                Projects.
              </NavLink>

              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "project project-active" : "project"
                }
              >
                About.
              </NavLink>
              <a
                href="https://drive.google.com/file/d/1XjBXYyHDv_79pi-oXTT9zAvUdGsxBp9G/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="project"
              >
                Resume.
              </a>
              <a
                href="https://www.linkedin.com/in/nadeem4code/"
                target="_blank"
                rel="noopener noreferrer"
                className="project"
              >
                LinkedIn.
              </a>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Header;
