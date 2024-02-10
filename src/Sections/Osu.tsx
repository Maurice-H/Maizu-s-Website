import { Avatar, Box, Button, Link, Typography } from "@mui/material";

function Osu() {
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
          Osu
        </Typography>
        <Avatar
          alt="osu icon"
          src="gamingAvatarIcons/osu.ico"
          variant="circular"
          sx={{
            width: 160,
            height: 160,
            marginTop: "3%",
          }}
        />
        <Typography sx={{ fontSize: "1.4rem", marginTop: "6%" }}>
          I played Osu for around 1k hours now. I started as a speed player.
          Nowadays, I am enjoying
        </Typography>
        <Typography sx={{ fontSize: "1.4rem" }}>
          low AR, Reading and Tech maps. Medal farming is also one thing I enjoy
          in the game.
        </Typography>
        <Typography sx={{ fontSize: "1.4rem" }}>
          Playing less and less, but maybe someday back to grinding
        </Typography>
        <Typography
          sx={{ fontSize: "1.1rem", marginTop: "2%", marginBottom: "0.2%" }}
        >
          Highest peak: 64k
        </Typography>
        <Link
          underline="none"
          rel="noopener noreferrer"
          target="_blank"
          href="https://osu.ppy.sh/users/14006453"
          onClick={() => {
            window.open(
              "https://osekai.net/profiles/?user=14006453&page=Home&mode=osu"
            );
          }}
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
                alt="osu icon"
                src="gamingAvatarIcons/osu.ico"
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

export default Osu;
