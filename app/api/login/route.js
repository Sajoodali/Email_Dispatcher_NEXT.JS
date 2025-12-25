import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { createToken } from "@/lib/serverAuth";

export async function POST(request) {
  try {
    const { username, password } = await request.json();

    // Prefer credentials from environment variables for simple deployments
    const envUser = process.env.LOGIN_USERNAME;
    const envPass = process.env.LOGIN_PASSWORD;

    let authenticated = false;
    let authUsername = null;

    if (envUser && envPass) {
      if (username === envUser && password === envPass) {
        authenticated = true;
        authUsername = envUser;
      }
    } else {
      // Fallback to data/users.json if env vars not set
      const file = path.join(process.cwd(), "data", "users.json");
      if (!fs.existsSync(file)) {
        return NextResponse.json({ error: "No users configured" }, { status: 500 });
      }

      const raw = fs.readFileSync(file, "utf8");
      const users = JSON.parse(raw).users || [];
      const user = users.find((u) => u.username === username);
      if (user && user.password === password) {
        authenticated = true;
        authUsername = user.username;
      }
    }

    if (!authenticated) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    const token = createToken(authUsername);
    const res = NextResponse.json({ success: true, user: { username } });
    // 1 hour expiry
    res.headers.set("Set-Cookie", `auth=${token}; HttpOnly; Path=/; Max-Age=3600`);
    return res;
  } catch (err) {
    console.error("/api/login error", err);
    return NextResponse.json({ error: "Login failed" }, { status: 500 });
  }
}
