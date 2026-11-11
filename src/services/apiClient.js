import { getAnonymousId, getToken } from "../utils/identity";

const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:5151";

export class ApiError extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
  }
}

export async function apiRequest(path, { method = "GET", body, signal } = {}) {
  const headers = {};

  const token = getToken();
  if (token) headers.Authorization = `Bearer ${token}`;
  else headers["x-anonymous-id"] = getAnonymousId();

  if (body !== undefined) headers["Content-Type"] = "application/json";

  let response;
  try {
    response = await fetch(`${API_URL}${path}`, {
      method,
      headers,
      body: body === undefined ? undefined : JSON.stringify(body),
      signal,
    });
  } catch (error) {
    if (error.name === "AbortError") throw error;
    throw new ApiError(
      0,
      "Can't reach the server. Check your connection and try again.",
    );
  }

  const data = await response.json().catch(() => null);
  if (!response.ok) {
    throw new ApiError(response.status, data?.error ?? "Something went wrong.");
  }
  return data;
}
