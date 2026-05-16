"use client";
import { editNoteAction } from "@/actions/edit-note";
import { useAuth } from "@/context/auth";
import { useOneNote } from "@/hooks/useOneNote";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function EditNote({ id }: { id: string }) {
  const router = useRouter();
  const { getAccessToken } = useAuth();
  const { note, loading } = useOneNote(id);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  async function handleSubmit(formData: FormData) {
    const token = getAccessToken();
    try {
      if (token) {
        await editNoteAction(formData, token, id);
        router.push("/dashboard");
      }
    } catch (err: unknown) {
      console.error(err);
    }
  }

  useEffect(() => {
    if (note) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setTitle(note.title ?? "");
      setContent(note.content ?? "");
    }
  }, [note]);
 
  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="bg-[#272727] text-white  flex justify-center gap-4 p-4 rounded-lg shadow-sm w-125 px-20 pb-15 pt-10">
      <div className="w-full">
        <h1 className="text-center text-4xl font-bold tracking-tight leading-tight">
          Edit
        </h1>
        <form
          action={handleSubmit}
          className="flex flex-col items-start space-y-4 mx-auto"
        >
          <label className="text-2xl font-medium mb-1" htmlFor="title">
            Title
          </label>
          <input
            name="title"
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring"
            type="text"
            placeholder="Edit your title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label className="text-2xl font-medium mb-1" htmlFor="content">
            Content
          </label>
          <textarea
            name="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full h-50 border rounded-md px-3 py-2 focus:outline-none focus:ring resize-none"
            placeholder="Edit your content..."
          ></textarea>
          <div className="flex gap-3">
            <input
            className="w-40 mt-8 px-4 py-2 rounded-md font-medium bg-[#3471FF] text-white cursor-pointer"
            type="submit"
            value="Edit"
          />
          <Link href={'/dashboard/note/'+id}
            className="w-40 text-center mt-8 px-4 py-2 rounded-md font-medium bg-[#e7560e] text-white cursor-pointer"
          >Cancel</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
