import { Box } from "@mui/material";
import React from "react";
import Header from "./Header";
import data from "../data.json";
import Card from "./Card";
import RightSide from "./RightSide";
import { BarChart } from "@mui/x-charts/BarChart";
import TotalUsersChart from "./TotalUsersChart";
import TrafficByUser from "./TrafficByUser";
import TrafficByDevice from "./TrafficByDevice";
import TrafficByLocation from "./TrafficByLocation";

export const Centre = () => {
  console.log("data", data);
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
      }}
    >
      <Box
        sx={{
          width: "80%",
          height: "100vh",
          overflow: "auto",
          scrollbarWidth: "none", // For Firefox
          "&::-webkit-scrollbar": {
            display: "none", // For Chrome, Safari, Edge
          },
        }}
      >
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
              display: "flex",
              gap: 1,
              justifyContent: "space-evenly",
            }}
          >
            {/* here we implemnnet the card  */}
            {data?.stats?.map((item) => (
              <Card item={item} />
            ))}
          </Box>
          {/* Graph section */}

          {/* <BarChart sx={{ width: '70%'}}
      xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'sanket'] }]}
      series={[{ data: [4,8,4] }, { data: [1, 8, 3] }, { data: [2, 8, 6] }]}
      height={300}
    /> */}
          <Box
            sx={{
              // width:'100%',
              display: "flex",
              gap: 2,
              // backgroundColor:'red'
            }}
          >
            <Box
              sx={{
                width: "662px",
                // height:'100px',
                p: 2,
                backgroundColor: "transparent",
                // backgroundColor:'pink'
              }}
            >
              <TotalUsersChart />
            </Box>
            <Box
              sx={{
                width: "200px",
                pt: 2,
                // height:'100px',
                // p: 2,
                // gap:16,
                // backgroundColor:'blue'
              }}
            >
              <TrafficByUser />
            </Box>
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              gap: 2,
              // backgroundColor:'red',
              // mt:0,
            }}
          >
            <Box
              sx={{
                width: "50%",
                height: "200px",
                // backgroundColor:'black',
              }}
            >
              <TrafficByDevice />
            </Box>
            <Box
              sx={{
                width: "50%",
                height: "200px",
                // backgroundColor:'green',
              }}
            >
              <TrafficByLocation />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: "20%",
        }}
      >
        <RightSide />
      </Box>
    </Box>
  );
};
export default Centre;
