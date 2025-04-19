import React from "react";
import {
  Box,
  Typography,
  IconButton,
  InputBase
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsIcon from "@mui/icons-material/Settings";
import LightModeIcon from "@mui/icons-material/LightMode";
import GridViewIcon from "@mui/icons-material/GridView";
import HistoryIcon from "@mui/icons-material/History";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import { Header1Svg, Header2Svg, Header3Svg, Header4svg, Icon1Svg, StarSvg } from "../svg"; // Assuming these are valid custom icons
import { useNavigate } from "react-router-dom";

const LdrawerWidth = 240;
const RdrawerWidth = 240;

export default function Header() {
  const navigation = useNavigate();
  return (
    <Box
      sx={{
        // height: 30,
        borderBottom:'1px solid #1C1C1C1A',
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        p: 2,
        backgroundColor: "white",
        // border: "1px solid yellow",
        position: "relative",
        // mb: 20,
        top: 0,
        right: 0,
        left: 0,
        zIndex: 1100,
        // marginRight: 2,
      }}
    >
      {/* Left section */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
        <Icon1Svg sx={{ color: "#1c1c1c" }} />
        <StarSvg sx={{ color: "#1c1c1c" }} />
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, cursor: "pointer" }}
        onClick={()=>{
          navigation('/')
        }}
        >
          <Typography variant="body2" color="text.secondary">
            Dashboards
          </Typography>
          <Typography variant="body2" color="text.secondary">
            /
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontWeight: 500, color: "#1c1c1c", cursor: "pointer" }}
            onClick={()=>{
              navigation('/table')
            }}
          >
            Default
          </Typography >
        </Box>
      </Box>

      {/* Right section */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        {/* Search bar */}
        <Box
          sx={{
            backgroundColor: "#f5f5f5",
            px: 1.8,
            py: 0.5,
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <SearchIcon sx={{ fontSize: 18, color: "gray" }} />
          <InputBase
            placeholder="Search"
            sx={{ ml: 1, fontSize: 12, width: 120 }}
          />
          <Typography
            variant="caption"
            sx={{ ml: 1, color: "#bbb", fontSize: 12 }}
          >
            ⌘/
          </Typography>
        </Box>

        {/* Icons */}
        <Box sx={{display: "flex", alignItems: "center" }}>
          <IconButton>
            <Header1Svg />
          </IconButton>
          <IconButton>
            <Header2Svg />
          </IconButton>
          <IconButton>
            <Header3Svg />
          </IconButton>
          <IconButton>
            <Header4svg />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
