import { getTokens } from "localstorage/token";

export default function useAuthentication() {
  const tokens = getTokens();

  // User is considered logined if exists access token
  if (tokens?.accessToken) {
    return true;
  }

  return false;
}
