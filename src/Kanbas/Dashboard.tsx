import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProtectedFacultyRoute from "./Courses/ProtectedFacultyRoute";
import ProtectedStudentRoute from "./Courses/ProtectedStudentRoute";
import { addEnrollment, deleteEnrollment, setEnrollments } from "./Courses/reducer";
import * as courseClient from "./Courses/client";
import * as userClient from "./Account/client";

export default function Dashboard(
  { course, setCourse, addNewCourse,
    deleteCourse, updateCourse }: {
       course: any; setCourse: (course: any) => void;
      addNewCourse: () => void; deleteCourse: (course: any) => void;
      updateCourse: () => void;
    }) {

  const[myCourses, setMyCourses] = useState<any[]>([])
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
  const [showUnenrolled, setShowUnenrolled] = useState<boolean>(false)
  const [visibleCourses, setVisibleCourses] = useState<any[]>([])
  const [allCourses, setAllCourses] = useState<any[]>([]);
  
  const fetchEnrollments = async () => {
    const enrollments = await courseClient.findEnrollments();
    dispatch(setEnrollments(enrollments));
  };
  
  const fetchCourses = async () => {
    const courses = await userClient.findMyCourses();
    setMyCourses(courses); 
  };
  
  const fetchAllCourses = async () => {
    let courses = []
    courses = await courseClient.fetchAllCourses();
    setAllCourses(courses);
  };
  
  useEffect(() => {
    const fetchData = async () => {
      await fetchEnrollments();
      await fetchCourses();
    };
    fetchData();
  }, []);
  
  useEffect(() => {
    setVisibleCourses(showUnenrolled ? allCourses : myCourses);
  }, [showUnenrolled, myCourses, allCourses]);
  
  const handleEnrollmentsToggle = async () => {
    if (!showUnenrolled && allCourses.length === 0) {
      await fetchAllCourses(); // Fetch all courses only once
    }
    setShowUnenrolled(!showUnenrolled);
  };
  
  const enroll = async (userId: string, courseId: string) => {
    await courseClient.createEnrollmentForCourse(userId, courseId);
    dispatch(addEnrollment({ course: courseId, user: userId }));
    await fetchCourses();
  };
  
  const unenroll = async (userId: string, courseId: string) => {
    await courseClient.deleteEnrollmentForCourse(userId, courseId);
    dispatch(deleteEnrollment({ course: courseId, user: userId }));
    await fetchCourses();
  };
  

  const getCourseLink = (cid: string) => {
    if (myCourses.some(
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
        <button id="wd-enrollments-btn" className="btn btn-primary float-end"
          onClick={() => handleEnrollmentsToggle()}>
          Enrollments
        </button>
      </ProtectedStudentRoute>

      <h2 id="wd-dashboard-published">Published Courses ({myCourses.length})</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="d-flex flex-wrap row row-cols-1 row-cols-md-5 g-4">
          {visibleCourses
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
                        {enrollments.some(
                          (enrollment: { course: any; user: any; }) => enrollment.course === course._id && enrollment.user === currentUser._id
                        ) ? (
                          <button
                            onClick={(event) => {
                              event.preventDefault();
                              unenroll(currentUser._id, course._id)
                            }}
                            className="btn btn-danger me-2 float-end"
                            id="wd-unenroll-course-click"
                          >
                            Unenroll
                          </button>
                        ) : (
                          <button
                            onClick={(event) => {
                              event.preventDefault();
                              enroll(currentUser._id, course._id)
                            }}
                            className="btn btn-success float-end"
                            id="wd-enroll-course-click"
                          >
                            Enroll
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
