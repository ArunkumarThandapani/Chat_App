import { React, useState } from "react";

import { Box, TextField, Button } from "@mui/material";
import Axios from "../../Api/axios_api";

const Login = () => {
  const [email, setemail] = useState("");
  const [pwd, setpwd] = useState("");
  const user_login = async () => {
    const getres = await Axios.post("/api/user/Login", {
      email: email,
      password: pwd,
    });
    console.log(getres);
  };

  return (
    <Box
      sx={{
        width: "90%",
        height: "50%",
        bgcolor: "whitesmoke",
        color: "black",
        variant: "text",
        borderRadius: 5,
        opacity: 0.8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontSize: "",
        gap: 2,
        paddingBlock: 5,
      }}
    >
      <TextField
        id="Lgn_email"
        label="Email"
        variant="outlined"
        width="25%"
        value={email}
        onChange={(e) => setemail(e.target.value)}
      />
      <TextField
        id="Lgn_pwd"
        label="Password"
        variant="outlined"
        type="password"
        width="25%"
        value={pwd}
        onChange={(e) => setpwd(e.target.value)}
      />
      <Button
        id="login_btn"
        onClick={() => {
          user_login();
        }}
        sx={{
          bgcolor: "blueviolet",
          height: "25%",
          width: "50%",
          color: "black",
          fontWeight: "bold",
          textColor: "black",
          alignItems: "center",
        }}
      >
        Login
      </Button>
    </Box>
  );
};

export default Login;
