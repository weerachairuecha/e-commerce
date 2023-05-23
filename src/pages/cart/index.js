import React, { useState } from "react";
import {
  Box,
  Stack,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  Button,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Collapse,
  IconButton,
} from "@mui/material";
import Header from "@/components/header";
import Content from "@/components/content";
import Footer from "@/components/footer";
import PageLayout from "@/components/page-layout";
import { Add, Remove } from "@mui/icons-material";

const CartPage = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartList, setCartList] = useState([
    {
      id: 1,
      name: "name",
      amount: 2,
      price: 20,
    },
    {
      id: 2,
      name: "name2",
      amount: 4,
      price: 50,
    },
  ]);

  const handleCheckoutButton = () => {};
  return (
    <PageLayout>
      <Content>
        <Divider sx={{ fontSize: "20px" }}>ตะกร้า</Divider>
        <List sx={{ padding: 0 }}>
          {cartList.map((item, index) => {
            return (
              <ProductItem
                key={index}
                name={item.name}
                amount={item.amount}
                price={item.price}
                total={item.price * item.amount}
              />
            );
          })}
        </List>

        <Stack alignItems={"flex-end"}>
          <Button
            variant={"contained"}
            sx={{
              marginTop: "20px",
            }}
            onClick={handleCheckoutButton}
          >
            ชำระเงิน
          </Button>
        </Stack>
      </Content>
    </PageLayout>
  );
};

const ProductItem = ({ name, amount, price, total }) => {
  const [openCollapse, setOpenCollapse] = useState(false);
  const toggleCollapse = () => setOpenCollapse(!openCollapse);

  return (
    <>
      <ListItem
        sx={{ padding: 0, paddingY: "10px", cursor: "pointer" }}
        onClick={toggleCollapse}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Box
            sx={{
              width: "50px",
              height: "30px",
              border: "2px solid",
              borderColor: (theme) => theme.palette.primary.main,
              color: (theme) => theme.palette.primary.main,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "6px",
            }}
          >
            {amount}x
          </Box>
          <Typography sx={{ marginLeft: "4px", flex: 1 }} noWrap>
            {name}
          </Typography>
          <Typography sx={{ width: "80px", textAlign: "right" }}>
            {price}
          </Typography>
          <Typography sx={{ width: "80px", textAlign: "right" }}>
            {total}
          </Typography>
        </Box>
      </ListItem>
      <Collapse in={openCollapse}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <IconButton>
            <Remove />
          </IconButton>
          <Typography sx={{ width: "100px", textAlign: "center" }}>
            {amount}
          </Typography>
          <IconButton>
            <Add />
          </IconButton>
        </Stack>
      </Collapse>
      <Divider />
    </>
  );
};

export default CartPage;
