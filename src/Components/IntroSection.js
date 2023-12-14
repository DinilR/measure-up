import { Box, Typography,Grid } from "@mui/material";
import product from "./../Resources/product.png";
import logo from "./../Resources/MLogo.png";
import { styled } from "@mui/system";

const IntroSection = () => {
  const ResponsiveBox = styled(Box)(({ theme }) => ({
    
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: 'center',
      height:"95vh",
      marginTop:"-0%"
    },
  }));

  return (
    <>
      <ResponsiveBox
        sx={{
          bgcolor: "#000000",
          display: "flex",
          flexDirection: "row",
          color: "white",
          justifyContent: "space-evenly",
          height:"100vh"
        }}
      >
        <Grid container spacing={2} sx={{mt:"5%"}}>
          {/* Content Section */}
          <Grid item xs={12} md={6} sx={{mt:"5%"}}>
            <Box
              className="content_section"
              sx={{
                mb: "3%",
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                textAlign: 'center',
                ml:"2%",
                mr:"2%",
              }}
            >
              <Typography variant="h3" sx={{textAlign: 'center'}} gutterBottom>
                Measure up
              </Typography>
              <Box  sx={{textAlign: 'left', ml:"5%"}}>
              <Typography variant="body1" gutterBottom>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco.
              </Typography>
              <Typography variant="body1" gutterBottom>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco.
              </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Picture Section */}
          <Grid item xs={12} md={6} sx={{mt:"4%",mb:"8%"}}>
            <Box
              className="picture_section"
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                mb:"10%"
              }}
            >
              <img
                src={product}
                alt="Logo"
                className="product"
                style={{
                  width: "340px",
                  height: "250px",
                  marginRight: "10px",
                  mt: "50px",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </ResponsiveBox>
    </>
  );
};

export default IntroSection;
