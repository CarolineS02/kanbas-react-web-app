import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";

function App() {
  const { pathname } = useLocation();
  const links = [
    { label: "Dashboard", path: "/Kanbas/Dashboard", icon: AiOutlineDashboard },
    { label: "Courses", path: "/Kanbas/Dashboard", icon: LiaBookSolid },
    { label: "Calendar", path: "/Kanbas/Calendar", icon: IoCalendarOutline },
    { label: "Inbox", path: "/Kanbas/Inbox", icon: FaInbox },
    { label: "Labs", path: "/Labs", icon: LiaCogSolid },
  ];
  return (
    <div className="nav-bar">
      <div id="wd-kanbas-navigation" style={{ width: 105 }} className="list-group rounded-0 position-fixed bottom-0 top-0 bg-black z-2 d-flex flex-column align-items-center">
        <a id="wd-neu-link" target="_blank"
          href="https://www.northeastern.edu/"
          className="list-group-item bg-black border-0 text-center w-100">
          <img src="/images/NEU.png" width="75px" /></a>
        <Link to="/Kanbas/Account" id="wd-account-link"
          className={`list-group-item text-center border-0 w-100 
          ${pathname.includes("Account") ? 'bg-white text-danger' : 'bg-black text-white'}`}>
          <FaRegCircleUser className="fs-4" /><br />
          <span>Account</span>
        </Link>
        {links.map((link) => (
          <Link to={link.path} key={link.path} id="wd-account-link"
            className={`list-group-item text-center border-0 w-100 
          ${pathname.includes(link.label) ? 'bg-white text-danger' : 'bg-black text-white'}`}>
            {link.icon({ className: "fs-4 text-danger" })}<br />
            <span>{link.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default App;
