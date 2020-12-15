import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import FolderIcon from '@material-ui/icons/Folder';
import PeopleIcon from '@material-ui/icons/People';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { Link } from 'react-router-dom';




export const MenuList = (
  
    <div>
      <ListItem button component={Link} to="/Dashboard">
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
          <ListItemText primary="Dashboard" />        
      </ListItem>
      <ListItem button component={Link} to="/Projects">
        <ListItemIcon>
          <FolderIcon />
        </ListItemIcon>
        <ListItemText primary="Projects" />
      </ListItem>
      <ListItem button component={Link} to="/Groups">
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Groups" />
      </ListItem>
      <ListItem button component={Link} to="/Tasks">
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Tasks" />
      </ListItem>
    </div>
    
  );


