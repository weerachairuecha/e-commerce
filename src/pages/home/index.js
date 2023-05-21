import { Product } from "@/components";
import Content from "@/components/content";
import PageLayout from "@/components/page-layout";
import { Box, Typography, Grid } from "@mui/material";
import React, { useState } from "react";

const HomePage = () => {
  const [productList, setProductList] = useState([1,2,3,4,5,6,7,8,9]);
  return (
    <PageLayout>
      <Content>
        <Grid container spacing={3} marginTop={3}>
          {productList.map((item, index) => {
            return (
              <Grid item key={index} xs={6} md={4} lg={2}>
                <Product />
              </Grid>
            );
          })}
        </Grid>
      </Content>
    </PageLayout>
  );
};

export default HomePage;
