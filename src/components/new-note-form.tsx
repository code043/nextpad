"use client";
import { newNoteAction } from "@/actions/new-note";
import { useAuth } from "@/context/auth";
import { useRouter } from "next/navigation";

export default function NewNote() {
  const router = useRouter();
  const { getAccessToken } = useAuth()
  async function handleSubmit(formData: FormData) {
    const token = getAccessToken()
    try {
      if(token) {
        await newNoteAction(formData, token);
        router.push("/dashboard");
      }
    } catch (err: unknown) {
      
      console.error(err);
    }
  }

  return (
    <div className="bg-[#272727] text-white  flex justify-center gap-4 p-4 rounded-lg shadow-sm w-125 px-20 pb-15 pt-10">
      <div className="w-full">
        <h1 className="text-center text-4xl font-bold tracking-tight leading-tight">
          Note
        </h1>
        <form
          action={handleSubmit}
          className="flex flex-col items-start space-y-4 mx-auto"
        >
          <label className="text-sm font-medium mb-1" htmlFor="title">
            Title
          </label>
          <input
            name="title"
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring"
            type="text"
            placeholder="Your title here..."
          />
          <label className="text-sm font-medium mb-1" htmlFor="content">
            Content
          </label>
          <textarea
            name="content"
            className="w-full h-50 border rounded-md px-3 py-2 focus:outline-none focus:ring resize-none"
            placeholder="Write something..."
          ></textarea>
          <input
            className="w-full mt-8 px-4 py-2 rounded-md font-medium bg-[#3471FF] text-white cursor-pointer"
            type="submit"
            value="Create"
          />
        </form>
      </div>
    </div>
  );
}
