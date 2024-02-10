import { Avatar, Box, Button, Link, Typography } from "@mui/material";

function RainbowSixSiege() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flexstart",
          alignItems: "center",
          flexDirection: "column",
          height: "70vh",
          width: "55vw",
        }}
      >
        <Typography sx={{ fontSize: "2.5rem", marginTop: "4%" }}>
          Rainbow Six Siege
        </Typography>
        <Avatar
          alt="rainbow-six-siege icon"
          src="gamingAvatarIcons/rainbow-six-siege.png"
          variant="circular"
          sx={{
            width: 160,
            height: 160,
            marginTop: "3%",
          }}
        />
        <Typography sx={{ fontSize: "1.4rem", marginTop: "6%" }}>
          I played Rainbow Six Siege for around 2k hours now. I played back in
          beta on PS4 and reached
        </Typography>
        <Typography sx={{ fontSize: "1.4rem" }}>
          a couple of times Platinum. I quit then because of all the M&K players
          on PS4. The last time
        </Typography>
        <Typography sx={{ fontSize: "1.4rem" }}>
          I played actively was in season Heavy Mettle, where I reached Emerald
          3.
        </Typography>
        <Typography
          sx={{ fontSize: "1.1rem", marginTop: "2%", marginBottom: "0.2%" }}
        >
          Last active season: Heavy Mettle
        </Typography>
        <Link
          underline="none"
          rel="noopener noreferrer"
          target="_blank"
          href="https://r6.tracker.network/profile/pc/Maizu_u"
        >
          <Button
            size="large"
            sx={{
              backgroundColor: "#2F8288",
              "&:hover": { backgroundColor: "#34949b" },
            }}
            variant="contained"
            endIcon={
              <Avatar
                alt="rainbow-six-siege icon"
                src="gamingAvatarIcons/rainbowSixSiegeIcon.png"
                variant="square"
                sx={{
                  width: 30,
                  height: 30,
                }}
              />
            }
          >
            <Typography
              sx={{
                fontSize: "1.1rem",
                textTransform: "capitalize",
              }}
            >
              Tracker
            </Typography>
          </Button>
        </Link>
      </Box>
    </>
  );
}

export default RainbowSixSiege;
