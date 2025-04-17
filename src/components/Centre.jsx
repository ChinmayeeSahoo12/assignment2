import { Box } from "@mui/material";
import React from "react";
import Header from "./Header";
import data from "../data.json";
import Card from "./Card";
import RightSide from "./RightSide";
export const Centre = () => {
  console.log("data", data);
  return (
    <Box sx={{
        display:'flex',
        width:'100%'
    }}>

    <Box sx={{
        width:'80%'
    }}>
      <Header />
      <Box
        sx={{
          p: 2,
        }}
      >
        <Box>Today</Box>
        <Box
          sx={{
            pt: 2,
            pb: 2,
            display:'flex',
            gap:1,
            justifyContent:'space-evenly'
          }}
        >
          {/* here we implemnnet the card  */}
          {data?.stats?.map((item) => (
            <Card item={item} />
          ))}
        </Box>
        {/* Graph section */}
        <Box sx={{
            // width:'100%',
            display:'flex',
            backgroundColor:'red'
        }}>
            <Box sx={{
                width:'70%',
                height:'200px',
                backgroundColor:'pink'
            }}>1</Box>
            <Box sx={{
                width:'30%',
                height:'200px',
                backgroundColor:'blue'
            }}>2</Box>
        </Box>
        <Box sx={{
            // width:'100%',
            display:'flex',
            backgroundColor:'red',
            mt:2
        }}>
            <Box sx={{
                width:'50%',
                height:'200px',
                backgroundColor:'black'
            }}>1</Box>
            <Box sx={{
                width:'50%',
                height:'200px',
                backgroundColor:'green'
            }}>2</Box>
        </Box>
      </Box>
    </Box>
    <Box sx={{
        width:'20%',
    }}>
        <RightSide/>
    </Box>
    </Box>
  );
};
export default Centre;
