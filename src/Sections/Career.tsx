import { Box, Typography } from "@mui/material";
import styles from "../CSS/AboutMe.module.css";

type CareerProps = {
  isHidden: boolean;
};

function Career({ isHidden }: CareerProps) {
  return (
    <>
      {/* Code smell: Needs refactoring for visibility and usability */}
      {/* EyeC Component */}
      <Box
        sx={{
          display: isHidden ? "none" : "flex",
          opacity: isHidden ? "0" : "1",
          height: "70vh",
          width: "55vw",
          transition: "opacity 3s, display 3s",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
            justifyContent: "flexstart",
            alignItems: "center",
            height: "48vh",
            width: "15vw",
            backgroundImage: "linear-gradient(#0F1035, #2F8288, #0F1035)",
            marginLeft: "5%",
            marginTop: "8%",
            borderRadius: "10px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignContent: "center",
              justifyContent: "center",
              alignItems: "center",
              height: "24vh",
              width: "15vw",
              border: "solid #D7E5E6 2px",
              borderRadius: "10px",
            }}
          >
            <img
              className={styles.eyecLogo}
              src="EyeC.png"
              alt="EyeC logo"
            ></img>
            <Typography sx={{ fontSize: "1rem" }}>
              Apprenticeship for Application
            </Typography>
            <Typography sx={{ fontSize: "1rem" }}>
              Development From 2023 to 2025
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignContent: "center",
              justifyContent: "center",
              alignItems: "center",
              height: "24vh",
              width: "15vw",
              border: "solid #D7E5E6 2px",
              borderRadius: "10px",
              marginTop: "10%",
            }}
          >
            <img
              className={styles.eyecLogo}
              src="EyeC.png"
              alt="EyeC logo"
            ></img>
            <Typography sx={{ fontSize: "1rem" }}>
              Apprenticeship for Application
            </Typography>
            <Typography sx={{ fontSize: "1rem" }}>
              Development From 2023 to 2025
            </Typography>
          </Box>
        </Box>
        {/* EyeC Component */}
        {/* Learning/Expertise Component */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
            justifyContent: "flexstart",
            alignItems: "center",
            height: "48vh",
            width: "15vw",
            backgroundImage: "linear-gradient(#0F1035, #2F8288, #0F1035)",
            marginTop: "8%",
            marginLeft: "5%",
            borderRadius: "10px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignContent: "center",
              justifyContent: "felxstart",
              alignItems: "center",
              height: "24vh",
              width: "15vw",
              border: "solid #D7E5E6 2px",
              borderRadius: "10px",
            }}
          >
            <Typography
              sx={{
                fontSize: "1.7rem",
                textDecoration: "underline",
                marginTop: "4%",
              }}
            >
              Learning
            </Typography>
            <Typography sx={{ fontSize: "1rem", marginTop: "3%" }}>
              UX
            </Typography>
            <Typography sx={{ fontSize: "1rem", marginTop: "3%" }}>
              UI
            </Typography>
            <Typography sx={{ fontSize: "1rem", marginTop: "3%" }}>
              React
            </Typography>
            <Typography sx={{ fontSize: "1rem", marginTop: "3%" }}>
              React Native
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignContent: "center",
              justifyContent: "felxstart",
              alignItems: "center",
              height: "24vh",
              width: "15vw",
              border: "solid #D7E5E6 2px",
              borderRadius: "10px",
              marginTop: "10%",
            }}
          >
            <Typography
              sx={{
                fontSize: "1.7rem",
                textDecoration: "underline",
                marginTop: "4%",
              }}
            >
              Expertise
            </Typography>
            <Typography sx={{ fontSize: "1rem", marginTop: "3%" }}>
              HTML
            </Typography>
            <Typography sx={{ fontSize: "1rem", marginTop: "3%" }}>
              CSS
            </Typography>
            <Typography sx={{ fontSize: "1rem", marginTop: "3%" }}>
              TypeScript
            </Typography>
            <Typography sx={{ fontSize: "1rem", marginTop: "3%" }}>
              Vue
            </Typography>
          </Box>
        </Box>
        {/* Learning/Expertise Component */}
        {/* Career Component */}

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
            justifyContent: "felxstart",
            alignItems: "center",
            height: "30vh",
            width: "15vw",
            borderRadius: "10px",
            marginLeft: "5%",
            marginTop: "18%",
          }}
        >
          <Typography
            sx={{
              fontSize: "2rem",
              marginTop: "4%",
            }}
          >
            Career
          </Typography>
          <Typography sx={{ fontSize: "1.1rem", marginTop: "3%" }}>
            Currently getting started in the IT
          </Typography>
          <Typography sx={{ fontSize: "1.1rem" }}>
            world. Trying out new things such
          </Typography>
          <Typography sx={{ fontSize: "1.1rem" }}>
            as UX UI designing and improving
          </Typography>
          <Typography sx={{ fontSize: "1.1rem" }}>my skills</Typography>
        </Box>
        {/* Career Component */}
      </Box>
    </>
  );
}

export default Career;
