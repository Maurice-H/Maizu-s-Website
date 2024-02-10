import { Button, Typography, Link } from "@mui/material";

type LocalLinksButtonProps = {
  buttonName: string;
  href: string;
};

function LocalLinksButton({ buttonName, href }: LocalLinksButtonProps) {
  return (
    <>
      <Link
        underline="none"
        rel="noopener noreferrer"
        target="_blank"
        href={href}
      >
        <Button
          size="large"
          sx={{
            backgroundColor: "#2F8288",
            width: "9vw",
            height: "7vh",
            "&:hover": { backgroundColor: "#34949b" },
          }}
          variant="contained"
        >
          <Typography
            sx={{
              fontSize: "1.1rem",
              textTransform: "capitalize",
            }}
          >
            {buttonName}
          </Typography>
        </Button>
      </Link>
    </>
  );
}

export default LocalLinksButton;
