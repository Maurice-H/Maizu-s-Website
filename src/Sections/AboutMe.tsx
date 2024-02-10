import { Box, Typography } from "@mui/material";
import Career from "./Career";
import Hobbys from "./Hobbys";
import { useEffect, useState } from "react";

function AboutMe() {
  //PageIndex 0 Career
  //PageIndex 1 Hobbys
  const [pageTracker, setPageTracker] = useState(0);

  function getPageIndex() {
    return pageTracker % 2;
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPageTracker((prev) => prev + 1);
    }, 10000);
    return () => clearInterval(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          justifyContent: "flexstart",
          alignItems: "center",
          height: "90vh",
          width: "100vw",
        }}
      >
        <Typography sx={{ fontSize: "3.5rem" }}>About Me </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignContent: "flexstart",
            justifyContent: "flexstart",
            alignItems: "flexstart",
            height: "70vh",
            width: "55vw",
            backgroundImage: "linear-gradient(#0F1035, #2F8288, #0F1035)",
            border: "outset #D7E5E6 2px",
            borderRadius: "20px",
          }}
        >
          <Career isHidden={getPageIndex() !== 0} />
          <Hobbys isHidden={getPageIndex() !== 1} />
          <Box
            sx={{
              position: "absolute",
              bottom: "-45.5%",
              right: "52%",
              height: "25px",
              width: "25px",
              backgroundColor: getPageIndex() !== 0 ? "#D7E5E6" : "#2F8288",
              borderRadius: "50%",
              display: "inline-block",
            }}
          ></Box>
          <Box
            sx={{
              position: "absolute",
              bottom: "-45.5%",
              right: "47%",
              height: "25px",
              width: "25px",
              backgroundColor: getPageIndex() !== 1 ? "#D7E5E6" : "#2F8288",
              borderRadius: "50%",
              display: "inline-block",
            }}
          ></Box>
        </Box>
      </Box>
    </>
  );
}

export default AboutMe;
