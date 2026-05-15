"use server";

import { registerService } from "@/services/register-service";

export async function registerAction(formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");

  return await registerService(
    name as string,
    email as string,
    password as string,
  );
}
