import React from "react";
import DeleteBlock from "./DeleteBlock";
import PriorityDisplay from "./PriorityDisplay";
import ProgressBar from "./ProgressBar";
import StatusBar from "./StatusBar";

const TicketCard = ({ ticket }) => {
  const formatTimeStamp = (timestamp) => {
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };

    const date = new Date(timestamp);
    const formatDate = date.toLocaleString("en-US", options);
    return formatDate;
  };
  return (
    <div className="flex flex-col bg-zinc-700 hover:bg-gray-600 rounded-md shadow-lg p-3 m-2">
      <div className="flex mb-3">
        <PriorityDisplay priority={ticket.priority} />
        <div className="ml-auto">
          <DeleteBlock />
        </div>
      </div>
      <h4 className="font-bold text-3xl">{ticket.title}</h4>
      <hr className="h-px border-0 bg-zinc-800 mb-2" />
      <p className="whitespace-pre-wrap">{ticket.description}</p>
      <div className="flex-grow"></div>
      <div className="flex mt-2">
        <div className="flex flex-col">
          <p className="text-xs my-1">{formatTimeStamp(ticket.createdAt)}</p>
          <ProgressBar progress={ticket.progress} />
        </div>
        <div className="ml-auto flex items-end">
          <StatusBar status={ticket.status} />
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
