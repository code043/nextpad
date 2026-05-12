import { setAccessToken, clearAccessToken } from "../lib/token";

export async function refreshToken() {
  const response = await fetch(
    "https://nest-notes.onrender.com/api/auth/refresh",
    {
      method: "POST",
      credentials: "include",
    },
  );

  if (!response.ok) {
    clearAccessToken();
    throw new Error("Session expired!");
  }

  const data = await response.json();

  setAccessToken(data.access_token);

  return data.access_token;
}
