import { Product } from "@/components";
import { Grid, Typography, Box, Button, TextField } from "@mui/material";
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
              "https://cdn.thewirecutter.com/wp-content/media/2022/08/macbook-2048px-9765.jpg"
            }
            name={
              "MacBook Pro 13 : M2MacBook Pro 13 : M2MacBook Pro 13 : M2MacBook Pro 13 : M2"
            }
            detail={"Space Gray Color"}
            price={"43,000"}
            status={"ขายแล้ว 3,045"}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Components;
