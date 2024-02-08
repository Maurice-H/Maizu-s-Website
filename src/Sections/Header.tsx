import { Box, Avatar } from "@mui/material";
import Navbar from "./Navbar";

function Header() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "14vh",
          width: "100vw",
        }}
      >
        <Avatar
          alt="maizu pb"
          src="maizu pb.png"
          sx={{ width: 95, height: 95, marginRight: "4%" }}
        />
        <Navbar />
      </Box>
    </>
  );
}

export default Header;
