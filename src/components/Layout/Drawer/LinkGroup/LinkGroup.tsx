import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import { Link, NavLink, Route } from "react-router-dom";
import Collapse from '@mui/material/Collapse'
import { Box, Icon, List, styled } from "@mui/material";
import { KeyboardArrowDown } from "@mui/icons-material";



export const LinkGroups = (props:any) => {
    const { className, childrenLinks, headerLink, header, glyph } = props;
    const [open, setOpen] = React.useState(true);

    const FireNav = styled(List)<{ component?: React.ElementType }>({
      '& .MuiListItemButton-root': {
        paddingLeft: 24,
        paddingRight: 24,
      },
      '& .MuiListItemIcon-root': {
        minWidth: 0,
        marginRight: 16,
      },
      '& .MuiSvgIcon-root': {
        fontSize: 20,
      },
    });

  const handleClick = () => {
    setOpen(!open);
  };

  /* eslint-disable */
  return (
    <Box
    sx={{
      bgcolor: open ? 'rgba(71, 98, 130, 0.2)' : null,
      pb: open ? 2 : 0,
    }}
  >
    <ListItemButton
      alignItems="flex-start"
      onClick={() => setOpen(!open)}
      sx={{
        px: 3,
        pt: 2.5,
        pb: open ? 0 : 2.5,
        '&:hover, &:focus': { '& svg': { opacity: open ? 1 : 0 } },
      }}
    >
      <ListItemText
        primary={header}
        primaryTypographyProps={{
          fontSize: 15,
          fontWeight: 'medium',
          lineHeight: '20px',
          mb: '2px',
        }}
        secondary=""
        secondaryTypographyProps={{
          noWrap: true,
          fontSize: 12,
          lineHeight: '16px',
          color: open ? 'rgba(0,0,0,0)' : 'rgba(255,255,255,0.5)',
        }}
        sx={{ my: 0 }}
      />
      <KeyboardArrowDown
        sx={{
          mr: -1,
          opacity: 0,
          transform: open ? 'rotate(-180deg)' : 'rotate(0)',
          transition: '0.2s',
        }}
      />
    </ListItemButton>
    {open &&
      childrenLinks.map((item:any) => (
        <ListItemButton
          key={item.name}
          sx={{ py: 0, minHeight: 32, color: 'rgba(255,255,255,.8)' }}
        >
          {/* <ListItemIcon sx={{ color: 'inherit' }}>
            {item.icon}
          </ListItemIcon> */}
          <ListItemText
            primary={item.name}
            primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
          />
        </ListItemButton>
      ))}
  </Box>
  );
  // return(
  // <React.Fragment>
  //   <Link to="/" className="text-link">
  //     <ListItemButton>
  //       <ListItemIcon>
  //         <DashboardIcon />
  //       </ListItemIcon>
  //       <ListItemText primary="Audience Segment Management" />
  //     </ListItemButton>
  //   </Link>
  // </React.Fragment>)
}

