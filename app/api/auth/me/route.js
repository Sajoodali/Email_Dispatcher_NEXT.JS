import { NextResponse } from "next/server";
import { parseAuthCookie, verifyToken } from "@/lib/serverAuth";

export async function GET(request) {
  try {
    // Try Authorization header first (Bearer token)
    const authHeader = request.headers.get("authorization") || "";
    let token = null;
    if (authHeader && authHeader.toLowerCase().startsWith("bearer ")) {
      token = authHeader.slice(7).trim();
    }
    // Fallback to cookie
    if (!token) {
      const cookie = request.headers.get("cookie") || "";
      token = parseAuthCookie(cookie);
    }

    const username = verifyToken(token);
    if (!username) return NextResponse.json({ user: null });
    return NextResponse.json({ user: { username } });
  } catch (err) {
    console.error("/api/auth/me error", err);
    return NextResponse.json({ user: null });
  }
}
