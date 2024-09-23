import Axios from "../Api/axios_api";
import * as React from 'react';
import { useEffect, useState } from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from "@mui/material/ListItemButton"
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {Box} from "@mui/system";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

const ChatPage = () => {
  const [chats, setchats] = useState([]);

  let ready = false;

  useEffect(() => {
    if (ready) {
      fetchdata();
      console.log("Inside use Effect");
    }

    ready = true;
  }, []);
  const fetchdata = async () => {
    console.log("Inside FetchData");
    const { data } = await Axios.get("/api/chat");
    setchats(data);
    console.log(data);
  };


  return (
    <>
    <Box sx={{width:'100%',bgcolor: '#f4f4f4',display: 'flex',flexDirection: 'row'}}>
      <List  sx={{borderRadius:5,width:'25%',height:'100%',bgcolor: 'blue',m:2, bgcolor: 'white' }}>
      {chats.map(value=>(          
          <ListItem alignItems="flex-start">
            <ListItemButton>      
            <AccountCircleIcon></AccountCircleIcon>        
              <ListItemText key={`chatname`} primary="Ennamo Nadakuthu"></ListItemText>
            </ListItemButton>                         
          </ListItem>
        ))}
      </List>
    
    <List  sx={{m:2, bgcolor: 'white',borderRadius:5 ,width:'75%',height:'100%',}}>
      {chats.map(value=>(          
          <ListItem alignItems="flex-start">
            <ListItemButton>      
            <AccountCircleIcon></AccountCircleIcon>        
              <ListItemText key={`chatname`} primary="Ennamo Nadakuthu"></ListItemText>
            </ListItemButton>                         
          </ListItem>
        ))}
        
      </List>
      
    </Box>
    <Box sx={{display:"flex",flexDirection:"row"}}>      
      <TextField sx={{width:'80%',m:5}}></TextField>
        <Button  endIcon={<SendIcon />}>
          
        </Button>  
    </Box>

    </>
  );
};

export default ChatPage;
