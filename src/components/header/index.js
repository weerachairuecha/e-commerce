import {
  Avatar,
  Badge,
  Box,
  Button,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import Content from "../content";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { AccountCircle } from "@mui/icons-material";
import { useRouter } from "next/router";
import Link from "next/link";

const Header = ({ children }) => {
  const router = useRouter();
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("xs"));
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

  const handleLogo = () => {
    router.replace("/home");
  };
  const handleCart = () => {
    router.replace("/cart");
  };
  const handleProfile = () => {
    // router.replace("/profile");
    if (isSmallScreen) {
      console.log("small");
    } else {
      console.log("md");
    }
  };

  return (
    <Box
      sx={{
        paddingTop: "80px",
      }}
    >
      <Box
        sx={{
          position: "fixed",
          height: isTop ? 80 : 60,
          top: 0,
          left: 0,
          right: 0,
          background: (theme) => theme.palette.primary.main,
          transition: "0.3s",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/*logo, search, cart, profile */}
        <Content
          sx={{
            paddingY: 0,
          }}
        >
          <Stack direction={"row"} spacing={1} alignItems={"center"}>
            <img
              onClick={handleLogo}
              src={"/logo.png"}
              style={{
                width: 50,
                height: 50,
                objectFit: "contain",
                cursor: "pointer",
              }}
            />

            <Box sx={{ flex: 1 }}></Box>

            <Typography
              sx={{ cursor: "pointer", color: "#FFFFFF" }}
              onClick={() => router.replace("/category")}
            >
              Category
            </Typography>

            <IconButton onClick={handleCart}>
              <Badge badgeContent={3} color={"error"}>
                <ShoppingCartOutlinedIcon
                  color={"white"}
                  sx={{
                    width: 30,
                    height: 30,
                  }}
                />
              </Badge>
            </IconButton>

            <Profile
              profileImage={
                "https://cdn-icons-png.flaticon.com/512/3135/3135823.png"
              }
              name={"Weerachai Ruecha"}
              onClick={handleProfile}
            />
          </Stack>
        </Content>
      </Box>
    </Box>
  );
};

const Profile = ({ profileImage, name, onClick }) => {
  return (
    <IconButton
      onClick={onClick}
      sx={{ display: "flex", alignItems: "center", gridGap: 10 }}
    >
      <img
        src={profileImage}
        style={{
          width: 30,
          height: 30,
          borderRadius: "100%",
          objectFit: "contain",
        }}
      />
      <Typography
        sx={{
          color: (theme) => theme.palette.white.main,
          maxWidth: 100,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          display: { xs: "none", md: "block" },
        }}
      >
        {name}
      </Typography>
    </IconButton>
  );
};

export default Header;
