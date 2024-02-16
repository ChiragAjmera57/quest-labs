import { Box, Typography } from '@mui/material'
import React from 'react'

export const BoxModal = ({data,label}) => {
  return (
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
      {data}
    </Typography>
    <Typography
      align="center"
      style={{ color: 'white', marginTop: '5px' }} // Adjust the margin-top for spacing
      variant="subtitle1" // Using variant="subtitle1" for better visual hierarchy
    >
      {label}
    </Typography>
  </Box>
  )
}
