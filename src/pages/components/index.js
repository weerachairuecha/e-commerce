import { Product } from "@/components";
import { Grid, Typography, Box } from "@mui/material";
import React from "react";

const Components = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant={"h6"}>Product</Typography>
        <Box
          sx={{
            display: "flex",
            gridGap: 10,
          }}
        >
          <Product />
          <Product
            image={
              "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1664472289661"
            }
            name={"MacBook Pro 13 : M2"}
            detail={"Space Gray Color"}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Components;
