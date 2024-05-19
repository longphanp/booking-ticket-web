import { getTokens } from "localstorage/token";
import parseJwt from "utils/token/parseJwt";

export default function useAdminAuthentication() {
  const tokens = getTokens();
  const tokenPayload = parseJwt(tokens?.accessToken);

  // Admin is considered logined if exists access token has isAdmin prop
  if (tokenPayload?.isAdmin) {
    return true;
  }

  return false;
}
