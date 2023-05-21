import { Paper, Box, Skeleton, Typography, CardMedia } from "@mui/material";
import React, { useEffect, useState } from "react";

const Product = ({
  image = null,
  name = null,
  detail = null,
  price = null,
  status = null,
  onClick = () => {},
}) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        width: 'auto',
        height: 300,
        border: "1px solid #efefef",
        display: "flex",
        flexDirection: "column",
        cursor: "pointer"
      }}
    >
      {image ? (
        <img
          src={image}
          height={200}
          width={"100%"}
          style={{
            objectFit: "cover",
          }}
        />
      ) : (
        <Skeleton variant="rectangular" height={200} />
      )}
      <Box
        sx={{
          padding: "6px",
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box sx={{ flex: 1 }}>
          {name ? (
            <Typography variant="body1" noWrap>
              {name}
            </Typography>
          ) : (
            <Skeleton height={30} />
          )}
          {detail ? (
            <Typography variant="body2">{detail}</Typography>
          ) : (
            <Skeleton height={30} />
          )}
        </Box>
        <Box
          sx={{
            height: "24px",
            display: "flex",
            alignItems: "center",
          }}
        >
          {price ? (
            <Typography sx={{ flex: 1 }} color={"primary"}>
              {price}
            </Typography>
          ) : (
            <Skeleton width={40} height={30} />
          )}

          {status ? (
            <Typography
              variant="body2"
              noWrap
              sx={{ flex: 1, textAlign: "right" }}
              color={"gray"}
            >
              {status}
            </Typography>
          ) : (
            <Skeleton sx={{ marginLeft: "auto" }} width={80} height={30} />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Product;
