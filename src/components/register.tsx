import { registerAction } from "@/actions/register-action";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();
  async function handleSubmit(formData: FormData) {
    try {
      await registerAction(formData);
    } catch (err: unknown) {
      router.push("/login");
      console.error(err);
    }
  }
  return (
    <div className="bg-[#272727] text-white flex justify-center gap-4 p-4 rounded-lg shadow-sm w-125 px-20 pb-15 pt-15">
      <div className="w-full">
        <h1 className="text-center text-4xl font-bold tracking-tight leading-tight">
          Register
        </h1>
        <form
          action={handleSubmit}
          className="flex flex-col items-start space-y-4 mx-auto"
        >
          <label
            className="text-sm font-medium text-gray-300 mb-1"
            htmlFor="name"
          >
            Name
          </label>
          <input
          name="name"
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring"
            type="text"
            placeholder="Name..."
          />
          <label
            className="text-sm font-medium text-gray-300 mb-1"
            htmlFor="email"
          >
            Email
          </label>
          <input
          name="email"
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring"
            type="email"
            placeholder="Email..."
          />
          <label
            className="text-sm font-medium text-gray-300 mb-1"
            htmlFor="password"
          >
            Password
          </label>
          <input
          name="password"
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring"
            type="password"
            placeholder="Password..."
          />
          <input
          
            className="w-full mt-8 px-4 py-2 rounded-md font-medium bg-[#3471FF] text-white cursor-pointer"
            type="submit"
            value="Send"
          />
        </form>
        <Link href={"/login"}>
          <h2 className="text-center font-semibold mt-3 ">
            Already have an account?
          </h2>
        </Link>
      </div>
    </div>
  );
}
