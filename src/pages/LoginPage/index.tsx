import { useNavigate } from "react-router-dom";

import logo from "assets/logo.svg";
import { setTokens } from "localstorage/token";
import pathname from "routes/pathname";
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

export default function LoginPage() {
  const { classes } = useStyles();
  const navigate = useNavigate();

  const onSuccess = async (res: CredentialResponse) => {
    const data = await login({
      credential: res.credential!,
      clientId: res.clientId!,
    });

    setTokens(data);
    navigate(pathname.home);
  };

  const onError = () => {
    navigate(pathname.error);
  };

  return (
    <div className={classes.page}>
      <Card className={classes.card}>
        <CardMedia sx={{ height: 140 }} image={logo} title="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Login to Ticket Nami
          </Typography>
          <Typography variant="body2" color="text.secondary">
            A website that provide booking service
          </Typography>
        </CardContent>
        <CardActions className={classes.cardAction}>
          <GoogleLogin onSuccess={onSuccess} onError={onError} />
        </CardActions>
      </Card>
    </div>
  );
}
