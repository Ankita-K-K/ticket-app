import React from "react";
import DeleteBlock from "./DeleteBlock";
import PriorityDisplay from "./PriorityDisplay";
import ProgressBar from "./ProgressBar";
import StatusBar from "./StatusBar";

const TicketCard = () => {
  return (
    <div className="flex flex-col bg-zinc-700 hover:bg-gray-600 rounded-md shadow-lg p-3 m-2">
      <div className="flex mb-3">
        <PriorityDisplay />
        <div className="ml-auto">
          <DeleteBlock />
        </div>
      </div>
      <h4 className="font-bold text-3xl">Ticket title</h4>
      <hr className="h-px border-0 bg-zinc-800 mb-2" />
      <p className="whitespace-pre-wrap">Description of the ticket</p>
      <div className="flex-grow"></div>
      <div className="flex mt-2">
        <div className="flex flex-col">
          <p className="text-xs my-1">08/31/12 10:43PM</p>
          <ProgressBar />
        </div>
        <div className="ml-auto flex items-end">
          <StatusBar />
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
