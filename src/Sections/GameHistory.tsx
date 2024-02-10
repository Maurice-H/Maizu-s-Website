import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import RainbowSixSiege from "./RainbowSixSiege";
import Osu from "./Osu";
import RocketLeague from "./RocketLeague";

function GameHistory() {
  //PageIndex 0 Rocket League
  //PageIndex 1 Osu
  //PageIndex 2 RainbowSixSiege
  const [pageTracker, setPageTracker] = useState(0);

  function getPageIndex() {
    return pageTracker % 3;
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
          marginTop: "5%",
        }}
      >
        <Typography sx={{ fontSize: "3.5rem" }}>
          Games I put most of my hours in
        </Typography>
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
          <RocketLeague isHidden={getPageIndex() !== 0} />
          <Osu isHidden={getPageIndex() !== 1} />
          <RainbowSixSiege isHidden={getPageIndex() !== 2} />
          <Box
            sx={{
              position: "absolute",
              bottom: "-80.5%",
              right: "54.5%",
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
              bottom: "-80.5%",
              right: "49.5%",
              height: "25px",
              width: "25px",
              backgroundColor: getPageIndex() !== 1 ? "#D7E5E6" : "#2F8288",
              borderRadius: "50%",
              display: "inline-block",
            }}
          ></Box>
          <Box
            sx={{
              position: "absolute",
              bottom: "-80.5%",
              right: "44.5%",
              height: "25px",
              width: "25px",
              backgroundColor: getPageIndex() !== 2 ? "#D7E5E6" : "#2F8288",
              borderRadius: "50%",
              display: "inline-block",
            }}
          ></Box>
        </Box>
      </Box>
    </>
  );
}

export default GameHistory;
