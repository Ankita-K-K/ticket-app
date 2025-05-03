import Ticket from "@/models/tickets";
import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {
  try {
    const { id } = await params;
    await Ticket.findByIdAndDelete(id);
    return NextResponse.json(
      { message: "Ticket Deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Error: ", error }, { status: 500 });
  }
}
