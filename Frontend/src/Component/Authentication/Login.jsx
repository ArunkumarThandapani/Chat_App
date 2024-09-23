import { React, useState,usena } from "react";
import {useNavigate} from "react-router-dom"

import { Box, TextField, Button, Snackbar } from "@mui/material";
import Axios from "../../Api/axios_api";


const Login = () => {

  const navigate= useNavigate();
  const [email, setemail] = useState("");
  const [pwd, setpwd] = useState("");
  const [open, SetOpen] = useState(false);
  const [msg, SetMsg] = useState("");
  const user_login = async () => {
    const getres = await Axios.post("/api/user/Login", {
      email: email,
      password: pwd,
    })
      .then(() => {
        SetMsg("Login Successfull");
        navigate("/chat")
      })
      .catch(() => {
        SetMsg("Login Failed");
      });

    console.log(getres);
    SetOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    SetOpen(false);
  };

  return (
    <>
      
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
          }}>
          Login
        </Button>
      
      <Snackbar
        open={open}
        autoHideDuration={2000}
        message={msg}
        onClose={handleClose}
      />
    </>
  );
};

export default Login;
