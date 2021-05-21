import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';
import AudiotrackIcon from '@material-ui/icons/Audiotrack';
import BookIcon from '@material-ui/icons/Book';
import PagesIcon from '@material-ui/icons/Pages';
import InfoIcon from '@material-ui/icons/Info';
import NoteIcon from '@material-ui/icons/Note';

import '../css/style.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Audio from '../Audio/Audio';
import QuraanEKareem from '../QuraanEkareem/QuraanEKareem';
import Surah from '../QuraanEkareem/Surah';
import PaaraIndex from '../PaaraIndex/PaaraIndex';
import AboutQuran from '../AboutQuran/AboutQuran';
import NeedToKnow from '../NeedToKnow/NeedToKnow';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  ulClass: {
    marginRight: 0,
  },
  titleColor: {
    color: 'white',
  },
  link: {
    textDecoration: 'none',
    display: 'flex',
    flexDirection: 'row'
  },
}));

export default function LeftDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Router>

      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, {
                [classes.hide]: open,
              })}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap className={classes.titleColor}>
              Quraan Kareem
          </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </div>
          <Divider />
          {/* <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider /> */}
          {/* <Switch> */}

          <List className={classes.ulClass}>
            <ListItem>
              <Link to='/' className={classes.link}>
                <ListItemIcon>
                  <AudiotrackIcon />
                </ListItemIcon>
                <ListItemText primary='Audio' />
              </Link>
            </ListItem>

            <ListItem>
              <Link to='/quranekareem' className={classes.link}>
                <ListItemIcon>
                  <BookIcon />
                </ListItemIcon>
                <ListItemText primary='Surah Index' />
              </Link>
            </ListItem>

            <ListItem>
              <Link to='/paaraIndex' className={classes.link}>
                <ListItemIcon>
                  <PagesIcon />
                </ListItemIcon>
                <ListItemText primary='Paara Index' />
              </Link>
            </ListItem>

            <ListItem>
              <Link to='/needToKnow' className={classes.link}>
                <ListItemIcon>
                  <NoteIcon />
                </ListItemIcon>
                <ListItemText primary='Need To Know' />
              </Link>
            </ListItem>
            <ListItem>
              <Link to='/aboutQuran' className={classes.link}>
                <ListItemIcon>
                  <InfoIcon />
                </ListItemIcon>
                <ListItemText primary='About Quran' />
              </Link>
            </ListItem>
          </List>


          {/* </Switch> */}



        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <>
            <Switch>

              <Route exact path='/'>
                <Audio />
              </Route>
              <Route exact path='/quranekareem'>
                <QuraanEKareem />
              </Route>
              <Route path='/quranekareem/:id'>
                <Surah />
              </Route>
              <Route path='/paaraIndex'>
                <PaaraIndex />
              </Route>
              <Route path='/aboutQuran'>
                <AboutQuran />
              </Route>
              <Route path='/needToKnow'>
                <NeedToKnow />
              </Route>
              <Route path='*' component={() => <h1>404 Not Found</h1>} />

            </Switch>

          </>

        </main>
      </div>
    </Router>

  );
}
