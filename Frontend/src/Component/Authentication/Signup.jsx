import { React, useState } from "react";
import Axios from "../../Api/axios_api";
import "../../../style/signup.css"
import { Box, TextField, Button } from "@mui/material";
import Snackbar from '@mui/material/Snackbar';



const Signup = () => {
  const [usrname, setusrname] = useState("");
  const [email, setemail] = useState("");
  const [pwd, setpwd] = useState("");
  const [cnfpwd, setcnfpwd] = useState("");
  const [pic, setpic] = useState("");
  const[open,setopen]=useState(false);
  const [snackmsg,setsnackmsg]=useState("");

  



const handleClose=()=>{
  setopen(false);
  setsnackmsg("")  
}

  const Postdetail = (pics) => {
    if (pics===undefined)
    {
      setsnackmsg("Kindly select an image");
    }
    if (pics.type==="image/jpg" || pics.type==="image/png")
    {
      const data= new FormData();
      data.append("file",pics)
      data.append("upload_preset","Chatapp")
      data.append("cloud_name","arun2407app")
      
      
      fetch(`https://api.cloudinary.com/v1_1/Arun2407app/image/upload`,{
        method:'post',
        body:data,
      }).then((res)=>res.json())
      .then(data=>{
        setpic(data.url.toString());
        setopen(true);
        setsnackmsg("Profile Picture Upload succesfully")
      })
      .catch(err=>{
        setopen(true);
        setsnackmsg("Profile Picture Upload Failed")
        console.log(err.message)  ;
      })
    }
    else{
      setopen(true);
      setsnackmsg("choose jpg/png files")           
    }
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
    
    <>
      <TextField
        id="outlined"
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
        }}>
        SignUp
      </Button>

        <Snackbar
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
          message={snackmsg}
        />      
      </>
  );
};

export default Signup;
