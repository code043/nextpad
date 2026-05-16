"use client";

import { Note } from "@/app/types/note";
import { useAuth } from "@/context/auth";
import { useEffect, useState, useCallback } from "react";


export function useOneNote(id: string) {
  const { user, getAccessToken } = useAuth();
  const [note, setNote] = useState<Note | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
 
  const loadNote = useCallback(async () => {
    const token = getAccessToken();

    if (!token) {
      setError("Authentication is missing!");
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError(null);
      const res = await fetch(`http://localhost:8080/api/notes/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
        credentials: "include",
      });
      if (!res.ok) {
        throw new Error("I'ts not possible get the note");
      }

      const data = await res.json();
      setNote(data.note ?? data);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(err.message || "Erro inesperado");
    } finally {
      setLoading(false);
    }
  }, [getAccessToken, id]);

  useEffect(() => {
  if (user) {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    loadNote();
  } else {
    setLoading(false);
  }
}, [user, loadNote]);

  return {
    note,
    loading,
    error,
    reload: loadNote,
  };
}
