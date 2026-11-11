import { v4 as uuidv4 } from "uuid";

const ANONYMOUS_ID_KEY = "anonymous_user_id";
const TOKEN_KEY = "token";

export function getAnonymousId() {
  let id = localStorage.getItem(ANONYMOUS_ID_KEY);

  if (!id) {
    id = uuidv4();
    localStorage.setItem(ANONYMOUS_ID_KEY, id);
  }

  return id;
}

export function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}
