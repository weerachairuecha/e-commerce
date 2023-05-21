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

const SignIn = ({ handle = () => {}, handleSignUpButton = () => {} }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [data, setData] = useState({
    email: "",
    password: "",
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
        <Button variant={"contained"}>Login</Button>
        <Divider />
        <Typography textAlign={"center"}>
          Have no account? goto{" "}
          <Link
            sx={{ cursor: "pointer" }}
            color={"primary"}
            onClick={handleSignUpButton}
          >
            Sign Up.
          </Link>
        </Typography>
      </Stack>
    </Paper>
  );
};

export default SignIn;
