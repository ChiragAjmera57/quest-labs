import { Avatar, Box,  Dialog, DialogActions, DialogContent,  Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getUserBadges } from '../utils/fetchUserBadge'
import { BadgeUi } from './BadgeUi'
import badge1 from '../assets/badge1.png'
import badge2 from '../assets/badge2.png'
import badge3 from '../assets/badge3.png'
import badge4 from '../assets/badge4.png'
import badge5 from '../assets/badge5.png'
import MyModal from './Modal'


export const BadgeContent = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);  
  
  const setModalState = (value) => setModalIsOpen(value);

  const [userBadge,setUserBadge] = useState(null)

  return (
    <Box mt={4} sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', overflow: 'auto' }}>

   <div onClick={()=>{setUserBadge(badge1);setModalIsOpen(true)}} >
          <Box   sx={{ width: '100px', margin: '10px', textAlign: 'center' }}>
        <BadgeUi  badge={badge1} />
      </Box>
      </div>
      <div onClick={()=>{setUserBadge(badge2);setModalIsOpen(true)}}>
          <Box  sx={{ width: '100px', margin: '10px', textAlign: 'center' }}>
        <BadgeUi badge={badge2} />
      </Box>
      </div>
      <div onClick={()=>{setUserBadge(badge3);setModalIsOpen(true)}}>
          <Box  sx={{ width: '100px', margin: '10px', textAlign: 'center' }}>
        <BadgeUi badge={badge3} />
      </Box>
      </div>
      <div onClick={()=>{setUserBadge(badge4);setModalIsOpen(true)}}>
          <Box  sx={{ width: '100px', margin: '10px', textAlign: 'center' }}>
        <BadgeUi badge={badge4} />
      </Box>
      </div>
      <div onClick={()=>{setUserBadge(badge5);setModalIsOpen(true)}}>
          <Box  sx={{ width: '100px', margin: '10px', textAlign: 'center' }}>
        <BadgeUi badge={badge5} />
      </Box>
      </div>
<MyModal modalIsOpen={modalIsOpen} badge={userBadge} setModalIsOpen={setModalState} />
</Box>

  
  )
}
