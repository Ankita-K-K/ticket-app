import { faHome, faTicket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <div className="flex justify-between px-4 py-1 bg-zinc-900 text-[#f1f3f5]">
      <div className="flex gap-4">
        <Link href={"/"}>
          <FontAwesomeIcon icon={faHome} className="icon" />
        </Link>
        <Link href={"/TicketPage/new"}>
          <FontAwesomeIcon icon={faTicket} className="icon" />
        </Link>
      </div>
      <div>
        <p>jake@gamil.com</p>
      </div>
    </div>
  );
};

export default Nav;
