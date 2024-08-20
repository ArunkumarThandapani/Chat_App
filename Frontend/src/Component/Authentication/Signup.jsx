import { React, useState } from "react";
import Axios from "../../Api/axios_api";

import { Box, TextField, Button } from "@mui/material";

const Signup = () => {
  const [usrname, setusrname] = useState("");
  const [email, setemail] = useState("");
  const [pwd, setpwd] = useState("");
  const [cnfpwd, setcnfpwd] = useState("");
  const [pic, setpic] = useState("");

  const Postdetail = (e) => {
    const fff = e.target.value;
    return fff;
  };

  const registeruser = async () => {
    const finoutput = await Axios.post("/api/user", {
      name: usrname,
      email: email,
      password: pwd,
      pic: pic,
    });
    console.log(finoutput);
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
        id="sgnup_usrnm"
        label="UserName"
        variant="outlined"
        width="25%"
        value={usrname}
        onChange={(e) => setusrname(e.target.value)}
      />
      <TextField
        id="sgnup_email"
        label="Email"
        variant="outlined"
        width="25%"
        value={email}
        onChange={(e) => setemail(e.target.value)}
      />
      <TextField
        id="sgnup_pwd"
        label="Password"
        variant="outlined"
        type="password"
        width="25%"
        value={pwd}
        onChange={(e) => setpwd(e.target.value)}
      />
      <TextField
        variant="outlined"
        type="password"
        autoComplete="current-password"
        id="sgnup_cnfpwd"
        label="Confirm Password"
        width="25%"
        value={cnfpwd}
        onChange={(e) => setcnfpwd(e.target.value)}
      />
      <TextField
        variant="outlined"
        helperText="Upload Profile Picture"
        type="file"
        id="Profile_pic"
        width="25%"
        onChange={(e) => Postdetail(e.target.files[0])}
      />

      <Button
        id="signup_btn"
        onClick={() => {
          registeruser();
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
        SignUp
      </Button>
    </Box>
  );
};

export default Signup;
