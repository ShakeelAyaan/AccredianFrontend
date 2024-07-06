// Header.js
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import ReferralForm from './RefferalForm';
const Header = () => {
    const color = {
        color: "white",
    }
    
  return (
    <AppBar position="absolute">
          <Toolbar sx={{
              flexDirection: 'row', gap:10
          }} >
          <Link style={color} to={"/"}>Accerdian</Link>
          <Link style={color} to={"/RefferalForm"}>Refer & Earn</Link>
      </Toolbar>
          
    </AppBar>
  );
};

export default Header;
