import Token from "types/auth/Token";
import { jsonParse } from "utils/json/jsonParse";
import { jsonStringify } from "utils/json/jsonStringify";

export const TOKEN_LOCALSTORAGE = "tokens";

export function getTokens(): Token {
  return jsonParse(localStorage.getItem(TOKEN_LOCALSTORAGE) || "{}");
}

export function setTokens(token: Token) {
  localStorage.setItem(TOKEN_LOCALSTORAGE, jsonStringify(token));
}
