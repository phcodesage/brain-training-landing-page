import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import dbConnect from "@/lib/mongodb";
import Payment from "@/models/Payment";

export async function GET() {
  const cookieStore = cookies();
  const token = cookieStore.get("admin_token");
  
  if (!token || token.value !== "authenticated") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    await dbConnect();
    const payments = await Payment.find({}).sort({ createdAt: -1 });
    return NextResponse.json({ payments });
  } catch (error) {
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}
