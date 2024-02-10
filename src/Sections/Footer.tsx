import { Box, Avatar, Typography, Button, Link } from "@mui/material";

function Footer() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flexstart",
          height: "14vh",
          width: "100vw",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "14vh",
            width: "18vw",
            marginLeft: "21.5%",
          }}
        >
          <Typography sx={{ fontSize: "1.8rem" }}>Hope you liked it</Typography>
          <Typography sx={{ fontSize: "1.8rem" }}>
            feel free to give me tips
          </Typography>
        </Box>
        <Avatar
          alt="maizu pb"
          src="maizu pb.png"
          sx={{ width: 95, height: 95, marginLeft: "8%", marginRight: "10%" }}
        />
        <Link
          underline="none"
          rel="noopener noreferrer"
          target="_blank"
          onClick={async () => {
            await navigator.clipboard.writeText("maizu_u");
            window.open("https://discordapp.com/users/465315316709326868");
          }}
        >
          <Button
            sx={{
              backgroundColor: "#2F8288",
              "&:hover": { backgroundColor: "#34949b" },
            }}
            variant="contained"
            endIcon={
              <Avatar
                alt="Discord-logo"
                src="discord.svg"
                sx={{
                  width: 30,
                  height: 24,
                  filter:
                    "invert(98%) sepia(34%) saturate(430%) hue-rotate(159deg) brightness(96%) contrast(88%)",
                }}
              />
            }
          >
            maizu_u
          </Button>
        </Link>
      </Box>
    </>
  );
}

export default Footer;
