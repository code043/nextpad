import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const backendResponse = await fetch(
    "http://localhost:8080/api/auth/login",
    {
      method: "POST",
      
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
      credentials: 'include',
    }
  );

  const data = await backendResponse.json();

  if (!backendResponse.ok) {
    return NextResponse.json(data, { status: 401 });
  }

  const response = NextResponse.json({
    token: data.access_token,
  });

  response.cookies.set("refreshToken", data.refresh_token, {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
    path: "/",
  });

  return response;
}