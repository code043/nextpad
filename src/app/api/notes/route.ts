import { NextRequest, NextResponse } from "next/server";

const baseURL = process.env.NEXT_PUBLIC_API_URL;

export async function GET(req: NextRequest) {
  const authHeader = req.headers.get("authorization");

  if (!authHeader) {
    return NextResponse.json({ message: "Não autenticado" }, { status: 401 });
  }

  const notesRes = await fetch(baseURL + "/api/notes", {
    headers: { Authorization: authHeader },
  });

  const data = await notesRes.json();
  if (!notesRes.ok) {
    return NextResponse.json(data, { status: notesRes.status });
  }

  return NextResponse.json(data);
}
