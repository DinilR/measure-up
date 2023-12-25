import { Box, Button, TextField, Typography, styled } from "@mui/material";
import React, { useRef } from "react";
import background from "./../Resources/background_support_2.png";
import emailjs from "@emailjs/browser";

const SupportSection = () => {
  const PictureSection = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));

  const ContentSection = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
      marginLeft: "30%",
      marginBottom: "10%",
    },
  }));

  const form = useRef();

  const serviceId = "service_p2llj2x";
  const templateId = "template_48kndik";
  const publicKey = "HwlELZzZrVSeQmZsd";
  const toEmail = "bsamw996@gmail.com";

  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      console.log("In sending mail");
      emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <>
      <Box
        sx={{ display: "flex", flexDirection: "row", background: "#E6FAE6" }}
        id="support"
      >
        <ContentSection sx={{ width: "50%", ml: "3%", mt: "10%" }}>
          <Typography variant="h5" sx={{ fontWeight: 800 }} gutterBottom>
            Interested in trying Measure Up?
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: 300 }} gutterBottom>
            We are excited for you to join our platform.
          </Typography>
          <Box className="form_section">
            <form onSubmit={sendEmail} ref={form}>
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
                  id="name"
                  size="small"
                  color="success"
                  sx={{ width: "95%", mt: "0px" }}
                  name="name"
                  type="text"
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
                  id="email"
                  size="small"
                  color="success"
                  sx={{ width: "95%", mt: "0px" }}
                  name="email"
                  type="email"
                />
              </Box>
              <TextField
                required
                id="to_email"
                name="to_email"
                type="email"
                defaultValue={toEmail}
                sx={{
                  display: "none",
                }}
              />
              <Box sx={{ mt: "5%" }}>
                <Button
                  variant="contained"
                  color="success"
                  type="submit"
                  value="Send"
                >
                  Submit
                </Button>
              </Box>
            </form>
          </Box>
        </ContentSection>

        <PictureSection sx={{ ml: "10%" }}>
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
