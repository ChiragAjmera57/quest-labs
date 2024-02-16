import { Avatar } from '@mui/material'
import React from 'react'

export const BadgeUi = ({badge}) => {
  return (
    <div>
         <Avatar
    alt="Remy Sharp"
    src={badge}
    sx={{
      width: 79,
      height: 79,
    }}></Avatar>
    </div>
  )
}
