import axios from "axios";
import configs from "configs";
import Token from "types/auth/Token";

export default async function login(payload: {
  credential: string;
  clientId: string;
}): Promise<Token> {
  const res = await axios.post(
    `${configs.endpoint.ticket}/v1/auth/google`,
    payload,
  );

  return res.data?.data;
}
