"use client"
import { useNotas } from '@/hooks/useNotes';

export default function Dashboard() {
  const { notas, loading, error } = useNotas();

if (loading || !notas) return <p>Carregando notas...</p>;
if (error) return <p>{error}</p>;
return (
  <ul>
    {notas && notas.map((n) => {
      return (
        <li key={n.id}>
          <h2>{n.title}</h2>
          <p>{n.content}</p>
        </li>
      )
    })}
  </ul>
)
}
