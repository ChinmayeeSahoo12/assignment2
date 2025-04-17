import React from 'react';
import { Box, CssBaseline, ThemeProvider, Typography, createTheme } from '@mui/material';
import LeftSide from './components/LeftSide';
import RightSide from './components/RightSide';
import Centre from './components/Centre';
import Routes from './components/Routes';
function App() {
  return (
    <Box sx={{
      display: 'flex',
      // justifyContent: 'space-between',
      // alignItems: 'center',
      width: '100%',
      height: '100vh',
    }}>
      <Box sx={{
        width: '14%',
      }}>
        <LeftSide />
      </Box>
      <Routes/>
      {/* <Box sx={{
        width: '66%',
      }}>
        <Centre /></Box>
      <Box sx={{
        width: '20%',
      }}>
        <RightSide /></Box> */}
    </Box>
  );

}

export default App;









