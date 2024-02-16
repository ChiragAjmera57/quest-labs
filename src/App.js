import logo from "./logo.svg";
import "./App.css";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Avatar, Box, Container, Typography } from "@mui/material";
import profileImg from "../src/component/profile.png";
import { CustomTabPanel } from "./component/Tab";
import { useState } from "react";
function App() {
  
  return (
    <Box
      m={1}
      sx={{ bgcolor: "#7052ff", height: "98vh", position: "relative" }}
    >
      <Typography
        align="center"
        pt={5}
        variant="h5"
        style={{ color: "white", fontFamily:'Roboto', }}
      >
        Profile
      </Typography>
      <Box
        m="auto"
        width="95%"
        height="75%"
        sx={{
          bgcolor: "white",
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          borderTopRightRadius: "20px",
          borderTopLeftRadius: "20px",
        }}
      >
        <Avatar
          alt="Remy Sharp"
          src={profileImg}
          sx={{
            width: 79,
            height: 79,
            bottom: 40,
            left: 0,
            right: 0,
            marginLeft: "auto",
            marginRight: "auto",
            borderTopRightRadius: "20px",
            borderTopLeftRadius: "20px",
          }}
        />
        <Typography
          align="center"
          style={{ fontSize:'20px', fontFamily:'Roboto', fontWeight:'bolder',color:'#535353' }}
        >
          Rich Explorer
        </Typography>
        <Container  sx={{display:'flex',margin:'auto',justifyContent:'space-between',marginTop:'20px'}} >
        <Box 
      sx={{ 
        bgcolor: "#7052ff",
        width: '25%', 
        height: '100px', 
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Typography
        align="center"
        style={{ color: 'white', marginBottom: '5px' }} // Adjust the margin-bottom for spacing
        variant="h6" // Using variant="h6" for better visual hierarchy
      >
        2001
      </Typography>
      <Typography
        align="center"
        style={{ color: 'white', marginTop: '5px' }} // Adjust the margin-top for spacing
        variant="subtitle1" // Using variant="subtitle1" for better visual hierarchy
      >
        Points
      </Typography>
    </Box>
    <Box 
      sx={{ 
        bgcolor: "#7052ff",
        width: '25%', 
        height: '100px', 
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Typography
        align="center"
        style={{ color: 'white', marginBottom: '5px' }} // Adjust the margin-bottom for spacing
        variant="h6" // Using variant="h6" for better visual hierarchy
      >
        #1
      </Typography>
      <Typography
        align="center"
        style={{ color: 'white', marginTop: '5px' }} // Adjust the margin-top for spacing
        variant="subtitle1" // Using variant="subtitle1" for better visual hierarchy
      >
        Rank
      </Typography>
    </Box>
    <Box 
      sx={{ 
        bgcolor: "#7052ff",
        width: '25%', 
        height: '100px', 
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Typography
        align="center"
        style={{ color: 'white', marginBottom: '5px' }} // Adjust the margin-bottom for spacing
        variant="h6" // Using variant="h6" for better visual hierarchy
      >
        3
      </Typography>
      <Typography
        align="center"
        style={{ color: 'white', marginTop: '5px' }} // Adjust the margin-top for spacing
        variant="subtitle1" // Using variant="subtitle1" for better visual hierarchy
      >
        Level
      </Typography>
    </Box>
        </Container>
       <CustomTabPanel />
      </Box>
    </Box>
  );
}

export default App;
