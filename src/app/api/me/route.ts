import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const authHeader = req.headers.get("authorization");

  if (!authHeader) {
    return NextResponse.json(
      { message: "Token não fornecido" },
      { status: 401 },
    );
  }

  const backendResponse = await fetch("http://localhost:8080/api/auth/me", {
    method: "GET",
    headers: {
      Authorization: authHeader,
    },
    credentials: 'include',
  });

  const data = await backendResponse.json();

  if (!backendResponse.ok) {
    return NextResponse.json(data, { status: backendResponse.status });
  }

  return NextResponse.json(data);
}

