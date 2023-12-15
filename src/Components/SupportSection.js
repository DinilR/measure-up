import { Box, Button, TextField, Typography, styled } from "@mui/material";
import React from "react";
import background from "./../Resources/background_support_2.png";

const SupportSection = () => {
  const PictureSection = styled(Box)(({ theme }) => ({
    
    [theme.breakpoints.down("md")]: {
      display:"none"
    },
  }));

  const ContentSection = styled(Box)(({ theme }) => ({
    
    [theme.breakpoints.down("md")]: {
        marginLeft:"30%",
        marginBottom:"10%"
    },
  }));
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "row", background:"#E6FAE6" }}>
        <ContentSection sx={{ width: "50%", ml: "3%",mt:"10%" }}>
          <Typography variant="h5" sx={{ fontWeight: 800 }} gutterBottom>
            Intrested in trying Measure Up?
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: 300 }} gutterBottom>
            We are excited for you to join our platform.
          </Typography>
          <Box className="form_section">
            <Box>
              <Typography
                variant="body1"
                display="block"
                sx={{ ml: "1%", fontWeight: 500 }}
                gutterBottom
              >
                Name:
              </Typography>
              <TextField
                required
                id="filled-required"
                size="small"
                color="success"
                sx={{ width: "95%", mt: "0px" }}
              />
            </Box>
            <Box sx={{ mt: "2%" }}>
              <Typography
                variant="body1"
                display="block"
                sx={{ ml: "1%", fontWeight: 500 }}
                gutterBottom
              >
                Email:
              </Typography>
              <TextField
                required
                id="filled-required"
                size="small"
                color="success"
                sx={{ width: "95%", mt: "0px" }}
              />
            </Box>
            <Box sx={{mt:"5%"}}>
              <Button variant="contained" color="success">Submit</Button>
            </Box>
          </Box>
        </ContentSection>
        <PictureSection sx={{ml:"10%"}}>
          <Box
            sx={{
              background: `url('${background}') lightgray 50% / cover no-repeat`,
              height: "680px", // Set a height for the background to be visible
              width: "650px",
            }}
          ></Box>
        </PictureSection>
      </Box>
    </>
  );
};

export default SupportSection;
