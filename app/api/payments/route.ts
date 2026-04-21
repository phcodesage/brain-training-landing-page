import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Payment from "@/models/Payment";

export async function POST(req: Request) {
  try {
    await dbConnect();
    const body = await req.json();

    const { name, phone, reference, screenshot, courseName, amount } = body;

    if (!name || !phone || !reference || !screenshot || !courseName || !amount) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const newPayment = await Payment.create({
      name,
      phone,
      reference,
      screenshot,
      courseName,
      amount,
    });

    return NextResponse.json({ success: true, payment: newPayment }, { status: 201 });
  } catch (error: any) {
    console.error("Payment submission error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
