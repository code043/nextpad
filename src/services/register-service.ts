export async function registerService(name: string, email: string, password: string) {
  const res = await fetch("http://localhost:3000/api/register", {
    method: "POST",
    body: JSON.stringify({name,  email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
 if (!res.ok) {
    return {
      error: data.message || "Register error",
    };
  }

  return data
}