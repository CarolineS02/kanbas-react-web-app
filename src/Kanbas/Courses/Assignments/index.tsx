import { BsGripVertical } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { TfiWrite } from "react-icons/tfi";
import { FaPlus } from "react-icons/fa6";
import { useNavigate, useParams } from "react-router-dom";
import ProtectedFacultyRoute from "../ProtectedFacultyRoute";
import { addAssignment, deleteAssignment, setAssignments }
  from "./reducer";
import { FaTrash } from "react-icons/fa";
import * as coursesClient from "../client";
import * as assignmentClient from "./client";
import { useSelector, useDispatch } from "react-redux";
import { JSXElementConstructor, ReactElement, ReactNode, ReactPortal, useEffect, useState } from "react";
import AssignmentDeletor from "./AssignmentDeletor";
import ProtectedStudentRoute from "../ProtectedStudentRoute";

export default function Assignments() {
  const { cid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const fetchAssignments = async () => {
    const assignments = await coursesClient.findAssignmentForCourse(cid as string);
    dispatch(setAssignments(assignments));
  };
  useEffect(() => {
    fetchAssignments();
  }, []);

  const createAssignmentForCourse = async () => {
    if (!cid) return;
    const newAssignment = {
      title: 'New Assignment',
      course: cid,
      description: "New Assignment Description",
      points: 100,
      due_date: "",
      available_date: "",
      available_until_date: ""
    };
    const assignment = await coursesClient.createAssignmentForCourse(cid, newAssignment);
    dispatch(addAssignment(assignment));
    navigate(`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`, { state: { isNewAssignment: true } });
  };

  const removeAssignment = async (assignmentId: string) => {
    await assignmentClient.deleteAssignment(assignmentId);
    dispatch(deleteAssignment(assignmentId));
  };

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
        <ProtectedFacultyRoute>
          <button id="wd-add-assignment"
            onClick={() => {
              createAssignmentForCourse()
            }}
            className="btn btn-lg btn-danger me-1 float-end">
            + Assignment</button>
          <button id="wd-add-assignment-group" className="btn btn-lg btn-secondary me-1 float-end">+ Group</button>
        </ProtectedFacultyRoute><br /><br /><br />
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
            {assignments.map((assignment: {
              available_date: string;
              due_date: string;
              points: string;
              _id: any;
              title: string;
            }) => (
              <li className="wd-assignment-link list-group-item p-3 ps-1 d-flex justify-content-between align-items-center">
                <ProtectedFacultyRoute>
                  <button
                    onClick={() => {
                      navigate(`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`, { state: { isNewAssignment: false } });
                    }}
                    className="wd-assignment text-reset text-decoration-none d-flex align-items-center btn btn-link text-start">
                    <BsGripVertical className="me-4 fs-3" />
                    <TfiWrite className="me-4 fs-3 text-success" />
                    <span className="wd-assignment-text me-2">
                      <b>{assignment.title}</b>
                      <br />
                      <span className="text-danger">Multiple Modules </span> | <b>Not available until</b> {assignment.available_date} | <br />
                      <b> Due</b> {assignment.due_date ? new Date(assignment.due_date).toLocaleDateString() : "N/A"}  | {assignment.points} pts
                    </span>
                  </button>
                </ProtectedFacultyRoute>
                <ProtectedStudentRoute>
                  <button
                    className="wd-assignment text-reset text-decoration-none d-flex align-items-center btn btn-link text-start">
                    <BsGripVertical className="me-4 fs-3" />
                    <TfiWrite className="me-4 fs-3 text-success" />
                    <span className="wd-assignment-text me-2">
                      <b>{assignment.title}</b>
                      <br />
                      <span className="text-danger">Multiple Modules </span> | <b>Not available until</b> {assignment.available_date} | <br />
                      <b> Due</b> {assignment.due_date ? new Date(assignment.due_date).toLocaleDateString() : "N/A"} | {assignment.points} pts
                    </span>
                  </button>
                </ProtectedStudentRoute>
                <div className="d-flex align-items-center">
                  <LessonControlButtons />
                  <ProtectedFacultyRoute>
                    <button id="wd-delete-assignment-btn"
                      className="btn btn-link ms-2 fs-5"
                      data-bs-toggle="modal" data-bs-target="#wd-add-module-dialog">
                      <FaTrash />
                    </button>
                    <AssignmentDeletor dialogTitle="Delete Assignment"
                      deleteAssignment={() =>
                        removeAssignment(assignment._id)
                      } />
                  </ProtectedFacultyRoute>

                </div>
              </li>
            ))}
          </ul>

        </li>
      </ul >
    </div >
  );
}
