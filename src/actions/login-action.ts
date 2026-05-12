import { loginService } from "@/services/login-service";

export async function loginAction(formData: FormData) {
  const email = formData.get("email");
  const password = formData.get("password");

  if (!email || !password) {
    throw new Error("Fields are missing!");
  }

  await loginService(email as string, password as string);
}
