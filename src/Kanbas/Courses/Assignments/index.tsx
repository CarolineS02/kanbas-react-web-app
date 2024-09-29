import { BsGripVertical } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { TfiWrite } from "react-icons/tfi";
import { FaPlus } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

export default function Assignments() {
  return (
    <div id="wd-assignments" className="pb-1">

      <div className="wd-assignment-controls">
        <div className="wd-search-assignment input-group float-start w-25">
          <span className="input-group-text input-lg">
            <IoIosSearch />
          </span>
          <input
            id="wd-search-assignment"
            placeholder="Search..."
            className="form-control form-control-lg"
          />
        </div>
        <button id="wd-add-assignment" className="btn btn-lg btn-danger me-1 float-end">+ Assignment</button>
        <button id="wd-add-assignment-group" className="btn btn-lg btn-secondary me-1 float-end">+ Group</button><br /><br /><br />
      </div>

      <ul id="wd-modules" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            Assignments
            <div className="wd-percentage float float-end">
              <span className="wd-percentage border border-dark rounded rounded-pill p-2 me-3"> 40% of Total </span>
              <FaPlus className="me-3" />
              <LessonControlButtons />
            </div>

          </div>
          <ul className="wd-assignments list-group rounded-0 ">
            <li className="wd-assignment-link p-3 ps-1 d-flex justify-content-between align-items-center">
              <NavLink to="/Kanbas/Courses/1234/Assignments/123" className="wd-assignment text-reset text-decoration-none d-flex align-items-center">
                <BsGripVertical className="me-4 fs-3" />
                <TfiWrite className="me-4 fs-3 text-success" />
                <span className="wd-assignment-text me-2">
                  <b>A1</b>
                  <br />
                  <span className="text-danger">Multiple Modules </span> | <b>Not available until</b> May 6 at 12:00am | <br />
                  <b> Due</b> May 13 at 11:59pm | 100 pts
                </span>
              </NavLink>
              <LessonControlButtons />
            </li>

            <li className="wd-assignment-link list-group-item p-3 ps-1 d-flex justify-content-between align-items-center">
              <NavLink to="/Kanbas/Courses/1234/Assignments/123" className="wd-assignment text-reset text-decoration-none d-flex align-items-center">
                <BsGripVertical className="me-4 fs-3" />
                <TfiWrite className="me-4 fs-3 text-success" />
                <span className="wd-assignment-text me-2">
                  <b>A2</b>
                  <br />
                  <span className="text-danger">Multiple Modules </span> | <b>Not available until</b> May 13 at 12:00am | <br />
                  <b> Due</b> May 20 at 11:59pm | 100 pts
                </span>
              </NavLink>
              <LessonControlButtons />
            </li>

            <li className="wd-assignment-link list-group-item p-3 ps-1 d-flex justify-content-between align-items-center">
              <NavLink to="/Kanbas/Courses/1234/Assignments/123" className="wd-assignment text-reset text-decoration-none d-flex align-items-center">
                <BsGripVertical className="me-4 fs-3" />
                <TfiWrite className="me-4 fs-3 text-success" />
                <span className="wd-assignment-text me-2">
                  <b>A3</b>
                  <br />
                  <span className="text-danger">Multiple Modules </span> | <b>Not available until</b> May 20 at 12:00am | <br />
                  <b> Due</b> May 27 at 11:59pm | 100 pts
                </span>
              </NavLink>
              <LessonControlButtons />
            </li>
          </ul>
        </li>
      </ul >
    </div >
  );
}
