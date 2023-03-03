import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { LinkGroups } from "./components/Layout/Drawer/LinkGroup/linkGroup";
import { Button } from "@mui/material";
import HeaderComponent from "./components/Layout/Header";
import DrawerComponent from "./components/Layout/Drawer";
import AboutUs from "./views/AboutUs";
import Home from "./views/Home";
import Profile from "./views/Profile";
import Notification from "./views/Notification";

const mdTheme = createTheme();

function DashboardContent() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <BrowserRouter>
        {" "}
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <HeaderComponent toggleDrawer={toggleDrawer} open={open} />
          <DrawerComponent toggleDrawer={toggleDrawer} open={open} />
          <Box
            component="main"
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.grey[100]
                  : theme.palette.grey[900],
              flexGrow: 1,
              overflow: "auto",
              height: "100vh",
            }}
          >
            <Toolbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/notification" element={<Notification />} />
            </Routes>
          </Box>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
