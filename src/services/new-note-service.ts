export async function newNoteService(
  title: string,
  content: string,
  token: string,
) {

  const res = await fetch(`http://localhost:8080/api/notes/`, {
    method: 'POST',
    headers: { 
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json"
     },
    body: JSON.stringify({ title, content })
  });
  const data = await res.json();
  if (!res.ok) {
    return {
      error: data.message || "Creation error",
    };
  }

}
