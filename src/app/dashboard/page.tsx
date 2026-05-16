"use client";
import { useNotes } from "@/hooks/useNotes";
import Link from "next/link";

export default function Dashboard() {
  const { notes, loading } = useNotes();
  function setDate(d: string) {
    const date = new Date(d);
    return date.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  }
  if (loading || !notes)
    return <p className="text-center">Loading...</p>;
  return (
    <div className="flex justify-center py-20  bg-black">
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {notes.map((note) => (
          <div
            key={note.id}
            className="flex flex-col gap-4 p-4 rounded-lg shadow-sm bg-[#272727] text-white min-h-1  w-100"
          >
            {" "}
            <h2 className="text-1xl font-bold tracking-tight">{note.title}</h2>
            <p className="text-base leading-relaxed mt-4 h-50 ">
              {note?.content}
            </p>
            <div className="flex justify-between items-baseline">
              <Link
                href={`/dashboard/note/${note.id}`}
                className="text-blue-400 w-20 text-center mt-8 px-1 py-0 rounded-md font-medium"
              >
                <span className="text-sm">Check</span>
              </Link>
              <span className="text-sm">{setDate(note?.createdAt)}</span>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}
