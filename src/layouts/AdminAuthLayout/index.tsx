import { useState } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

import useAdminAuthentication from "hooks/useAdminAuthentication";
import useUser from "hooks/useUser";
import { TOKEN_LOCALSTORAGE } from "localstorage/token";
import adminPathname from "routes/adminPathname";

import {
  AppBar,
  Button,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";

import useStyles from "./styles";

const pages = [
  { pathname: `/admin/${adminPathname.home}`, name: "Ticket Nami Admin" },
  { pathname: `/admin/${adminPathname.tickets}`, name: "Tickets" },
];

export default function AdminAuthLayout() {
  const { classes } = useStyles();
  const isAuth = useAdminAuthentication();
  const user = useUser();
  const navigate = useNavigate();
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  if (!isAuth) return <Navigate to={`/admin/${adminPathname.login}`} />;

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    localStorage.removeItem(TOKEN_LOCALSTORAGE);
    navigate(`/admin/${adminPathname.login}`);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <div className={classes.navigation}>
            {pages.map(page => (
              <Button
                className={classes.navigateButton}
                key={page.pathname}
                onClick={() => navigate(page.pathname)}
              >
                {page.name}
              </Button>
            ))}
          </div>
          <Button
            color="inherit"
            className={classes.profileButton}
            onClick={handleOpenUserMenu}
          >
            {user.name}
          </Button>
          <Menu
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            <MenuItem onClick={handleLogout}>
              <Typography textAlign="center">Logout</Typography>
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
}
