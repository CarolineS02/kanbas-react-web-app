import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";

function App() {
  return (
    <div className="nav-bar">
      <div id="wd-kanbas-navigation" style={{ width: 105 }} className="list-group rounded-0 position-fixed bottom-0 top-0 bg-black z-2 d-flex flex-column align-items-center">
      <a id="wd-neu-link" target="_blank" 
        href="https://www.northeastern.edu/"
        className="list-group-item bg-black border-0 text-center w-100">
        <img src="/images/NEU.png" width="75px" /></a>
        <NavLink to="/Kanbas/Account" id="wd-account-link"
          className={({ isActive }) => `list-group-item text-center border-0 w-100 ${isActive ? 'bg-white text-danger' : 'bg-black text-white'}`}>
          <FaRegCircleUser className="fs-4" /><br />
          <span>Account</span>
        </NavLink><br />
        <NavLink to="/Kanbas/Dashboard" id="wd-dashboard-link"
          className={({ isActive }) => `list-group-item text-center border-0 w-100 ${isActive ? 'bg-white text-danger' : 'bg-black text-white'}`}>
          <AiOutlineDashboard className="fs-4 text-danger" /><br />
          <span>Dashboard</span>
        </NavLink><br />
        <NavLink to="/Kanbas/Courses" id="wd-course-link"
          className={({ isActive }) => `list-group-item text-center border-0 w-100 ${isActive ? 'bg-white text-danger' : 'bg-black text-white'}`}>
          <LiaBookSolid className="fs-4 text-danger" /><br />
          <span>Courses</span>
        </NavLink><br />
        <NavLink to="/Kanbas/Calendar" id="wd-calendar-link"
          className={({ isActive }) => `list-group-item text-center border-0 w-100 ${isActive ? 'bg-white text-danger' : 'bg-black text-white'}`}>
          <IoCalendarOutline className="fs-4 text-danger" /><br />
          <span>Calendar</span>
        </NavLink><br />
        <NavLink to="/Kanbas/Inbox" id="wd-inbox-link"
          className={({ isActive }) => `list-group-item text-center border-0 w-100 ${isActive ? 'bg-white text-danger' : 'bg-black text-white'}`}>
          <FaInbox className="fs-4 text-danger" /><br />
          <span>Inbox</span>
        </NavLink><br />
        <NavLink to="/Labs" id="wd-labs-link"
          className={({ isActive }) => `list-group-item text-center border-0 w-100 ${isActive ? 'bg-white text-danger' : 'bg-black text-white'}`}>
          <LiaCogSolid className="fs-4 text-danger" /><br />
          <span>Labs</span>
        </NavLink><br />
      </div>
    </div>
  );
}

export default App;
