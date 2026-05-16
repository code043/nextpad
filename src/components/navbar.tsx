"use client";
import { useAuth } from "@/context/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const { user, loading, logout } = useAuth();
  const router = useRouter();
  function handleLogout() {
    logout();
    router.push("/login");
  }

  return (
    <header className="fixed w-full bg-[#272727] text-white flex justify-between items-center px-8 py-5 mb-2 shadow-md shadow-blue-950/10">
      <Link href="/" className="font-semibold text-lg">
        Notes
      </Link>

      <div className="flex items-center gap-4">
        {loading ? (
          <div className="w-8 h-8 rounded-full bg-zinc-600 animate-pulse" />
        ) : user ? (
          <>
            <div className="flex gap-1">
              <ul className="space-y-2 flex gap-4 list-none">
                <Link href="/dashboard">Dashboard</Link>
                <Link href="/dashboard/new">New</Link>
              </ul>
              <div>
                <button
                  onClick={handleLogout}
                  className="mx-3 hover:text-red-500 transition-colors cursor-pointer"
                >
                  Logout
                </button>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-sm font-bold uppercase">
                  {user.name[0]}
                </div>
              </div>
            </div>
          </>
        ) : (
          <Link
            href="/login"
            className="text-sm px-4 py-1.5 rounded-md bg-blue-600 hover:bg-blue-500 transition-colors"
          >
            Entrar
          </Link>
        )}
      </div>
    </header>
  );
}
