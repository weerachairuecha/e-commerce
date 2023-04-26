import { Paper, Box, Skeleton, Typography, CardMedia } from "@mui/material";
import React, { useEffect, useState } from "react";

const Product = ({
  image = null,
  name = null,
  detail = null,
  onSubmit = () => any,
}) => {
  return (
    <Box
      sx={{
        width: 200,
        height: 300,
        border: "1px solid #efefef",
      }}
    >
      {image ? (
        <img src={image} height={200} width={"100%"} />
      ) : (
        <Skeleton variant="rectangular" height={200} />
      )}
      <Box sx={{ padding: "6px" }}>
        {name ? <Typography>{name}</Typography> : <Skeleton height={30} />}
        {detail ? <Typography>{detail}</Typography> : <Skeleton height={30} />}
      </Box>
    </Box>
  );
};

export default Product;
