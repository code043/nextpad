export async function loginService(email: string, password: string) {
  const res = await fetch("http://localhost:3000/api/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error("Erro no login");
  }

  return res.json();
}