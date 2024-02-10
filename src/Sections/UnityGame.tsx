import { Unity, useUnityContext } from "react-unity-webgl";
import { Box, Typography } from "@mui/material";

function UnityGame() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "UnityGameBuild/Build/Game.loader.js",
    dataUrl: "UnityGameBuild/Build/Game.data",
    frameworkUrl: "UnityGameBuild/Build/Game.framework.js",
    codeUrl: "UnityGameBuild/Build/Game.wasm",
  });

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography sx={{ fontSize: "2.8rem" }}>
          First game made with unity
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignContent: "center",
            justifyContent: "center",
            alignItems: "center",
            height: "71vh",
            width: "58.5vw",
            backgroundImage: "linear-gradient(#0F1035, #2F8288, #0F1035)",
            border: "solid #D7E5E6 6px",
          }}
        >
          <Unity
            unityProvider={unityProvider}
            style={{
              display: "flex",
              width: "58vw",
              height: "70vh",
            }}
          />
        </Box>
      </Box>
    </>
  );
}

export default UnityGame;
