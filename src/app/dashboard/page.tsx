"use client";
import { useNotas } from "@/hooks/useNotes";
import Link from "next/link";

export default function Dashboard() {
  const { notas, loading, error } = useNotas();
  function setDate(d: string) {
    const date = new Date(d);
    return date.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  }
  if (loading || !notas) return <p>Carregando notas...</p>;
  if (error) return <p>{error}</p>;
  return (
    <div>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {notas.map((nota) => (
          <div
            key={nota.id}
            className="flex flex-col gap-4 p-4 rounded-lg shadow-sm bg-[#272727] text-white  w-100"
          >
            <Link href={`/dashboard/note/${nota.id}`}>
              <h2 className="text-1xl font-bold tracking-tight">
                {nota.title}
              </h2>
            </Link>
            <p className="text-base leading-relaxed mt-4 ">{nota?.content}</p>
            <p className="text-sm">{setDate(nota?.createdAt)}</p>
          </div>
        ))}
      </ul>
    </div>
  );
}
