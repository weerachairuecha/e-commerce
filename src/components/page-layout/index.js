import React, { useCallback, useEffect, useRef, useState } from "react";
import Header from "../header";
import Content from "../content";
import Footer from "../footer";
import { Box, Fab } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const PageLayout = ({ backgroundImage = null, children }) => {
  const [hFooter, setHFooter] = useState(0);
  const [isTop, setIsTop] = useState(true);
  const onScroll = useCallback((event) => {
    const { pageYOffset, scrollY } = window;
    setIsTop(scrollY === 0);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll, { passive: true });
    };
  }, []);

  useEffect(() => {
    console.log(isTop);
  }, [isTop]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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

      <Fab
        color="primary"
        onClick={scrollToTop}
        sx={{
          transition: "0.3s",
          display: isTop ? "none" : "auto",
          position: "fixed",
          bottom: 0,
          right: 0,
          marginRight: 3,
          marginBottom: 3,
        }}
      >
        <ArrowUpwardIcon />
      </Fab>
    </Box>
  );
};

export default PageLayout;
