import { NavLink, useParams } from "react-router-dom";

export default function CoursesNavigation() {
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];
  const { cid } = useParams();
  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => (
        <NavLink to={`/Kanbas/Courses/${cid}/${link}`} id={`wd-course-${link}-link`}
          className={({ isActive }) => `list-group-item border border-0 ${isActive ? 'active' : 'bg-white text-danger'}`}>
          <span>{link}</span>
        </NavLink>
      ))}
    </div>
  );
}
