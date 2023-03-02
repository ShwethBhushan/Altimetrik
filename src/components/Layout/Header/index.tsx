import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
const drawerWidth: number = 240;
interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
interface dataFormProps {
  toggleDrawer: () => void;
  open?: boolean;
}
const HeaderComponent = ({ toggleDrawer, open }: dataFormProps) => {
  console.log("open HeaderComponent", open);
  return (
    <AppBar position="absolute" open={open}>
      <Toolbar
        sx={{
          pr: "24px", // keep right padding when drawer closed
        }}
      >
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer}
          sx={{
            marginRight: "36px",
            ...(open && { display: "none" }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1 }}
        >
          Audience Creator Digital Master Management
        </Typography>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <Link to="/notification" className="text-link">
            <Button key={"notification"} sx={{ color: "#fff" }}>
              <span>Notification</span>
            </Button>
          </Link>
          <Link to="/profile" className="text-link">
            <Button key={"profile"} sx={{ color: "#fff" }}>
              <span>Profile</span>
            </Button>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderComponent;
