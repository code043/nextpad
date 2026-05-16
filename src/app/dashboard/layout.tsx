"use client";

import { useAuth } from "@/context/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/login");
    }
  }, [user, loading, router]);

  if (loading) return null;
  if (!user) return null;

  return (
    <div className=" py-20  bg-black text-white min-h-225">
      <h1 className="text-center text-4xl font-bold tracking-tight leading-tight">
        Dashboard
      </h1>
      <main>{children}</main>
    </div>
  );
}
