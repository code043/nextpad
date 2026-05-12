"use client";
import { loginAction } from "@/actions/login-action";

export default function Login() {
  return (
    <div className="bg-[#272727] text-white  flex justify-center gap-4 p-4 rounded-lg shadow-sm w-125 px-20 pb-15">
      <div className="w-full">
        <h1 className="text-center text-4xl font-bold tracking-tight leading-tight">
          Login
        </h1>
        <form
          action={loginAction}
          className="flex flex-col items-start space-y-4 mx-auto"
        >
          <label className="text-sm font-medium mb-1" htmlFor="email">
            Email
          </label>
          <input
            name="email"
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring"
            type="text"
            placeholder="Email..."
          />
          <label className="text-sm font-medium mb-1" htmlFor="password">
            Password
          </label>
          <input
            name="password"
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring"
            type="text"
            placeholder="Password..."
          />
          <input
            className="w-full mt-8 px-4 py-2 rounded-md font-medium bg-[#3471FF] text-white cursor-pointer"
            type="submit"
            value="Login"
          />
        </form>
        <h2 className="text-center font-semibold mt-3 ">Register</h2>
      </div>
    </div>
  );
}
