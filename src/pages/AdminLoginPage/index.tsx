import { useNavigate } from "react-router-dom";

import logo from "assets/logo.svg";
import { setTokens } from "localstorage/token";
import adminPathname from "routes/adminPathname";
import login from "services/auth/login";

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";

import useStyles from "./styles";

export default function AdminLoginPage() {
  const { classes } = useStyles();
  const navigate = useNavigate();

  const onSuccess = async (res: CredentialResponse) => {
    const data = await login({
      credential: res.credential!,
      clientId: res.clientId!,
    });

    setTokens(data);
    navigate(`/admin/${adminPathname.home}`);
  };

  const onError = () => {
    navigate(adminPathname.error);
  };

  return (
    <div className={classes.page}>
      <Card className={classes.card}>
        <CardMedia sx={{ height: 140 }} image={logo} title="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Login to Ticket Nami Admin
          </Typography>
          <Typography variant="body2" color="text.secondary">
            A website that provide manage booking website
          </Typography>
        </CardContent>
        <CardActions>
          <GoogleLogin onSuccess={onSuccess} onError={onError} />
        </CardActions>
      </Card>
    </div>
  );
}
