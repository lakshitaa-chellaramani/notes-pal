import { signIn } from "next-auth/react";

export async function POST(req) {
  const { email, password } = await req.json();
  const result = await signIn("credentials", {
    redirect: false,
    email,
    password,
  });

  if (!result || result.error) {
    return Response.json({ error: result?.error || "Login failed" }, { status: 401 });
  }

  return Response.json({ success: true });
}
