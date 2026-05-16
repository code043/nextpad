"use client";

import { useAuth } from "@/context/auth";
import { useState } from "react";
const baseURL = process.env.NEXT_PUBLIC_API_URL;


export function useDeleteNote() {
  const { getAccessToken } = useAuth();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const deleteNote = async (id: string) => {
    const token = getAccessToken();

    if (!token) {
      setError("Authentication is missing!");
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const res = await fetch(
        `${baseURL}/api/notes/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!res.ok) {
        throw new Error("It'is not possible delete note");
      }

      return true;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(err.message || "Something went wrong!");
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { deleteNote, loading, error };
}