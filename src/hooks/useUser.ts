import { getTokens } from "localstorage/token";
import parseJwt from "utils/token/parseJwt";

export default function useUser() {
  const tokens = getTokens();
  const tokenPayload = parseJwt(tokens?.accessToken);

  return {
    email: tokenPayload.email,
    name: tokenPayload.name,
  };
}
