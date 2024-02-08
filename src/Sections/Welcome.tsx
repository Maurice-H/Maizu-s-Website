import { Box, Typography } from "@mui/material";
import styles from "../CSS/Welcome.module.css";

function Welcome() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          justifyContent: "flexstart",
          alignItems: "center",
          height: "50vh",
          width: "100vw",
          marginTop: "3%",
        }}
      >
        <Typography sx={{ fontSize: "3.5rem" }}>
          Welcome to my Website made with:
        </Typography>
        <Typography sx={{ fontSize: "3.5rem", marginBottom: "1.3%" }}>
          FigJam, Figma and React
        </Typography>
        <img
          className={styles.nezukoRunning}
          src="running-nezuko.gif"
          alt="running-nezuko"
        ></img>
      </Box>
    </>
  );
}

export default Welcome;
