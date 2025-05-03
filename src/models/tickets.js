import connectDB from "@/lib/db";
import mongoose from "mongoose";
import { Schema } from "mongoose";

connectDB();

const ticketSchema = new Schema(
  {
    title: String,
    description: String,
    category: String,
    priority: String,
    progress: Number,
    status: String,
    active: Boolean,
  },
  {
    timestamps: true,
  }
);

const Ticket =
  mongoose.models?.Ticket || mongoose.model("Ticket", ticketSchema);
export default Ticket;
