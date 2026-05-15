import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const backendResponse = await fetch(
    "http://localhost:8080/api/auth/register",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }
  );

  const data = await backendResponse.json();

  if (!backendResponse.ok) {
    return NextResponse.json(data, {
      status: backendResponse.status,
    });
  }

  return NextResponse.json(data);
}