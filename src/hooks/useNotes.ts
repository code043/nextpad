"use client";

import { Note } from "@/app/types/note";
import { useAuth } from "@/context/auth";
import { useEffect, useState, useCallback } from "react";


export function useNotes() {
  const { user, getAccessToken } = useAuth();

  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadNotes = useCallback(async () => {
    const token = getAccessToken();

    if (!token) {
      setError("Authentication is missing");
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
        throw new Error("Search notes error!");
      }

      const data = await res.json();
      setNotes(data.notes ?? data);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(err.message || "Somethin went wrong!");
    } finally {
      setLoading(false);
    }
  }, [getAccessToken]);

  useEffect(() => {
    if (user) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      loadNotes();
    } else {
      setLoading(false);
    }
  }, [user, loadNotes]);

  return {
    notes,
    loading,
    error,
    reload: loadNotes,
  };
}
