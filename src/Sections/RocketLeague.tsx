import { Avatar, Box, Button, Link, Typography } from "@mui/material";

function RocketLeague() {
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
          Rocket League
        </Typography>
        <Avatar
          alt="rocket league icon"
          src="gamingAvatarIcons/rocket league.ico"
          variant="square"
          sx={{
            width: 160,
            height: 160,
            marginTop: "3%",
          }}
        />
        <Typography sx={{ fontSize: "1.4rem", marginTop: "6%" }}>
          I played Rocket League for around 7k hours now. I reached SSL multiple
          times, played Nitro
        </Typography>
        <Typography sx={{ fontSize: "1.4rem" }}>
          League in Division 2, and won a couple of tournaments. Made around 5k
          from boosting. I
        </Typography>
        <Typography sx={{ fontSize: "1.4rem" }}>
          am playing currently for fun with friends or if someone wants to get
          boosted/needs help
        </Typography>
        <Typography
          sx={{ fontSize: "1.1rem", marginTop: "2%", marginBottom: "0.2%" }}
        >
          Last active season: 7/21
        </Typography>
        <Link
          underline="none"
          rel="noopener noreferrer"
          target="_blank"
          href="https://rocketleague.tracker.network/rocket-league/profile/steam/76561198333577437/overview"
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
                alt="rocket league icon"
                src="gamingAvatarIcons/rocket league.ico"
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

export default RocketLeague;
