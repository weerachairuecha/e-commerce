import React, { useEffect, useRef, useState } from "react";
import Header from "../header";
import Content from "../content";
import Footer from "../footer";
import { Box } from "@mui/material";

const PageLayout = ({ backgroundImage = null, children }) => {
  const [hFooter, setHFooter] = useState(0);

  return (
    <Box>
      <Header />
      {backgroundImage ? (
        <Content
          sx={{
            minHeight: `calc(100vh - ${hFooter}px - 80px)`,
            backgroundImage: `url('${backgroundImage}')`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            maxWidth: "100%",
          }}
        >
          {children}
        </Content>
      ) : (
        <Content
          sx={{
            minHeight: `calc(100vh - ${hFooter}px - 80px)`,
            maxWidth: "100%",
          }}
        >
          {children}
        </Content>
      )}
      <Footer
        handleHeight={(height) => {
          setHFooter(height);
        }}
      />
    </Box>
  );
};

export default PageLayout;
