import {
  Alert,
  Box,
  Button,
  Collapse,
  IconButton,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import React, { useRef, useState } from "react";
import background from "./../Resources/background_support_2.png";
import emailjs from "@emailjs/browser";
import LoadingButton from "@mui/lab/LoadingButton";
import CloseIcon from "@mui/icons-material/Close";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(true);

  const form = useRef();

  const serviceId = "service_p2llj2x";
  const templateId = "template_48kndik";
  const publicKey = "HwlELZzZrVSeQmZsd";
  const toEmail = "bsamw996@gmail.com";

  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      console.log("In sending mail");
      emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
        (result) => {
          console.log(result.text);
          setLoading(false);
          toast.success(
            "Thank you for your time, Our team will be in touch with you shortly :)",
            {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            }
          );
        },
        (error) => {
          console.log(error.text);
        }
      );
      // setLoading(false);
      console.log("Send successful");
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
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          style={{ width: "580px" }}
        />
        <Box
          sx={{
            mb: 2,
            zIndex: 1,
            position: "fixed",
            left: "50%",
            transform: "translateX(-50%)",
            width: "80%",
          }}
          className="alert"
        >
          <Collapse in={open} sx={{}}>
            <Alert
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
            >
              Thank you for your time, our team will contact you soon!
            </Alert>
          </Collapse>
        </Box>
        <ContentSection sx={{ width: "50%", ml: "3%", mt: "10%" }}>
          <Typography variant="h5" sx={{ fontWeight: 800 }} gutterBottom>
            Interested in trying Measure Up?
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: 300 }} gutterBottom>
            If you'd like to show support for MeasureUP, please share your
            details, and our support team will be in touch. Thank you for
            considering us!
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
                  defaultValue=""
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
                  defaultValue=""
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
                <LoadingButton
                  loading={loading}
                  variant="contained"
                  color="success"
                  type="submit"
                  value="Send"
                >
                  Submit
                </LoadingButton>
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
