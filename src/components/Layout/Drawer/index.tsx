import MuiDrawer from "@mui/material/Drawer";
import React from "react";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Divider from "@mui/material/Divider";
import { LinkGroups } from "../../../components/Layout/Drawer/LinkGroup/linkGroup";
import List from "@mui/material/List";
import { styled } from "@mui/material/styles";
import { Routes } from "react-router-dom";
const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    "& .MuiList-root ": {
      paddingTop: "0",
      paddingBottom: "8",
    },
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));
const drawerWidth: number = 240;

interface dataFormProps {
  toggleDrawer: () => void;
  open?: boolean;
}


const DrawerComponent = ({ toggleDrawer, open }: dataFormProps) => {
  const menuItems = [
    {
      className: "",
      childrenLinks: [{
        link: "",
        name: "Audience Dashboard"
      },{
        link: "",
        name: " Import Audience Segemnt"
      }],
      headerLink: "",
      header:"Audience Segment Management",
      glyph:""
    }
  ]
  return (
    <Drawer variant="permanent" open={open}>
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          px: [1],
        }}
      >
        {/* <IconButton onClick={toggleDrawer}>
          <ChevronLeftIcon />
        </IconButton> */}
      </Toolbar>
      <Divider />
      <List component="nav">
      {     
        menuItems.map(item => 
        <LinkGroups {...item}/>
         )
      }
      </List>
    </Drawer>
  );
};

export default DrawerComponent;
