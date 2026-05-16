"use client"
import { useNotas } from '@/hooks/useNotes';
import Link from 'next/link';

export default function Dashboard() {
  const { notas, loading, error } = useNotas();

if (loading || !notas) return <p>Carregando notas...</p>;
if (error) return <p>{error}</p>;
return (
  <ul>
    {notas.map((nota) => (
        <div key={nota.id}>
          <Link href={`/dashboard/note/${nota.id}`}>
            <h2>{nota.title}</h2>
          </Link>
        </div>
      ))}
  </ul>
)
}
