import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Typography,
  Divider,
  Stack,
  Avatar,
} from "@mui/material";
// import {dashboardData} from "../data/data";

// const RdrawerWidth = 240;
import data from "../data.json";
const RightSide = () => {
  return (
    <Box
      sx={{
        // width: RdrawerWidth,
        height: "100vh",
        flexShrink: 0,
        boxSizing: "border-box",
        padding: 2,
        color: "#1c1c1c",
        borderLeft: "1px solid #e0e0e0",
        overflow: "auto",
      }}
    >
      <Box>
        <Typography fontWeight={600} mb={2}>
          Notification
        </Typography>
        <Stack spacing={2}>
          {data?.notifications?.map((item, index) => (
            <NotificationItem
              key={index}
              icon={<Avatar src={item.avatar} sx={{ width: 40, height: 40 }} />}
              time={item.time}
              message={item.message}
            />
          ))}
        </Stack>
      </Box>
      <Box sx={{
        pt:2
      }}>
        <Typography fontWeight={600} mb={2}>
        Activities
        </Typography>
        <Stack spacing={2}>
          {data?.activities?.map((item, index) => (
            <NotificationItem
              key={index}
              icon={<Avatar src={item.user?.avatar} sx={{ width: 40, height: 40 }} />}
              time={item.time}
              message={item.message}
            />
          ))}
        </Stack>
      </Box>
      <Box sx={{
        pt:2
      }}>
        <Typography fontWeight={600} mb={2}>
          Contact
        </Typography>
        {data?.contacts?.map((item) => (
          <Box sx={{
            py:1,
            display:'flex',
            alignItems:'center',
            gap:2
          }}>
            <Avatar src={item?.avatar} sx={{ width: 40, height: 40 }}  />
          <Box>{item.name}</Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

function NotificationItem({ icon, message, time }) {
  return (
    <Stack direction="row" spacing={2} alignItems="center">
      {icon}
      <Box>
        <Typography fontSize={13} fontWeight={500}>
          {message}
        </Typography>
        <Typography fontSize={12} color="text.secondary">
          {time}
        </Typography>
      </Box>
    </Stack>
  );
}

export default RightSide;
