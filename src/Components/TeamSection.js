import { Box, Grid, Typography, styled } from "@mui/material";
import React from "react";
import team_pic from "./../Resources/meet_the_team.gif";
import person_1 from "./../Resources/person1.png";
import person_2 from "./../Resources/person2.png";

const TeamSection = () => {
  const ResponsiveBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
      height: "40vh",
    },
  }));
  const PicBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("sm")]: {
      marginLeft: "8%",
      marginTop:"0%"
    },
  }));
  const TextBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("sm")]: {
      marginLeft: "10%",
    },
    [theme.breakpoints.down("md")]: {
      marginLeft:"5%",
      marginTop:"10%"
    },
  }));
  const SecondContentBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("sm")]: {
      marginTop: "10%",

    },
    [theme.breakpoints.down("md")]: {
      marginTop: "80%",
      
    },
  }));


  const ContentBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",

    }
  }));
  const SecondAvatar = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("sm")]: {
      marginTop:"-20%"

    }
  }));
  return (
    <>
      <Box>
        <ResponsiveBox
          sx={{
            position: "relative",
            height: "70vh", // Adjust the height as needed
            background: `linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), url('${team_pic}') lightgray 50% / cover no-repeat`,
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              textAlign: "center",
              color: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              mt: "10%",
            }}
            gutterBottom
          >
            Meet the Team
          </Typography>
        </ResponsiveBox>
        <ContentBox
          sx={{ display: "flex", flexDirection: "row", mt: "10%", mb: "10%" }}
        >
          <PicBox sx={{ml:""}}>
            <Grid container spacing={ 16} sx={{ ml: "-20%", mr: "10%", textAlign:"center" }}>
              <Grid item xs={12} md={6} sx={{ mt: "0%" }}>
                <Box>
                <Box
                  sx={{
                    height: "200px",
                    width: "200px",
                    background: "#22C96A",
                    zIndex: "1",
                    mb: "-220px",
                    ml: "20px",
                    position: "relative",
                  }}
                ></Box>
                <Box
                  sx={{
                    height: "200px",
                    width: "200px",
                    background: `url('${person_2}'), lightgray 50% / cover no-repeat`,
                    zIndex: "2",
                    position: "relative",
                  }}
                ></Box>
                <Box sx={{mt:"20%",ml:"-40%"}}>
                  <Typography
                    variant="subtitle"
                    display="block"
                    gutterBottom
                    sx={{ fontWeight: 600 }}
                  >
                    CEO
                  </Typography>
                  <Typography
                    variant="subtitle"
                    display="block"
                    gutterBottom
                    sx={{ fontWeight: 400 }}
                  >
                    ARI
                  </Typography>
                </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={6} sx={{ mt: "0%" }}>
                <SecondAvatar>
                <Box
                  sx={{
                    height: "200px",
                    width: "200px",
                    background: "#22C96A",
                    zIndex: "1",
                    mb: "-220px",
                    ml: "20px",
                    position: "relative",
                  }}
                ></Box>
                <Box
                  sx={{
                    height: "200px",
                    width: "200px",
                    background: `url('${person_1}'), lightgray 50% / cover no-repeat`,
                    zIndex: "2",
                    position: "relative",
                  }}
                ></Box>
                <Box sx={{mt:"20%",ml:"-40%"}}>
                  <Typography
                    variant="subtitle"
                    display="block"
                    gutterBottom
                    sx={{ fontWeight: 600 }}
                  >
                    CTO
                  </Typography>
                  <Typography
                    variant="subtitle"
                    display="block"
                    gutterBottom
                    sx={{ fontWeight: 400 }}
                  >
                    MUKUND
                  </Typography>
                </Box>
                </SecondAvatar>
              </Grid>
            </Grid>
          </PicBox>
          <TextBox sx={{ ml: "20%" }}>
            <Box sx={{ mb: "3%" }}>
              <Typography
                variant="subtitle"
                display="block"
                gutterBottom
                sx={{ fontWeight: 300 }}
              >
                🎯 Ari (CEO):
              </Typography>
              <Typography
                variant="body1"
                display="block"
                gutterBottom
                sx={{ fontWeight: 300 }}
              >
                Sales Finance @Tesla, previously @Goldman Sachs @DST Global.
                Computer Science + Philosophy @Columbia. Chat with me about
                Manchester United, the intersection of technology and
                government, and Ben Taub.
              </Typography>
            </Box>

            <SecondContentBox>
              <Typography
                variant="subtitle"
                display="block"
                gutterBottom
                sx={{ fontWeight: 300 }}
              >
                🚀 Mukund (CTO):
              </Typography>
              <Typography
                variant="body1"
                display="block"
                gutterBottom
                sx={{ fontWeight: 300 }}
              >
                Growth Engineering @Airtable @Dropbox. Computer Science +
                Robotics @Carnegie Mellon. Chat with me about alpine climbing,
                solo backpacking, and rock music 🎸
              </Typography>
            </SecondContentBox>
          </TextBox>
        </ContentBox>
      </Box>
    </>
  );
};

export default TeamSection;
