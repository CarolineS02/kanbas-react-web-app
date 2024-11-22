import { Link } from "react-router-dom";
import React from "react";
import ProtectedFacultyRoute from "./Courses/ProtectedFacultyRoute";
import ProtectedStudentRoute from "./Courses/ProtectedStudentRoute";

export default function Dashboard(
  { course, setCourse, addNewCourse, courses,
    deleteCourse, updateCourse, enrolling, setEnrolling, updateEnrollment }: {
      course: any; setCourse: (course: any) => void;
      courses: any[]
      enrolling: boolean; setEnrolling: (enrolling: boolean) => void;
      addNewCourse: () => void; deleteCourse: (course: any) => void;
      updateCourse: () => void;
      updateEnrollment: (courseId: string, enrolled: boolean) => void;
    }) {

  const getCourseLink = (cid: string) => {
    if (courses.some(
      (course: { _id: any; }) =>
        course._id === cid
    )) {
      return `/Kanbas/Courses/${cid}/Home`;
    }
    return '/Kanbas/Dashboard/';
  };

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <ProtectedFacultyRoute>
        <h5>New Course
          <button className="btn btn-primary float-end"
            id="wd-add-new-course-click"
            onClick={addNewCourse} > Add </button>
          <button className="btn btn-warning float-end me-2"
            onClick={updateCourse} id="wd-update-course-click">
            Update
          </button>
        </h5><br />
        <input defaultValue={course.name} className="form-control mb-2"
          onChange={(e) => setCourse({ ...course, name: e.target.value })} />
        <textarea defaultValue={course.description} className="form-control"
          onChange={(e) => setCourse({ ...course, description: e.target.value })} />
        <hr />
      </ProtectedFacultyRoute>

      <ProtectedStudentRoute>
      <button onClick={() => setEnrolling(!enrolling)} className="float-end btn btn-primary" >
        {enrolling ? "My Courses" : "All Courses"}
      </button>
      </ProtectedStudentRoute>

      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="d-flex flex-wrap row row-cols-1 row-cols-md-5 g-4">
          {courses
            .map((course) => (
              <div key={course._id} className="wd-dashboard-course col" style={{ width: "300px" }}>
                <div className="card rounded-3 overflow-hidden h-100">
                  <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                    to={getCourseLink(course._id)}>
                    <img src={`/images/${course.image}`} width="100%" height={160} />
                    <div className="card-body">
                      <h5 className="wd-dashboard-course-title card-title">
                        {course.name}
                      </h5>
                      <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                        {course.description}
                      </p>
                      <button className="btn btn-primary"> Go </button>

                      <ProtectedStudentRoute>
                      {enrolling && (
                        <button onClick={(event) => {
                          event.preventDefault();
                          updateEnrollment(course._id, !course.enrolled);
                        }}
                          className={`btn ${course.enrolled ? "btn-danger" : "btn-success"} float-end`} >
                          {course.enrolled ? "Unenroll" : "Enroll"}
                        </button>
                      )}

                      </ProtectedStudentRoute>

                      <ProtectedFacultyRoute>
                        <button onClick={(event) => {
                          event.preventDefault();
                          deleteCourse(course._id);
                        }} className="btn btn-danger float-end"
                          id="wd-delete-course-click">
                          Delete
                        </button>

                        <button id="wd-edit-course-click"
                          onClick={(event) => {
                            event.preventDefault();
                            setCourse(course);
                          }}
                          className="btn btn-warning me-2 float-end" >
                          Edit
                        </button>
                      </ProtectedFacultyRoute>
                    </div>
                  </Link>
                </div>
              </div>))}

        </div>
      </div>
    </div>
  );
}
