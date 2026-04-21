import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import dbConnect from "@/lib/mongodb";
import Payment from "@/models/Payment";

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  const cookieStore = cookies();
  const token = cookieStore.get("admin_token");
  
  if (!token || token.value !== "authenticated") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { status } = await req.json();
    if (!["pending", "verified", "rejected"].includes(status)) {
      return NextResponse.json({ error: "Invalid status" }, { status: 400 });
    }

    await dbConnect();
    const payment = await Payment.findByIdAndUpdate(
      params.id,
      { status },
      { new: true }
    );

    if (!payment) {
      return NextResponse.json({ error: "Payment not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, payment });
  } catch (error) {
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}
