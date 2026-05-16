const baseURL = process.env.NEXT_PUBLIC_API_URL;

export async function editNoteService(
  title: string,
  content: string,
  token: string,
  id: string
) {

  const res = await fetch(`${baseURL}/api/notes/${id}`, {
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
