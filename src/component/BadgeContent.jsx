import { Avatar, Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Modal, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import badge from "./badge.png"
import { getUserBadges } from '../utils/fetchUserBadge'
import { BadgeUi } from './BadgeUi'

export const BadgeContent = () => {
  const [open, setOpen] = React.useState(false);
  const [currBadge, setCurrBadge] = React.useState(null);
  const handleOpen = (ele) => {
    setCurrBadge(ele)
    console.log(ele)
        
    setOpen(true);

  }
  const handleClose = () => setOpen(false);

  const [userBadge,setUserBadge] = useState(null)
  useEffect(()=>{
    getUserBadges().then((res)=>{
      setUserBadge(res.data)
    })
  },[])
  return (
    <Box mt={4} sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', overflow: 'auto' }}>
  {userBadge?.map((ele, index) => {
    return (
      <div onClick={()=>handleOpen(ele)}>
          <Box  key={index} sx={{ width: '100px', margin: '10px', textAlign: 'center' }}>
        <BadgeUi badge={ele.imageUrl} />
      </Box>
      </div>
      
    );
    
  })}
 <Dialog open={open} onClose={handleClose}>
      <DialogContent>
      <Avatar
      
    alt="Remy Sharp"
    src={currBadge?.imageUrl}
    sx={{
      margin:'auto',
      width: 110,
      height: 110,
    }}></Avatar>
        <Typography variant="body1" align="center" mt={2}>Badge Unlocked</Typography>
        <Typography variant="body2" align="center">Congratulations!</Typography>
      </DialogContent>
      <DialogActions>
        {/* <Button onClick={handleClose} variant="contained">Close</Button> */}
      </DialogActions>
    </Dialog>
</Box>

  
  )
}
