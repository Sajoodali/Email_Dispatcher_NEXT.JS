import crypto from "crypto";

const SECRET = process.env.AUTH_SECRET || "dev_auth_secret";

export function createToken(username) {
  const data = Buffer.from(username, "utf8").toString("base64");
  const sig = crypto.createHmac("sha256", SECRET).update(data).digest("hex");
  return `${data}.${sig}`;
}

export function verifyToken(token) {
  if (!token || typeof token !== "string") return null;
  const parts = token.split(".");
  if (parts.length !== 2) return null;
  const [data, sig] = parts;
  try {
    const expected = crypto.createHmac("sha256", SECRET).update(data).digest("hex");
    const sigBuf = Buffer.from(sig, "hex");
    const expectedBuf = Buffer.from(expected, "hex");
    if (sigBuf.length !== expectedBuf.length) return null;
    if (!crypto.timingSafeEqual(sigBuf, expectedBuf)) return null;
    const username = Buffer.from(data, "base64").toString("utf8");
    return username;
  } catch (e) {
    return null;
  }
}

export function parseAuthCookie(cookieHeader) {
  if (!cookieHeader) return null;
  const parts = cookieHeader.split(";").map((s) => s.trim());
  for (const p of parts) {
    if (p.startsWith("auth=")) return p.slice("auth=".length);
  }
  return null;
}
