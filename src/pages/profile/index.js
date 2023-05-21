import React, { useState } from "react";
import { Box, Grid, TextField, Typography } from "@mui/material";
import Content from "@/components/content";
import Header from "@/components/header";
import Footer from "@/components/footer";
import PageLayout from "@/components/page-layout";
const Profile = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  return (
    <PageLayout>
      <Content>
        <img
          src={"https://cdn-icons-png.flaticon.com/512/3135/3135823.png"}
          style={{ width: 100, height: 100 }}
        />

        <Grid container spacing={3}>
          <Grid item md={4} xs={12}>
            <TextField
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              autoComplete="off"
              fullWidth
              label={"ชื่อ"}
            />
          </Grid>
          <Grid item md={4} xs={12}>
            <TextField
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="off"
              fullWidth
              label={"อีเมล"}
            />
          </Grid>
        </Grid>
      </Content>
    </PageLayout>
  );
};

export default Profile;
