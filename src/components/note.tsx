"use client";
import { useOneNote } from "@/hooks/useOneNote";
import Link from "next/link";

export default function Note({ id }: { id: string }) {
  const { nota, loading } = useOneNote(id);
  if (!nota) {
    return (
      <div>
        <h1>Not fould!</h1>
        <p>Id: {id}</p>
      </div>
    );
  }
  function setDate(d: string) {
    const date = new Date(d);
    return date.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="flex flex-col gap-4 p-4 rounded-lg shadow-sm bg-[#272727] text-white  w-125">
      <h1 className="text-4xl font-bold tracking-tight">
        {nota?.title}
      </h1>
      <p className="text-base leading-relaxed mt-4 ">{nota?.content}</p>
      <p>{setDate(nota?.createdAt)}</p>
      <Link href={'/dashboard/edit/'+id} className="px-5 py-2 w-20 rounded-md bg-green-400">Edit</Link>
    </div>
  );
}
