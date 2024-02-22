import { Avatar } from '@mui/material'
import React from 'react'

export const BadgeUi = ({badge,size}) => {
  return (
    <div>
         <Avatar
    alt="Remy Sharp"
    src={badge}
    sx={{
      width: size?size:79,
      height: size?size:79
    }}></Avatar>
    </div>
  )
}
