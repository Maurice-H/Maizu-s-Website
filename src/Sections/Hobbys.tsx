import { Avatar, Box, Link, Typography } from "@mui/material";
import { useState, useEffect } from "react";

type HobbysProps = {
  isHidden: boolean;
};

function Hobbys({ isHidden }: HobbysProps) {
  const gamingAvatarIcons = [
    "gamingAvatarIcons/rocket league.ico",
    "gamingAvatarIcons/osu.png",
  ];

  const codingAvatarIcons = [
    "codingAvatarIcons/React-icon.png",
    "codingAvatarIcons/Vue-icon.png",
    "codingAvatarIcons/C++-icon.png",
    "codingAvatarIcons/Python-icon.png",
  ];

  const [gamingAvatarIconsIndex, setGamingAvatarIconsIndex] = useState(0);
  const [codingAvatarIconsIndex, setCodingAvatarIconsIndex] = useState(0);

  useEffect(() => {
    function changeIndex() {
      setGamingAvatarIconsIndex(
        (prev) => (prev + 1) % gamingAvatarIcons.length
      );
      setCodingAvatarIconsIndex(
        (prev) => (prev + 1) % codingAvatarIcons.length
      );
    }
    const intervalId = setInterval(changeIndex, 3000);
    return () => clearInterval(intervalId);
  });
  return (
    <>
      <Box
        sx={{
          display: isHidden ? "none" : "flex",
          opacity: isHidden ? "0" : "1",
          height: "70vh",
          width: "55vw",
          transition: "opacity 3s, display 3s",
        }}
      >
        {/* Code smell: Needs refactoring for visibility and usability */}
        {/* Gaming */}
        <Box
          sx={{
            display: isHidden ? "hidden" : "flex",
            flexDirection: "column",
            alignContent: "center",
            justifyContent: "flexstart",
            alignItems: "center",
            height: "48vh",
            width: "15vw",
            backgroundImage: "linear-gradient(#0F1035, #2F8288, #0F1035)",
            marginLeft: "10%",
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
            <Typography
              sx={{
                fontSize: "1.8rem",
                textDecoration: "underline",
                marginBottom: "3%",
              }}
            >
              Games
            </Typography>
            <Avatar
              alt="gamingAvatarIcons"
              src={gamingAvatarIcons[gamingAvatarIconsIndex]}
              sx={{ marginBottom: "6%" }}
            ></Avatar>
            <Typography sx={{ fontSize: "1rem" }}>
              Rocket League, Osu,
            </Typography>
            <Typography sx={{ fontSize: "1rem" }}>
              Singleplayer games
            </Typography>
          </Box>
          {/* Gaming */}
          {/* Coding */}
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
            <Typography
              sx={{
                fontSize: "1.8rem",
                textDecoration: "underline",
                marginBottom: "6%",
              }}
            >
              Coding
            </Typography>
            <Avatar
              alt="gamingAvatarIcons"
              src={codingAvatarIcons[codingAvatarIconsIndex]}
              sx={{ marginBottom: "6%" }}
            ></Avatar>
            <Typography sx={{ fontSize: "1rem" }}>
              React, Vue, C++, Python
            </Typography>
            <Typography sx={{ fontSize: "1rem" }}>with more to come</Typography>
          </Box>
          {/* Coding */}
        </Box>
        <Typography
          sx={{
            fontSize: "2rem",
            marginTop: "4%",
            marginLeft: "8%",
          }}
        >
          Hobbys
        </Typography>
        {/* Animes Component */}
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
            marginLeft: "6%",
            marginTop: "8%",
            borderRadius: "10px",
          }}
        >
          <Link
            href="https://aniworld.to/user/profil/maizu_u#"
            underline="none"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignContent: "center",
                justifyContent: "center",
                alignItems: "center",
                height: "22vh",
                width: "15vw",
                border: "solid #D7E5E6 2px",
                borderRadius: "10px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "1.8rem",
                  textDecoration: "underline",
                  marginTop: "4%",
                  marginBottom: "6%",
                }}
              >
                Animes
              </Typography>
              <Avatar
                alt="gamingAvatarIcons"
                src="Aniworld.png"
                sx={{ marginBottom: "6%" }}
              ></Avatar>
              <Typography sx={{ fontSize: "1rem" }}>
                watching mostly with friends or
              </Typography>
              <Typography sx={{ fontSize: "1rem" }}>alone</Typography>
            </Box>
          </Link>
          {/* Animes Component */}
          {/* Sports Component */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignContent: "center",
              justifyContent: "felxstart",
              alignItems: "center",
              height: "22vh",
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
                marginBottom: "6%",
              }}
            >
              Sports
            </Typography>
            <Avatar
              alt="gamingAvatarIcons"
              src="fitness.png"
              sx={{ marginBottom: "6%" }}
            ></Avatar>
            <Typography sx={{ fontSize: "1rem" }}>
              Doing Push-Pull-Legs at home
            </Typography>
            <Typography sx={{ fontSize: "1rem" }}>
              going into the gym in the future
            </Typography>
          </Box>
          {/* Sports Component */}
        </Box>
      </Box>
    </>
  );
}

export default Hobbys;
