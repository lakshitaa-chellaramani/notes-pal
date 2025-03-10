import { signOut } from "next-auth/react";

export async function GET() {
  try {
    await signOut({ redirect: false });
    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: "Logout failed" }, { status: 500 });
  }
}
