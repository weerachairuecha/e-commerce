import { Box, Divider, Grid, IconButton, Typography } from "@mui/material";
import React, { useEffect, useRef } from "react";
import Content from "../content";

const Footer = ({ handleHeight = () => {} }) => {
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current) {
      handleHeight(ref.current.offsetHeight);
    }
  }, []);

  const handleSocialButton = (platform) => {
    console.log(platform);
  };

  return (
    <Box
      ref={ref}
      sx={{
        width: "100%",
        background: "#efefef",
      }}
    >
      <Content>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <Typography variant={"h6"}>Products</Typography>
            <Typography variant={"body1"}>product 1</Typography>
            <Typography variant={"body1"}>product 2</Typography>
            <Typography variant={"body1"}>product 3</Typography>
            <Typography variant={"body1"}>product 4</Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant={"h6"}>Services</Typography>
            <Typography variant={"body1"}>service 1</Typography>
            <Typography variant={"body1"}>service 2</Typography>
            <Typography variant={"body1"}>service 3</Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant={"h6"}>Company</Typography>
            <Typography variant={"body1"}>company 1</Typography>
            <Typography variant={"body1"}>company 2</Typography>
            <Typography variant={"body1"}>company 3</Typography>
            <Typography variant={"body1"}>company 4</Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant={"h6"}>Blog</Typography>
            <Typography variant={"body1"}>blog 1</Typography>
            <Typography variant={"body1"}>blog 2</Typography>
            <Typography variant={"body1"}>blog 3</Typography>
            <Typography variant={"body1"}>blog 4</Typography>
          </Grid>
        </Grid>
        <Divider sx={{ margin: "10px 0px" }} />
        <Grid
          container
          spacing={2}
          sx={{ flexDirection: { xs: "column-reverse", md: "row" } }}
        >
          <Grid item xs={12} md={6}>
            <Typography sx={{ textAlign: { xs: "center", md: "left" } }}>
              2023@Weerachai Ruecha
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gridGap: 4,
                justifyContent: { xs: "center", md: "flex-end" },
              }}
            >
              <IconButton
                sx={{ padding: 0 }}
                onClick={() => handleSocialButton("facebook")}
              >
                <img
                  style={{ width: 30, height: 30 }}
                  src={"/SocialMediaIcon/icons8-facebook-50.png"}
                />
              </IconButton>
              <IconButton
                sx={{ padding: 0 }}
                onClick={() => handleSocialButton("twitter")}
              >
                <img
                  style={{ width: 30, height: 30 }}
                  src={"/SocialMediaIcon/icons8-twitter-50.png"}
                />
              </IconButton>
              <IconButton
                sx={{ padding: 0 }}
                onClick={() => handleSocialButton("youtube")}
              >
                <img
                  style={{ width: 30, height: 30 }}
                  src={"/SocialMediaIcon/icons8-youtube-50.png"}
                />
              </IconButton>
              <IconButton
                sx={{ padding: 0 }}
                onClick={() => handleSocialButton("instagram")}
              >
                <img
                  style={{ width: 30, height: 30 }}
                  src={"/SocialMediaIcon/icons8-instagram-50.png"}
                />
              </IconButton>
              <IconButton
                sx={{ padding: 0 }}
                onClick={() => handleSocialButton("tiktok")}
              >
                <img
                  style={{ width: 30, height: 30 }}
                  src={"/SocialMediaIcon/icons8-tiktok-50.png"}
                />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Content>
    </Box>
  );
};

export default Footer;
