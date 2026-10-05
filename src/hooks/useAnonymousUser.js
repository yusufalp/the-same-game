import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const STORAGE_KEY = "anonymous_user_id";

export function useAnonymousUser() {
  const [anonymousUserId] = useState(() => {
    let id = localStorage.getItem(STORAGE_KEY);

    if (!id) {
      id = uuidv4();
      localStorage.setItem(STORAGE_KEY, id);
    }

    return id;
  });

  return anonymousUserId;
}
