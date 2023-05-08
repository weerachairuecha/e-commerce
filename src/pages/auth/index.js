import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import SignIn from "./signin";
import SignUp from "./signup";
import PageLayout from "@/components/page-layout";
import Content from "@/components/content";

const AuthPage = () => {
  const [page, setPage] = useState("sign-in"); // sign-in, sign-up

  return (
    <PageLayout backgroundImage={"/auth/background.jpg"}>
      <Content>
        <Grid container spacing={2}>
          <Grid item xs={0} md={8}></Grid>
          <Grid item xs={12} md={4}>
            {page === "sign-in" ? (
              <SignIn handleSignUpButton={() => setPage("sign-up")} />
            ) : null}
            {page === "sign-up" ? (
              <SignUp handleLoginButton={() => setPage("sign-in")} />
            ) : null}
          </Grid>
        </Grid>
      </Content>
    </PageLayout>
  );
};

export default AuthPage;
