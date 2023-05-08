import {
  Card,
  Paper,
  Stack,
  TextField,
  Button,
  InputAdornment,
  IconButton,
  Divider,
  Typography,
  Link,
} from "@mui/material";
import React, { useState } from "react";
import { VisibilityOutlined, VisibilityOffOutlined } from "@mui/icons-material";

const SignUp = ({ handleLoginButton = () => {}, handle = () => {} }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [data, setData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (event) => {
    let name = event.target.name;
    let newValue = event.target.value;
    setData((prev) => ({
      ...prev,
      [name]: newValue,
    }));
  };

  return (
    <Paper sx={{ padding: 2, width: "100%" }}>
      <Stack spacing={2}>
        <TextField
          name={"fullName"}
          value={data.fullName}
          onChange={handleChange}
          fullWidth
          label={"Full name"}
        />
        <TextField
          name={"email"}
          value={data.email}
          onChange={handleChange}
          fullWidth
          label={"Email address"}
        />
        <TextField
          name={"password"}
          value={data.password}
          onChange={handleChange}
          fullWidth
          type={showPassword ? "text" : "password"}
          label={"Password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position={"end"}>
                <IconButton onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? (
                    <VisibilityOutlined />
                  ) : (
                    <VisibilityOffOutlined />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <TextField
          name={"confirmPassword"}
          value={data.confirmPassword}
          onChange={handleChange}
          fullWidth
          type={showConfirmPassword ? "text" : "password"}
          label={"Confirm password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position={"end"}>
                <IconButton
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <VisibilityOutlined />
                  ) : (
                    <VisibilityOffOutlined />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Button variant={"contained"}>Sign up</Button>
        <Divider />
        <Typography textAlign={"center"}>
          Already account? goto{" "}
          <Link
            sx={{ cursor: "pointer" }}
            color={"primary"}
            onClick={handleLoginButton}
          >
            Login.
          </Link>
        </Typography>
      </Stack>
    </Paper>
  );
};

export default SignUp;
