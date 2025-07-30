import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Tooltip,
  useTheme,
  Box
} from "@mui/material";
import {
  Home,
  Info,
  Code,
  Work,
  School,
  Handyman,
  ContactMail,
  Menu,
  ChevronLeft
} from "@mui/icons-material";

const drawerWidth = 220;

const navItems = [
  { label: "Home", icon: <Home />, link: "#home" },
  { label: "About", icon: <Info />, link: "#about" },
  { label: "Projects", icon: <Code />, link: "#projects" },
  { label: "Experience", icon: <Work />, link: "#experience" },
  { label: "Education", icon: <School />, link: "#education" },
  { label: "Skills & Tools", icon: <Handyman />, link: "#skillsandtools" },
  { label: "Contact", icon: <ContactMail />, link: "#contact" },

];

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Drawer
      variant="permanent"
      anchor="right"
      open={open}
      sx={{
        width: open ? drawerWidth : 60,
        flexShrink: 0,
        whiteSpace: "nowrap",
        boxSizing: "border-box",
        position: "fixed",
        right: 0,
        transition: theme.transitions.create("width", {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
        "& .MuiDrawer-paper": {
          width: open ? drawerWidth : 60,
          transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
          overflowX: "hidden",
          backgroundColor: "#121212",
          color: "#f5f5f5",
          borderRight: "none",
        },
        "& .MuiListItemIcon-root": {
          color: "#f5f5f5",
        },
        "& .MuiTypography-root": {
          color: "#f5f5f5",
        }
      }}
        >
      <Box
        sx={{
          display: "flex",
          justifyContent: open ? "flex-end" : "center",
          p: 1,
        }}
      >
        <IconButton onClick={toggleDrawer} sx={{ color: "#f5f5f5" }}>
          {open ? <ChevronLeft /> : <Menu />}
        </IconButton>
      </Box>

      <List>
        {navItems.map((item, index) => (
          <Tooltip
            key={item.label}
            title={!open ? item.label : ""}
            placement="right"
            arrow
          >
            <ListItem disablePadding sx={{ display: "block" }}>
              <ListItemButton
                component="a"
                href={item.link}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    color: "inherit",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.label}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          </Tooltip>
        ))}
      </List>
    </Drawer >
  );
};

export default Sidebar;