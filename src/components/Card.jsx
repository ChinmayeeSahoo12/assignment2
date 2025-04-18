import { Box } from '@mui/material'
import React from 'react'

const Card = ({item}) => {
  return (
    <Box sx={{
      px:3,
      py:3,
            borderRadius:6,
      // border:'1px solid black',
      backgroundColor:item?.backgroundColor,
      width:'180px'
      
    }}>
      <Box sx={{
        pb:2,
        textAlign:'left',
        fontSize: '14px',
        fontWeight: 600
      }}>{item?.title}</Box>
      <Box sx={{
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
      }}>
        <Box sx={{fontSize: '24px',
        fontWeight: 600}}>{item?.value}</Box>
        <Box>+{item?.change}%</Box>
      </Box>
    </Box>
  )
}

export default Card