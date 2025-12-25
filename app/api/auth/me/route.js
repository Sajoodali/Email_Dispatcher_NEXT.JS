import { NextResponse } from "next/server";
import { parseAuthCookie, verifyToken } from "@/lib/serverAuth";

export async function GET(request) {
  try {
    const cookie = request.headers.get("cookie") || "";
    const token = parseAuthCookie(cookie);
    const username = verifyToken(token);
    if (!username) return NextResponse.json({ user: null });
    return NextResponse.json({ user: { username } });
  } catch (err) {
    console.error("/api/auth/me error", err);
    return NextResponse.json({ user: null });
  }
}
