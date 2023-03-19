import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Avatar,
} from "@mui/material";
import OAuth2Login from "react-simple-oauth2-login";
import {
  appBarStyles,
  avatarStyles,
  buttonStyles,
  typographyStyles,
} from "./styles";
import '../App.css'

function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // on success
  const onSuccess = async (res) => {
    const accessToken = res.access_token;
    const result = await fetch(
      `https://graph.facebook.com/me?fields=id,name,picture&access_token=${accessToken}`
    );
    const profile = await result.json();
    setUser(profile);
    setLoggedIn(true);
  };
  const onFailure = (response) => console.error(response);

  const handleLogout = () => {
    setUser(null);
    setLoggedIn(false);
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar sx={appBarStyles}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={typographyStyles}>
            Pokemon App
          </Typography>
          {loggedIn && user ? (
            <>
              <IconButton
                size="small"
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                onClick={handleClick}
                sx={buttonStyles}
              >
                <Avatar
                  alt={user.name}
                  src={user.picture.data.url}
                  sx={avatarStyles}
                />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
              >
                <MenuItem onClick={handleClose}>
                  Logged in as {user.name}
                </MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </>
          ) : (
            <OAuth2Login
              className="login-btn"
              text="Login"
              authorizationUrl="https://www.facebook.com/dialog/oauth"
              responseType="token"
              clientId="227028816453180"
              redirectUri="https://gorhov.github.io/pokemon-app/"
              onSuccess={onSuccess}
              onFailure={onFailure}
            />
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
