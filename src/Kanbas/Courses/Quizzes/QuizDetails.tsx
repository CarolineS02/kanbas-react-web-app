import "../../styles.css";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaPencil } from "react-icons/fa6";
import * as coursesClient from "../client";
import { useEffect, useState } from "react";
import { setQuizzes } from "./reducer";

export default function QuizDetails() {
  const { qid } = useParams();
  const { cid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [selectedQuiz, setSelectedQuiz] = useState<
    | {
        title: string | undefined;
        description: string | undefined;
        course: string | undefined;
        type: string | undefined;
        points: string | undefined;
        group: string | undefined;
        shuffle_answers: boolean | undefined;
        time_limit: string | undefined;
        has_time_limit: boolean | undefined;
        multiple_attempts: boolean | undefined;
        attempts: string | undefined;
        show_correct: boolean | undefined;
        access_code: string | undefined;
        one_question_at_a_time: boolean | undefined;
        webcam_required: boolean | undefined;
        lock_questions_after_answering: boolean;
        due_date: string;
        available_date: string;
        available_until_date: string;
        published: boolean;
      }
    | undefined
  >(undefined);
  const fetchQuizzes = async () => {
    const quizzes = await coursesClient.findQuizForCourse(cid as string);
    dispatch(setQuizzes(quizzes));
    setSelectedQuiz(quizzes.find((quiz: any) => quiz._id === qid));
  };
  useEffect(() => {
    fetchQuizzes();
  }, []);

  return selectedQuiz ? (
    <div id="wd-assignments-editor">
      <div className="d-flex justify-content-center">
        <button
          className="btn btn-secondary me-3"
          onClick={() =>
            navigate(`/Kanbas/Courses/${cid}/Quizzes/${qid}/QuizScreen/preview`)
          }
        >
          Preview
        </button>
        <button
          className="btn btn-secondary me-3"
          onClick={() =>
            navigate(`/Kanbas/Courses/${cid}/Quizzes/${qid}/Editor`)
          }
        >
          <FaPencil className="text-secondary me-2" />
          Edit
        </button>
      </div>
      <hr />
      <h1>{selectedQuiz.title}</h1>
      <div id="wd-quiz-preview-info">
        <div id="wd-type-preview" className="row align-items-center">
          <label
            htmlFor="wd-display-grade-as"
            className="col-form-label col-3 text-end"
          >
            <b>Quiz Type </b>
          </label>
          <div className="col">
            <span>{selectedQuiz.type}</span>
          </div>
        </div>
        <div id="wd-points-preview" className="row align-items-center">
          <label
            htmlFor="wd-display-grade-as"
            className="col-form-label col-3 text-end"
          >
            <b>Points </b>
          </label>
          <div className="col">
            <span>{selectedQuiz.points}</span>
          </div>
        </div>
        <div id="wd-group-preview" className="row align-items-center">
          <label
            htmlFor="wd-display-grade-as"
            className="col-form-label col-3 text-end"
          >
            <b>Assignment Group </b>
          </label>
          <div className="col">
            <span>{selectedQuiz.group}</span>
          </div>
        </div>
        <div id="wd-shuffle-preview" className="row align-items-center">
          <label
            htmlFor="wd-display-grade-as"
            className="col-form-label col-3 text-end"
          >
            <b>Shuffle Answers </b>
          </label>
          <div className="col">
            <span> {selectedQuiz.shuffle_answers ? "Yes" : "No"}</span>
          </div>
        </div>
        <div id="wd-time-limit-preview" className="row align-items-center">
          <label
            htmlFor="wd-display-grade-as"
            className="col-form-label col-3 text-end"
          >
            <b>Time Limit </b>
          </label>
          <div className="col">
            <span>
              {" "}
              {selectedQuiz.has_time_limit
                ? selectedQuiz.time_limit + " Minutes"
                : "None"}{" "}
            </span>
          </div>
        </div>
        <div
          id="wd-multple-attempts-preview"
          className="row align-items-center"
        >
          <label
            htmlFor="wd-display-grade-as"
            className="col-form-label col-3 text-end"
          >
            <b>Multiple Attempts </b>
          </label>
          <div className="col">
            <span> {selectedQuiz.multiple_attempts ? "Yes" : "No"}</span>
          </div>
        </div>
        <div id="wd-attempts-preview" className="row align-items-center">
          <label
            htmlFor="wd-display-grade-as"
            className="col-form-label col-3 text-end"
          >
            <b>How Many Attempts </b>
          </label>
          <div className="col">
            <span> {selectedQuiz.attempts}</span>
          </div>
        </div>
        <div id="wd-show-answers-preview" className="row align-items-center">
          <label
            htmlFor="wd-display-grade-as"
            className="col-form-label col-3 text-end"
          >
            <b>Show Correct Answers </b>
          </label>
          <div className="col">
            <span> {selectedQuiz.show_correct ? "Immediately" : "Never"}</span>
          </div>
        </div>
        <div id="wd-one-at-a-time-preview" className="row align-items-center">
          <label
            htmlFor="wd-display-grade-as"
            className="col-form-label col-3 text-end"
          >
            <b>One Question at a Time </b>
          </label>
          <div className="col">
            <span> {selectedQuiz.one_question_at_a_time ? "Yes" : "No"}</span>
          </div>
        </div>
        <div id="wd-code-preview" className="row align-items-center">
          <label
            htmlFor="wd-display-grade-as"
            className="col-form-label col-3 text-end"
          >
            <b>Access Code </b>
          </label>
          <div className="col">
            <span> {selectedQuiz.access_code}</span>
          </div>
        </div>
        <div id="wd-webcam-preview" className="row align-items-center">
          <label
            htmlFor="wd-display-grade-as"
            className="col-form-label col-3 text-end"
          >
            <b>Webcam Required </b>
          </label>
          <div className="col">
            <span> {selectedQuiz.webcam_required ? "Yes" : "No"}</span>
          </div>
        </div>
        <div id="wd-locked-preview" className="row align-items-center">
          <label
            htmlFor="wd-display-grade-as"
            className="col-form-label col-3 text-end"
          >
            <b>Lock Questions After Answering </b>
          </label>
          <div className="col">
            <span>
              {" "}
              {selectedQuiz.lock_questions_after_answering ? "Yes" : "No"}
            </span>
          </div>
        </div>
      </div>
      <br />
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Due</th>
            <th scope="col">Available From</th>
            <th scope="col">Until</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{selectedQuiz.due_date}</td>
            <td>{selectedQuiz.available_date}</td>
            <td>{selectedQuiz.available_until_date}</td>
          </tr>
        </tbody>
      </table>
    </div>
  ) : (
    <div id="wd-assignments-editor">
      <div className="d-flex justify-content-center">
        <button className="btn btn-secondary me-3">Preview</button>
        <button
          className="btn btn-secondary me-3"
          onClick={() =>
            navigate(`/Kanbas/Courses/${cid}/Quizzes/${qid}/Editor`)
          }
        >
          <FaPencil className="text-secondary me-2" />
          Edit
        </button>
      </div>
      <hr />
      <h1>Loading...</h1>
    </div>
  );
}
