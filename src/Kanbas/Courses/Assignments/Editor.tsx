import { IoIosArrowDown } from "react-icons/io";
import "../../styles.css"
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { deleteAssignment, setAssignments, updateAssignment } from "./reducer";
import * as assignmentClient from "./client";
import * as coursesClient from "../client";

export default function AssignmentEditor() {
  const { aid } = useParams();
  const { cid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  // const [selectedAssignment, setSelectedAssignment] = useState<any>(null);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [points, setPoints] = useState<string>('100');
  const [due_date, setDueDate] = useState<string>("");
  const [available_date, setAvailableDate] = useState<string>("");
  const [available_until_date, setAvailableUntilDate] = useState<string>("");
  const isNewAssignment = location.state?.isNewAssignment;

  const fetchAssignments = async () => {
    const assignments = await coursesClient.findAssignmentForCourse(cid as string);
    dispatch(setAssignments(assignments));
    const assignment = assignments.find((a: any) => a._id === aid);
    if (assignment) {
      // setSelectedAssignment(assignment);
      setTitle(assignment.title || "");
      setDescription(assignment.description || "");
      setPoints(assignment.points || 100);
      setDueDate(assignment.due_date || "");
      setAvailableDate(assignment.available_date || "");
      setAvailableUntilDate(assignment.available_until_date || "");
    }
  };

  useEffect(() => {
    fetchAssignments();
  }, []);

  const saveAssignment = async (assignment: any) => {
    await assignmentClient.updateAssignment(assignment);
    dispatch(updateAssignment(assignment));
  };
  const removeAssignment = async (assignmentId: string) => {
    await assignmentClient.deleteAssignment(assignmentId);
    dispatch(deleteAssignment(assignmentId));
  };

  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name" className="pb-2">Assignment Name</label>
      <input id="wd-name" className="form-control"
        onChange={(event) => {
          setTitle(event.target.value);
        }}
        value={title} /><br />
      <textarea id="wd-description" className="form-control" value={description}
        onChange={(event) => {
          setDescription(event.target.value);
        }}
        rows={12} cols={50}>
        {description}
      </textarea>
      <div className="row mb-3 pt-4 align-items-center">
        <label htmlFor="wd-points" className="col-form-label col-3 text-end">Points</label>
        <div className="col">
          <input id="wd-points" className="form-control" defaultValue={points}
            onChange={(event) => {
              setPoints(event.target.value);
            }}
            value={points} />
        </div>
      </div>

      <div className="row mb-3 align-items-center">
        <label htmlFor="wd-group" className="col-form-label col-3 text-end">Assignment Group</label>
        <div className="col">
          <div className="wd-group input-group">
            <select id="wd-group" className="form-control">
              <option value="ASSIGNMENTS">ASSIGNMENTS</option>
              <option value="NOTES">NOTES</option>
            </select>
            <span className="input-group-text" style={{ height: '100%', display: 'flex', alignItems: 'center' }}>
              <IoIosArrowDown style={{ fontSize: '1.50rem' }} />
            </span>
          </div>
        </div>
      </div>

      <div className="row mb-3 align-items-center">
        <label htmlFor="wd-display-grade-as" className="col-form-label col-3 text-end">Display Grade as</label>
        <div className="col">
          <div className="wd-display-grade-as input-group">
            <select id="wd-display-grade-as" className="form-control">
              <option value="PERCENTAGE">Percentage</option>
              <option value="NUMBER">Number</option>
            </select>
            <span className="input-group-text" style={{ height: '100%', display: 'flex', alignItems: 'center' }}>
              <IoIosArrowDown style={{ fontSize: '1.50rem' }} />
            </span>
          </div>
        </div>
      </div>

      <div className="row mb-3">
        <label htmlFor="wd-submission-type" className="col-form-label col-3 text-end">Submission Type</label>
        <div className="col border rounded p-4 me-3">

          <div className="wd-submission-type input-group mb-3">
            <select id="wd-submission-type" className="form-control">
              <option value="ONLINE">Online</option>
              <option value="IN-PERSON">In-person</option>
            </select>

            <span className="input-group-text" style={{ height: '100%', display: 'flex', alignItems: 'center' }}>
              <IoIosArrowDown style={{ fontSize: '1.50rem' }} />
            </span>
          </div>


          <span className="d-block mb-2"><b>Online Entry Options</b></span>
          <div className="form-check mb-2">
            <input
              type="checkbox"
              className="form-check-input"
              name="check-submission"
              id="wd-website-url"
            />
            <label className="form-check-label" htmlFor="wd-website-url">
              Website URL
            </label>
          </div>

          <div className="form-check mb-2">
            <input
              type="checkbox"
              className="form-check-input"
              name="check-submission"
              id="wd-media-recordings"
            />
            <label className="form-check-label" htmlFor="wd-media-recordings">
              Media Recordings
            </label>
          </div>

          <div className="form-check mb-2">
            <input
              type="checkbox"
              className="form-check-input"
              name="check-submission"
              id="wd-student-annotation"
            />
            <label className="form-check-label" htmlFor="wd-student-annotation">
              Student Annotations
            </label>
          </div>

          <div className="form-check mb-2">
            <input
              type="checkbox"
              className="form-check-input"
              name="check-submission"
              id="wd-file-upload"
            />
            <label className="form-check-label" htmlFor="wd-file-upload">
              File Uploads
            </label>
          </div>
        </div>
      </div>

      <div className="row mb-3">
        <label htmlFor="wd-assign-to" className="col-form-label col-3 text-end">Assign</label>
        <div className="col border rounded p-4 me-3">

          <div>
            <span className="wd-assign-to d-block mb-1"><b>Assign to</b></span>
            <input id="wd-assign-to" className="form-control mb-3" value={'Everyone'} />
          </div>

          <div>
            <label htmlFor="wd-due-date" className="mb-1"><b>Due</b></label>
            <input type="date"
              id="wd-due-date"
              className="form-control mb-3"
              onChange={(event) => {
                setDueDate(event.target.value);
              }}
              value={due_date} />
          </div>

          <div className="row mb-3">
            <div className="col">
              <label htmlFor="wd-available-from" className="mb-1"><b>Available From</b></label>
              <input type="date"
                id="wd-available-from"
                className="form-control mb-1"
                onChange={(event) => {
                  setAvailableDate(event.target.value);
                }}
                value={available_date} />
            </div>
            <div className="col">
              <label htmlFor="wd-available-until" className="mb-1"><b>Until</b></label>
              <input type="date"
                id="wd-available-until"
                className="form-control mb-1"
                onChange={(event) => {
                  setAvailableUntilDate(event.target.value);
                }}
                value={available_until_date} />
            </div>
          </div>

        </div>
      </div>

      <div id="wd-edit-assignment-buttons">
        <button
          id="wd-save"
          className="btn btn-lg btn-danger me-1 float-end"
          onClick={() => {
            saveAssignment({
              _id: aid,
              title: title,
              course: cid,
              description: description,
              points: points,
              due_date: due_date,
              available_date: available_date,
              available_until_date: available_until_date
            })
            navigate(`/Kanbas/Courses/${cid}/Assignments`);
          }}
          type="button">
          Save
        </button>
        <button id="wd-cancel"
          className="btn btn-lg btn-secondary me-1 float-end"
          onClick={() => {
            if(isNewAssignment){
              if(aid){
              removeAssignment(aid)
              }
              navigate(`/Kanbas/Courses/${cid}/Assignments`);
            } else {
              navigate(`/Kanbas/Courses/${cid}/Assignments`);
            }
          }}
          type="button">
          Cancel
        </button>
      </div>
    </div>
  );
}
