import mongoose from "mongoose";

const PaymentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    reference: {
      type: String,
      required: true,
    },
    screenshot: {
      type: String, // Base64 image
      required: true,
    },
    courseName: {
      type: String,
      required: true,
    },
    amount: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "verified", "rejected"],
      default: "pending",
    },
  },
  { timestamps: true }
);

// Prevent mongoose from compiling the model multiple times in development
export default mongoose.models.Payment ||
  mongoose.model("Payment", PaymentSchema);
