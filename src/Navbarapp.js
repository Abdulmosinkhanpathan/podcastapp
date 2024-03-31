import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import img from './image.png'
import {Link} from 'react-router-dom'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
export default function Navbarapp() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: '#032B43' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Video & Podcast App
          </Typography>
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            component={Link} to="/upload"
          >
            <CloudUploadIcon />
          </IconButton>
          <Avatar alt="Remy Sharp" src={img} />
          <Button color="inherit" component={Link} to="/login">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
