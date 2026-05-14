"use client";

import { Note } from "@/app/types/note";
import { useAuth } from "@/context/auth";
import { useEffect, useState, useCallback } from "react";


export function useNotas() {
  const { user, getAccessToken } = useAuth();

  const [notas, setNotas] = useState<Note[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadNotas = useCallback(async () => {
    const token = getAccessToken();

    if (!token) {
      setError("Não autenticado!");
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const res = await fetch("http://localhost:8080/api/notes", {
        headers: { Authorization: `Bearer ${token}` },
        credentials: "include",
      });

      if (!res.ok) {
        throw new Error("Erro ao buscar notas");
      }

      const data = await res.json();
      setNotas(data.notas ?? data);
    } catch (err: any) {
      setError(err.message || "Erro inesperado");
    } finally {
      setLoading(false);
    }
  }, [getAccessToken]);

  useEffect(() => {
    if (user) {
      loadNotas();
    } else {
      setLoading(false);
    }
  }, [user, loadNotas]);

  return {
    notas,
    loading,
    error,
    reload: loadNotas,
  };
}
