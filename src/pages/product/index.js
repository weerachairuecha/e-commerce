import React, { useRef, useState } from "react";
import PageLayout from "@/components/page-layout";
import Content from "@/components/content";
import { Product } from "@/components";
import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";

const ProductPage = () => {
  const [productList, setProductList] = useState([1, 2, 3, 4, 5, 6, 7]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  return (
    <PageLayout>
      <Content>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <FormControl fullWidth>
              <InputLabel id={"category-select-label"}>หมวดหมู่</InputLabel>
              <Select labelId="category-select-label" label="หมวดหมู่">
                <MenuItem>1</MenuItem>
                <MenuItem>2</MenuItem>
                <MenuItem>3</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={8}>
            <TextField fullWidth label={"ค้นหา"} />
          </Grid>
        </Grid>
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

export default ProductPage;
