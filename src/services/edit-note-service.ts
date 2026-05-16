export async function editNoteService(
  title: string,
  content: string,
  token: string,
  id: string
) {

  const res = await fetch(`http://localhost:8080/api/notes/${id}`, {
    method: 'PATCH',
    headers: { 
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json"
     },
    body: JSON.stringify({ title, content })
  });
  const data = await res.json();
  if (!res.ok) {
    return {
      error: data.message || "Update error",
    };
  }

}
