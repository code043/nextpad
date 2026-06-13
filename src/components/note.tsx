"use client";

import { useDeleteNote } from "@/hooks/useDeleteNote";
import { useOneNote } from "@/hooks/useOneNote";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Note({ id }: { id: string }) {
  const router = useRouter();
  const { note, loading } = useOneNote(id);
  const { deleteNote, loading: deleting } = useDeleteNote();

  async function handleDelete() {
    const ok = confirm("Are you sure?");
    if (!ok) return;

    await deleteNote(id);
    router.push("/dashboard"); 
  }

  function setDate(d: string | undefined) {
    if (typeof d !== "string") return "error"
    const date = new Date(d);
    return date.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  }

  if (loading) return <p>Loading...</p>;

  return (
    <div className="flex flex-col gap-4 p-4 rounded-lg shadow-sm bg-[#272727] text-white w-125">
      <h1 className="text-4xl font-bold">{note?.title}</h1>
      <p className="mt-4">{note?.content}</p>
      <p>{setDate(note?.createdAt)}</p>

      <div className="flex justify-between">
        <Link
          href={"/dashboard/edit/" + id}
          className="px-5 py-2 w-20 rounded-md bg-green-400"
        >
          Edit
        </Link>

        <button
          onClick={handleDelete}
          disabled={deleting}
          className="px-5 py-2 w-20 rounded-md bg-red-400"
        >
          {deleting ? "..." : "Delete"}
        </button>
      </div>
    </div>
  );
}
