import { Box, Typography } from "@mui/material";
import LocalLinksButton from "../Components/LocalLinksButton.tsx";

function WebLinks() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          justifyContent: "flexstart",
          alignItems: "center",
          height: "65vh",
          width: "100vw",
          marginTop: "3%",
        }}
      >
        <Typography sx={{ fontSize: "3.5rem" }}>Local Websites</Typography>
        <Box
          sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
        >
          <Typography sx={{ fontSize: "1.5rem" }}>
            Does nothing unless you are in my Lan
          </Typography>
          <img
            src="peepo-giggle-peepo.gif"
            alt="peepo-giggle-peepo gif"
            style={{ width: "5%", height: "auto", marginLeft: "1.5%" }}
          ></img>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            marginTop: "3%",
            width: "50vw",
            height: "auto",
            justifyContent: "space-around",
          }}
        >
          <LocalLinksButton
            buttonName={"Pi.hole"}
            href={"http://pi.hole/admin/login.php"}
          />
          <LocalLinksButton
            buttonName={"Cockpit"}
            href={"https://raspberrypi:9090/system"}
          />
          <LocalLinksButton
            buttonName={"Jenkins"}
            href={"http://raspberrypi:8080/login?from=%2F"}
          />
        </Box>
      </Box>
    </>
  );
}

export default WebLinks;
