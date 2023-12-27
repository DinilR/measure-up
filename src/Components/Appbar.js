import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import logo from "./../Resources/MLogo.png";
import "./styles.css";
import { Link } from "react-scroll";

const pages = ["Contact Us", "Team", "Support"];
// const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Appbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  //   const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  //   const handleOpenUserMenu = (event) => {
  //     setAnchorElUser(event.currentTarget);
  //   };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  //   const handleCloseUserMenu = () => {
  //     setAnchorElUser(null);
  //   };
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#000000" }} id="appbar">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
          {/* <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <img
              src={logo}
              alt="Logo"
              className="logo_front"
              style={{
                width: "40px",
                height: "40px",
                marginRight: "10px",
              }}
            />
          </Box> */}

          <Typography
            variant="h4"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "HelveticaWorld",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
              ml: "10px",
            }}
          >
            MeasureUP
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
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
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem>
                <Typography textAlign="center">Contact Us</Typography>
              </MenuItem>
              <MenuItem>
                <Typography textAlign="center">Team</Typography>
              </MenuItem>
              <MenuItem>
                <Typography textAlign="center">Support</Typography>
              </MenuItem>
              {/* {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))} */}
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} /> */}
          {/* <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <img
              src={logo}
              alt="Logo"
              className="logo_middle"
              style={{
                width: "40px",
                height: "40px",
                marginRight: "10px",
              }}
            />
          </Box> */}

          <Typography
            variant="h4"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "HelveticaWorld",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
              ml: "10px",
            }}
          >
            MeasureUP
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
            }}
          >
            {/* <Button
              variant="outlined"
              color="success"
              sx={{
                my: 2,
                color: "white",
                display: "block",
                justifyContent: "flex-end",
                margin: "0 16px",
              }}
              onClick={() => scrollToSection("support")}
            >
              Contact Us
            </Button> */}
            <Button
              variant="outlined"
              color="success"
              sx={{
                my: 2,
                color: "white",
                display: "block",
                justifyContent: "flex-end",
                margin: "0 16px",
              }}
              onClick={() => scrollToSection("team")}
            >
              Team
            </Button>
            <Button
              variant="outlined"
              color="success"
              sx={{
                my: 2,
                color: "white",
                display: "block",
                justifyContent: "flex-end",
                margin: "0 16px",
              }}
              onClick={() => scrollToSection("support")}
            >
              Support
            </Button>
            {/* {pages.map((page) => (
              <Button 
                key={page}
                onClick={handleCloseNavMenu}
                variant="outlined"
                color="success"
                sx={{ my: 2, color: "white", display: "block", justifyContent:"flex-end", margin: '0 16px' }}
              >
                {page}
              </Button>
            ))} */}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Appbar;
