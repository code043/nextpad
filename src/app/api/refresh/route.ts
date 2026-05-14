import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const refreshToken = req.cookies.get("refreshToken")?.value;

  if (!refreshToken) {
    return NextResponse.json(
      { message: "Refresh token ausente" },
      { status: 401 }
    );
  }

  const backendResponse = await fetch(
    "http://localhost:8080/api/auth/refresh",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${refreshToken}`, 
      },
      credentials: 'include',
    }
  );

  let data;

  try {
    data = await backendResponse.json();
  } catch {
    return NextResponse.json(
      { message: "Erro no backend (sem JSON)" },
      { status: 500 }
    );
  }

  if (!backendResponse.ok) {
    return NextResponse.json(data, { status: backendResponse.status });
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