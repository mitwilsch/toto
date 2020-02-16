import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import ExtensionIcon from '@material-ui/icons/Extension';
import PhoneIcon from '@material-ui/icons/Phone';
import { NavLink } from 'react-router-dom';
/* import your desired icon from material-ui icons library */

const publicRoutes = [
  {
    url: '/home',
    name: 'Home',
    icon: <HomeIcon />,
  },
  {
    url: '/products',
    name: 'Products',
    icon: <ExtensionIcon />,
  },
  {
    url: '/contact',
    name: 'Contact',
    icon: <PhoneIcon />,
  },
  // add new Nav links here as a json object, in this file the public navigations
];

const privateRoutes = [
  {
    url: '/',
    name: 'Logged in',
    icon: <ExtensionIcon />,
  },
];

const Nav = props => {
  const routes = props.auth ? privateRoutes : publicRoutes;
  return routes.map(navItem => {
    return (
      <NavLink
        to={navItem.url}
        className="NavLinkItem"
        key={navItem.url}
        activeClassName="NavLinkItem-selected"
      >
        {' '}
        <List component="nav">
          {' '}
          <ListItem button>
            <ListItemIcon className="innernavitem">{navItem.icon}</ListItemIcon>
            <ListItemText
              primary={navItem.name}
              className="innernavitem"
              color="black"
            />
          </ListItem>
        </List>{' '}
      </NavLink>
    );
  });
};

export default Nav;
