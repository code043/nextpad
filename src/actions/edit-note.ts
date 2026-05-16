"use server";

import { editNoteService } from "@/services/edit-note-service";

export async function editNoteAction(
  formData: FormData,
  token: string,
  id: string,
) {
  const title = formData.get("title");
  const content = formData.get("content");
  return await editNoteService(
    title as string,
    content as string,
    token as string,
    id as string,
  );
}
