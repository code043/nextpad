"use server";

import { newNoteService } from "@/services/new-note-service";

export async function newNoteAction(formData: FormData, token: string) {
  const title = formData.get("title");
  const content = formData.get("content");

  return await newNoteService(
    title as string,
    content as string,
    token as string,
  );
}
