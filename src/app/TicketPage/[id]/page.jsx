import TicketForm from "@/components/TicketForm";
import React from "react";

const getTicketById = async (id) => {
  const res = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to get Ticket");
  }
  const data = await res.json();
  return data;
};

const TicketPage = async ({ params }) => {
  const { id } = await params;
  const EDITMODE = id == "new" ? false : true;
  let updateTicketData = {};
  if (EDITMODE) {
    updateTicketData = await getTicketById(id);
    updateTicketData = updateTicketData.foundTicket;
  } else {
    updateTicketData = {
      _id: "new",
    };
  }
  return (
    <div>
      <TicketForm ticket={updateTicketData} />
    </div>
  );
};

export default TicketPage;
