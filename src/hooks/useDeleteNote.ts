"use client";

import { useAuth } from "@/context/auth";
import { useState } from "react";

export function useDeleteNote() {
  const { getAccessToken } = useAuth();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const deleteNote = async (id: string) => {
    const token = getAccessToken();

    if (!token) {
      setError("Não autenticado!");
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const res = await fetch(
        `http://localhost:8080/api/notes/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!res.ok) {
        throw new Error("Erro ao deletar nota");
      }

      return true;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(err.message || "Erro inesperado");
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { deleteNote, loading, error };
}