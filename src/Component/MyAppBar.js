import { Toolbar, IconButton, Button } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import MuiAppBar from '@mui/material/AppBar';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react'
import { AboutMeMenuItems } from '../MenuGroup/AboutMeMenuItems';
import { MyServicesMenuItems } from '../MenuGroup/MyServiceMenuItems';
import Link from '@mui/material/Link';
import MyMenu from './SubComponent/MyMenu';
import Drawer from '@mui/material/Drawer';
import { styled, useTheme } from '@mui/material/styles';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const rightLink = {
  fontSize: 16,
  color: 'common.white',
  ml: 3,
};
export default function MyAppBar(props) {
  const drawerOpen = props.drawerOpen
  const [myServiceMenuOpen, setMyServiceMenuOpen] = useState(false);
  const [myServiceMenuAnchorEl, setMyServiceMenuAnchorEl] = useState(null);
  //For mobile
  const [drawOpen, setDrawOpen] = React.useState(false);

  const handleMyServiceMenuOpen = (e) => {
    setMyServiceMenuAnchorEl(e.currentTarget);
    setMyServiceMenuOpen(true);
  }
  const handleMyServiceMenuClose = () => {
    setMyServiceMenuAnchorEl(null);
    setMyServiceMenuOpen(false);
  }

  const [aboutMeMenuOpen, setAboutMeMenuOpen] = useState(false);
  const [aboutMeMenuOpenAnchorEl, setAboutMeMenuOpenAnchorEl] = useState(null);
  const handleAboutMeMenuOpen = (e) => {
    setAboutMeMenuOpenAnchorEl(e.currentTarget);
    setAboutMeMenuOpen(true);
  }
  const handleAboutMeMenuClose = () => {
    setAboutMeMenuOpenAnchorEl(null);
    setAboutMeMenuOpen(false);
  }
  //reset the my_service and about_me menus if they are opened, side effect runs when props.isMobile is changed 
  useEffect(() => {
    handleMyServiceMenuClose();
    handleAboutMeMenuClose();
  }, [props.isMobile]);
  const theme = useTheme();
  return (
    <>
    <AppBar position='fixed' open={drawerOpen}>
      <Toolbar sx={{ justifyContent: 'space-between', background: '#424C55', height:'80px'}}>
          {props.isMobile ? <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={()=>{setDrawOpen(true)}}
              edge="start"
              sx={{ mr: 2, ...(drawOpen) }}
            >
            <MenuIcon sx={{fontSize: "2rem"}}/>
          </IconButton>
          : null
          }
          <Box sx={{ display: 'flex', flex: 1, justifyContent: 'center'}}>
            <Link
              variant="h6"
              underline="none"
              href="/"
              sx={{ fontSize: 30 }}
            >
              {'BoBroccoli'}
            </Link>
          </Box>
          {
          !props.isMobile ? 
          <Box sx={{ flex: 1, display: 'flex'}}>
            <Box sx={{ flex: 2, display: 'flex', justifyContent: 'center' }}>
              <Button variant='outlined' sx={{fontSize: 17}} onClick={handleMyServiceMenuOpen}>
                {'My Service'}
              </Button>
              <MyMenu id='myservice-menu' anchorEl={myServiceMenuAnchorEl} open={myServiceMenuOpen} onClose={handleMyServiceMenuClose} myMenuItems={MyServicesMenuItems}/>
              
              <Button variant='outlined' sx={{fontSize: 17}} onClick={handleAboutMeMenuOpen}>
                {'About Me'}
              </Button>
              <MyMenu id='aboutme-menu' anchorEl={aboutMeMenuOpenAnchorEl} open={aboutMeMenuOpen} onClose={handleAboutMeMenuClose} myMenuItems={AboutMeMenuItems}/>
            </Box>
            <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
              <Link
                color="inherit"
                variant="h6"
                underline="none"
                href="/"
                sx={rightLink}
              >
                {'Sign In'}
              </Link>
              <Link
                variant="h6"
                underline="none"
                href="/"
                sx={{ ...rightLink, color: 'secondary.main' }}
              >
                {'Sign Up'}
              </Link>
            </Box>
          </Box> :
          null
          }
      </Toolbar>
    </AppBar>
    <Drawer
        sx={{
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={drawOpen}
      >
        <DrawerHeader>
          <IconButton onClick={()=>{setDrawOpen(false)}}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
  </>
  )
}
