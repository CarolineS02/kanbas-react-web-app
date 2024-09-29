import { NavLink } from "react-router-dom";

export default function CoursesNavigation() {
  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
        <NavLink to="/Kanbas/Courses/1234/Home" id="wd-course-home-link"
          className={({ isActive }) => `list-group-item border border-0 ${isActive ? 'active' : 'bg-white text-danger'}`}>
          <span>Home</span>
        </NavLink>
        <NavLink to="/Kanbas/Courses/1234/Modules" id="wd-course-modules-link"
          className={({ isActive }) => `list-group-item border border-0 ${isActive ? 'active' : 'bg-white text-danger'}`}>
          <span>Modules</span>
        </NavLink>
        <NavLink to="/Kanbas/Courses/1234/Piazza" id="wd-course-piazza-link"
          className={({ isActive }) => `list-group-item border border-0 ${isActive ? 'active' : 'bg-white text-danger'}`}>
          <span>Piazza</span>
        </NavLink>
        <NavLink to="/Kanbas/Courses/1234/Zoom" id="wd-course-zoom-link"
          className={({ isActive }) => `list-group-item border border-0 ${isActive ? 'active' : 'bg-white text-danger'}`}>
          <span>Zoom</span>
        </NavLink>
        <NavLink to="/Kanbas/Courses/1234/Assignments" id="wd-course-assignments-link"
          className={({ isActive }) => `list-group-item border border-0 ${isActive ? 'active' : 'bg-white text-danger'}`}>
          <span>Assignments</span>
        </NavLink>
        <NavLink to="/Kanbas/Courses/1234/Quizzes" id="wd-course-quizzes-link"
          className={({ isActive }) => `list-group-item border border-0 ${isActive ? 'active' : 'bg-white text-danger'}`}>
          <span>Quizzes</span>
        </NavLink>
        <NavLink to="/Kanbas/Courses/1234/Grades" id="wd-course-grades-link"
          className={({ isActive }) => `list-group-item border border-0 ${isActive ? 'active' : 'bg-white text-danger'}`}>
          <span>Grades</span>
        </NavLink>
        <NavLink to="/Kanbas/Courses/1234/People" id="wd-course-people-link"
          className={({ isActive }) => `list-group-item border border-0 ${isActive ? 'active' : 'bg-white text-danger'}`}>
          <span>People</span>
        </NavLink>
    </div>
  );
}
