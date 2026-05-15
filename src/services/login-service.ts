export async function loginService(email: string, password: string) {
  const res = await fetch("http://localhost:3000/api/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  if (!res.ok) {
    return {
      error: data.message || "Login error",
    };
  }

  return data;
}
