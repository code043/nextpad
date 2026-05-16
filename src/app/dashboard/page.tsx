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
          > <h2 className="text-1xl font-bold tracking-tight">
                {nota.title}
              </h2>
           
            <p className="text-base leading-relaxed mt-4 ">{nota?.content}</p>
            <div className="flex justify-between items-baseline">
               <Link href={`/dashboard/note/${nota.id}`} className="bg-blue-400 w-20 text-center mt-8 px-1 py-0 rounded-md font-medium">
              <span className="text-sm">See note</span>
            </Link>
            <span className="text-sm">{setDate(nota?.createdAt)}</span>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}
