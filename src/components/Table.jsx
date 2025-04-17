import React from 'react'
import Header from './Header'
import { Box, Typography } from '@mui/material'
import CustomTable from './CustomTable'

const Table = () => {
  return (
    <Box sx={{
        width:'100%'
    }}>
        {/* here is the header componet */}
        <Header/>
        <Box sx={{
            p:2
        }}>
            <Typography>Order List</Typography>
            <Box>
                <CustomTable/>
            </Box>
        </Box>
    </Box>
  )
}

export default Table