import React, { useState } from "react";
import {Drawer,List,ListItem,ListItemIcon,ListItemText,Box,Typography,Collapse,} from "@mui/material";
import {ExpandLess,ExpandMore} from "@mui/icons-material";
import { AccountSvg, BlogSvg, CorporateSvg, DashboardSvg, EcommerceSvg, OnlineSvg, ProjectSvg, SocialSvg, UserProfileSvg } from "../svg";
import Icon from "../assets/IconSet.png";
import { useNavigate } from "react-router-dom";

const LdrawerWidth = 240;
const dotstyle = {
  width: 6,
  height: 6,
  backgroundColor: "#a8c5da",
  borderRadius: "50%",
};

const LeftSide = () => {
  const [openUserProfile, setOpenUserProfile] = useState(false);
  const navigation = useNavigate();
  const handleUserProfileClick = () => {
    setOpenUserProfile(!openUserProfile);
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: LdrawerWidth,
        // flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          // width: LdrawerWidth,
          boxSizing: "border-box",
          padding: 2,
          color: "#1c1c1c",
          // overflow: 'auto',
          // height: '100vh',
          cursor: "pointer"
        },
      }}
    >
      {/* Logo */}
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <img
          src={Icon}
          alt="User"
          style={{ width: 24, height: 24, marginRight: 16, marginBottom: 16 }}
        />
        <Typography sx={{ mb: 2 }}>ByeWind</Typography>
      </Box>

      {/* Favorites & Recent */}
      <Box sx={{ display: "flex", gap: 3, mb: 1 }}>
        <Typography variant="subtitle2" color="textSecondary">
          Favorites
        </Typography>
        <Typography variant="subtitle2" color="textSecondary">
          Recent
        </Typography>
      </Box>

      {/* Quick Access List */}
      <List dense>
        <ListItem button>
          <ListItemIcon sx={{ minWidth: 20 }}>
            <Box sx={dotstyle} />
          </ListItemIcon>
          <ListItemText primary="Overview" />
        </ListItem>
        <ListItem button>
          <ListItemIcon sx={{ minWidth: 20 }}>
            <Box sx={dotstyle} />
          </ListItemIcon>
          <ListItemText primary="Projects" />
        </ListItem>
      </List>

      {/* Dashboards */}
      <Typography variant="subtitle2" color="textSecondary" sx={{ mt: 2 }}>
        Dashboards
      </Typography>
      <List dense>
        <ListItem button sx={{ display: "flex", alignItems: "center", gap: 2 }}onClick={()=>{
            navigation('/')
          }}>
          <ListItemIcon sx={{ minWidth: 0 }}>
            <DashboardSvg />
          </ListItemIcon>
          <ListItemText primary="Default" />
        </ListItem>
        <ListItem button sx={{ display: "flex", alignItems: "center", gap: 2 }} onClick={()=>{
            navigation('/table')
          }}>
          <ListItemIcon sx={{ minWidth: 0 }}>
            <EcommerceSvg />
          </ListItemIcon>
          <ListItemText primary="eCommerce"  />
        </ListItem>
        <ListItem button sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <ListItemIcon sx={{ minWidth: 0 }}>
            <ProjectSvg />
          </ListItemIcon>
          <ListItemText primary="Projects" />
        </ListItem>
        <ListItem button sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <ListItemIcon sx={{ minWidth: 0 }}>
            <OnlineSvg />
          </ListItemIcon>
          <ListItemText primary="Online Courses" />
        </ListItem>
      </List>

      {/* Pages */}
      <Typography variant="subtitle2" color="textSecondary" sx={{ mt: 2 }}>
        Pages
      </Typography>
      <List dense>
        {/* Collapsible User Profile */}
        <ListItem button onClick={handleUserProfileClick}>
          {openUserProfile ? (
            <ListItemIcon sx={{ minWidth: 0, mr: 1 }}>
              <ExpandLess />
            </ListItemIcon>
          ) : (
            <ListItemIcon sx={{ minWidth: 0, mr: 1 }}>
              <ExpandMore />
            </ListItemIcon>
          )}
          <ListItemIcon sx={{ minWidth: 0, mr: 2 }}>
            <UserProfileSvg />
          </ListItemIcon>
          <ListItemText primary="User Profile" />
        </ListItem>

        <Collapse in={openUserProfile} timeout="auto" unmountOnExit>
          <List dense disablePadding sx={{ pl: 4 }}>
            <ListItem button>
              <ListItemIcon sx={{ minWidth: 20 }}></ListItemIcon>
              <ListItemText primary="Overview" />
            </ListItem>
            <ListItem button>
              <ListItemIcon sx={{ minWidth: 20 }}></ListItemIcon>
              <ListItemText primary="Projects" />
            </ListItem>
            <ListItem button>
              <ListItemIcon sx={{ minWidth: 20 }}></ListItemIcon>
              <ListItemText primary="Campaign" />
            </ListItem>
            <ListItem button>
              <ListItemIcon sx={{ minWidth: 20 }}></ListItemIcon>
              <ListItemText primary="Document" />
            </ListItem>
            <ListItem button>
              <ListItemIcon sx={{ minWidth: 20 }}></ListItemIcon>
              <ListItemText primary="Follower" />
            </ListItem>
          </List>
        </Collapse>

        {/* Other Pages */}
        <ListItem button sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <ListItemIcon sx={{ minWidth: 0 }}>
            <AccountSvg />
          </ListItemIcon>
          <ListItemText primary="Account" />
        </ListItem>
        <ListItem button sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <ListItemIcon sx={{ minWidth: 0 }}>
            <CorporateSvg />
          </ListItemIcon>
          <ListItemText primary="Corporate" />
        </ListItem>
        <ListItem button sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <ListItemIcon sx={{ minWidth: 0 }}>
            <BlogSvg />
          </ListItemIcon>
          <ListItemText primary="Blog" />
        </ListItem>
        <ListItem button sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <ListItemIcon sx={{ minWidth: 0 }}>
            <SocialSvg />
          </ListItemIcon>
          <ListItemText primary="Social" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default LeftSide;
