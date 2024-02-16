import { Avatar, Box } from '@mui/material'
import React from 'react'
import badge from "./badge.png"

export const BadgeContent = () => {
  return (
   <Box mt={4} sx={{display:'flex',flexWrap:'wrap',justifyContent:'space-evenly'}}>
    <Avatar
    alt="Remy Sharp"
    src={badge}
    sx={{
      width: 79,
      height: 79,
    }}>

    </Avatar>
    <Avatar
    alt="Remy Sharp"
    src={badge}
    sx={{
      width: 79,
      height: 79,
    }}>

    </Avatar>
    <Avatar
    alt="Remy Sharp"
    src={badge}
    sx={{
      width: 79,
      height: 79,
    }}>

    </Avatar>
          
        
   </Box>
  )
}
