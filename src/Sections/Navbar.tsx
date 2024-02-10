import { Box, Link } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function Navbar() {
  const pages = [
    { name: "Home", path: "/" },
    { name: "About Me", path: "/AboutMe" },
    { name: "Games", path: "/Games" },
    { name: "Local Websites", path: "/LocalWebsites" },
  ];
  const location = useLocation();

  function isSelected(path: string) {
    return location.pathname === path;
  }

  function isFirst(index: number) {
    return 0 === index;
  }

  function isLast(index: number) {
    return pages.length - 1 === index;
  }

  useEffect(() => {
    if (location.pathname === "/AboutMe") {
      window.scrollBy(0, 300);
    }
  });

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
                background: isSelected(page.path)
                  ? "rgb(52,52,52,0.4)"
                  : "#2F8288",
                height: "5.3vh",
                width: "30vw",
                borderTopLeftRadius:
                  isFirst(index) || isSelected(page.path) ? "10px" : "0px",
                borderBottomLeftRadius:
                  isFirst(index) || isSelected(page.path) ? "10px" : "0px",
                borderTopRightRadius:
                  isLast(index) || isSelected(page.path) ? "10px" : "0px",
                borderBottomRightRadius:
                  isLast(index) || isSelected(page.path) ? "10px" : "0px",
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
