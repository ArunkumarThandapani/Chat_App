import { Routes, Route } from "react-router-dom";
import "../src/App.css";
import Homepage from "./Pages/Homepage";
import ChatPage from "./Pages/ChatPage";
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import { useState } from "react";
import Login from "./Component/Authentication/Login";
import Signup from "./Component/Authentication/Signup";

function App() {
  const [anchr,setanchr]=useState(false);
  const open = Boolean(anchr);

  const menuitem=["Home","Chat",];
  const Actitems=["Login","Signup"];
  const ActaftLgn=["Profile","SignOut"];

  const handlemenuclick=(event)=>{
      setanchr(event.currentTarget);
  }
  const handleclose=(event)=>{
    setanchr(null);
}

  const rendermenu=(menulst)=>{
      return menulst.map(item=><li><a href={`/${item}/`}>{item}</a> </li>)
  }
  const menuList=(menulst)=>{
    return menulst.map(item=><MenuItem className="Menuitem"  onClick={handleclose}>{item}</MenuItem>)
  }  

  return (


    <>
      <div className="AppTit">
        <h1 className="Apphead">Nudge</h1>                   
      </div>
          
      <nav className="AppMenu">

          <IconButton  className="menuhd" color="secondary"
            aria-controls="basic-menu"
            aria-haspopup="true"
            aria-expanded={open ? true :undefined}
            onClick={handlemenuclick}            
          >
            <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>            
          </IconButton>
          
          
          <Menu className="Menu" id="basic-menu" anchorEl={anchr} open={open}>
            {menuList(menuitem)}              
          </Menu>  

          <Menu className="Menu" id="Account-menu" anchorEl={anchr} open={open}>
            {menuList(Actitems)}              
          </Menu>  
          

          
          <ul className="Mnuitems">            
            {rendermenu(menuitem)}
          </ul>

        <div className="userdet">
          <Badge sx={{ml:2}} badgeContent={4} color="primary">
            <NotificationsActiveIcon sx={{fontSize:35}} badge={4} color="secondary"/>
          </Badge>
          <Badge sx={{ml:2}} color="primary" showZero
            aria-controls="Account-menu"
            aria-haspopup="true"
            aria-expanded={open ? true :undefined}
            onClick={handlemenuclick}            
          >
              <AccountCircleIcon sx={{fontSize:35}} color="secondary"/>
          </Badge>
        </div>
        
        
        
      </nav>      




      <div className="App">
        <Routes>
          <Route path="/" Component={Homepage}></Route>
          <Route path="/login" Component={Login}></Route>
          <Route path="/signup" Component={Signup}></Route>
          <Route path="/chat" Component={ChatPage}></Route>
        </Routes>
      </div>
      <div className="Appfoot">

      </div>      
    </>
  );
}

export default App;
