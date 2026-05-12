import { getAccessToken } from "@/lib/token";
import { refreshToken } from "./refresh-token-service";

export async function apiFetch(url: string, options: RequestInit = {}) {
  const token = getAccessToken();

  let response = await fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${token}`,
    },
    credentials: "include",
  });

  if (response.status === 401) {
    try {
      const newToken = await refreshToken();

      response = await fetch(url, {
        ...options,
        headers: {
          ...options.headers,
          Authorization: `Bearer ${newToken}`,
        },
        credentials: "include",
      });
    } catch {
      throw new Error("User needs to login again!");
    }
  }

  return response;
}
