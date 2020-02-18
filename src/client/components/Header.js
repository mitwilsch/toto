import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
// import Divider from '@material-ui/core/Divider';
// import Paper from '@material-ui/core/Paper';
// import { Link, NavLink } from 'react-router-dom';
// import PublicNavList from '../navs/publicNav';
// import PrivateNavList from '../navs/privateNav';
// import ExpandNavList from '../navs/expandNavs';
// import { logout } from '../store/actions/auth';
import Nav from './Nav';

const Header = props => {
  const { auth, login, logout } = props;
  const [state, setState] = useState({
    value: 1,
    open: false,
    componentsmenuopen: false,
  });

  // const handleChange = (event, index, value) => setState({ value });
  const style = {};
  const onLeftIconButtonClick = () => {
    setState({ open: !state.open });
  };

  const toggleDrawer = open => () => {
    setState({
      open,
    });
  };
  /*
  const handleClick = () => {
    console.log('clicked');
    setState({ componentsmenuopen: !state.componentsmenuopen });
  };
*/
  /*
  const handleClose = event => {
    if (target1.contains(event.target) || target2.contains(event.target)) {
      return;
    }

    setState({ componentsmenuopen: false });
  };
*/
  return (
    <div>
      <Drawer open={state.open} onClose={toggleDrawer(false)}>
        <div tabIndex={0} role="button">
          <div className="sidelistwrapper">
            <Nav auth={auth} />
          </div>
        </div>
      </Drawer>
      <div className="appbarwrapper">
        <AppBar position="static">
          <Toolbar>
            <IconButton
              className="iconbuttonsyle"
              color="inherit"
              aria-label="Menu"
              onClick={onLeftIconButtonClick}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              color="inherit"
              className="headertypoclass"
              style={{ flex: '1' }}
            >
              Toto
            </Typography>
            {/* <Typography align="right">{user.name}</Typography> */}
            {auth ? (
              <Button color="inherit" align="right" onClick={logout}>
                Logout
              </Button>
            ) : (
              <Button color="inherit" align="right" onClick={login}>
                Login
              </Button>
            )}
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
};

export default Header;
