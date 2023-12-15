import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import logo from "./../Resources/MLogo.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#000000",
          color: "#ffffff",
        }}
      >
        <Box>
          <Box sx={{ display: "flex", mt: "5%" }}>
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
            <Typography
              variant="body1"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mt: "4%",
                fontFamily: "monospace",
                fontWeight: 600,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
                ml: "0%",
              }}
            >
              MEASUREUP
            </Typography>
          </Box>
        </Box>
        <Box
          className="links_section"
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            mt: "1%",
          }}
        >
          <Typography
            sx={{
              "&:hover": {
                textDecoration: "underline",
              },
              transition: "text-decoration 0.3s ease",
              mr: "30%",
              whiteSpace: "nowrap", // Add a transition for a smoother effect
            }}
            variant="caption"
          >
            Contact Us
          </Typography>
          <Typography
            sx={{
              "&:hover": {
                textDecoration: "underline",
              },
              transition: "text-decoration 0.3s ease", // Add a transition for a smoother effect
              mr: "30%",
            }}
            variant="caption"
          >
            Team
          </Typography>
          <Typography
            sx={{
              "&:hover": {
                textDecoration: "underline",
              },
              transition: "text-decoration 0.3s ease", // Add a transition for a smoother effect
            }}
            variant="caption"
          >
            Support
          </Typography>
        </Box>
        <Box
          className="social_media_section"
          sx={{
            display: "flex",
            flexDirection: "row",
            mt: "1%",
            justifyContent: "center",
          }}
        >
          <Avatar
            style={{
              backgroundColor: "#1877f2", // Facebook blue
            }}
            sx={{ mr: "10%" }}
          >
            <FacebookIcon />
          </Avatar>
          <Avatar
            style={{
              backgroundColor: "#1da1f2", // Twitter blue
            }}
            sx={{ mr: "10%" }}
          >
            <TwitterIcon />
          </Avatar>
          <Avatar
            style={{
              backgroundColor: "#c13584", // Instagram pink
            }}
            sx={{ mr: "10%" }}
          >
            <InstagramIcon />
          </Avatar>
          <Avatar
            style={{
              backgroundColor: "#0077b5", // LinkedIn blue
            }}
          >
            <LinkedInIcon />
          </Avatar>
        </Box>
        <Box sx={{ mt: "1%", mb: "3%" }}>
          <Typography variant="body2">
            © 2023 Measure Up. All rights reserved.
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
