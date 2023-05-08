import { Box } from "@mui/material";

const Content = ({ children, variant, ...props }) => {
  return (
    <Box
      sx={{
        padding: 2,
        width: "100%",
        maxWidth: { xs: "100%", md: "1180px" },
        margin: "0 auto",
        flex: 1,
        ...props.sx,
      }}
    >
      {children}
    </Box>
  );
};

export default Content;
