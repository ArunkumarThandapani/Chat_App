import { Container, Box, Tab, Tabs } from "@mui/material";
import { React, useState } from "react";
import Login from "../Component/Authentication/Login";
import Signup from "../Component/Authentication/Signup";

const Homepage = () => {
  const [value, setValue] = useState("Login");
  const [bxht, setbxht] = useState("40vh");
  const [visLgn, setvisLgn] = useState(true);

  const handleChange = (event, newValue) => {
    console.log(newValue);
    if (newValue === "SignUp") {
      setvisLgn(false);
      setbxht("50vh");
    }
    if (newValue === "Login") {
      setvisLgn(true);
      setbxht("40vh");
    }

    setValue(newValue);
  };

  return (
    <Container
      sx={{
        paddingTop: 5,
        maxWidth: "sm",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
      }}
    >
      <Box
        sx={{
          width: "30vw",
          height: "5vh",
          bgcolor: "whitesmoke",
          color: "purple",
          variant: "text",
          borderRadius: 5,
          opacity: 0.8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "Bold",
        }}
      >
        VConnect
      </Box>

      <Box
        sx={{
          width: "30vw",
          height: bxht,
          bgcolor: "whitesmoke",
          color: "black",
          variant: "text",
          borderRadius: 5,
          opacity: 0.8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="secondary tabs example"
          sx={{
            textColor: "secondary",
            indicatorColor: "secondary",
            display: "-ms-inline-flexbox",
            alignContent: "flex-start",
          }}
        >
          <Tab value="Login" label="Login" />
          <Tab value="SignUp" label="SignUp" />
        </Tabs>
        {visLgn ? <Login /> : <Signup />}
      </Box>
    </Container>
  );
};

export default Homepage;
