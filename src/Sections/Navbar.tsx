import { Box, Link } from "@mui/material";
import { useEffect } from "react";

function Navbar() {
  const pages = [
    { name: "Home", path: "/Maizu-s-Website/", hash: "" },
    { name: "About Me", path: "/Maizu-s-Website/#/AboutMe", hash: "#/AboutMe" },
    { name: "Games", path: "/Maizu-s-Website/#/Games", hash: "#/Games" },
    {
      name: "Local Websites",
      path: "/Maizu-s-Website/#/LocalWebsites",
      hash: "#/LocalWebsites",
    },
  ];

  function isSelected(hash: string) {
    return window.location.hash === hash;
  }

  function isFirst(index: number) {
    return 0 === index;
  }

  function isLast(index: number) {
    return pages.length - 1 === index;
  }

  useEffect(() => {
    if (window.location.hash === "#/AboutMe") {
      window.scrollBy(0, 700);
    }
  }, []);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          height: "5.3vh",
          width: "35vw",
          background: "#2F8288",
          borderRadius: "10px",
        }}
      >
        {pages.map((page, index) => {
          return (
            <Box
              key={`page-list${index}`}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                background: isSelected(page.hash)
                  ? "rgb(52,52,52,0.4)"
                  : "#2F8288",
                height: "5.3vh",
                width: "30vw",
                borderTopLeftRadius:
                  isFirst(index) || isSelected(page.hash) ? "10px" : "0px",
                borderBottomLeftRadius:
                  isFirst(index) || isSelected(page.hash) ? "10px" : "0px",
                borderTopRightRadius:
                  isLast(index) || isSelected(page.hash) ? "10px" : "0px",
                borderBottomRightRadius:
                  isLast(index) || isSelected(page.hash) ? "10px" : "0px",
              }}
            >
              <Link
                sx={{
                  color: "#D7E5E6",
                  textDecoration: "none",
                }}
                href={page.path}
                rel="noopener noreferrer"
              >
                {page.name}
              </Link>
            </Box>
          );
        })}
      </Box>
    </>
  );
}

export default Navbar;
