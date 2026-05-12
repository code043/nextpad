
export async function loginService(email: string, password: string) {

  const response = await fetch('https://nest-notes.onrender.com/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password}),
    credentials: "include"
  })
  const data = await response.json()
  if(!response.ok){
    throw new Error(data.message || 'Login failed!')
  }
  console.log(data)
}
