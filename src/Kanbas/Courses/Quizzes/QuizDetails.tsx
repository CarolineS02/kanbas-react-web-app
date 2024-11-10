import { IoIosArrowDown } from "react-icons/io";
import "../../styles.css"
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { FaPencil } from "react-icons/fa6";

export default function QuizDetails() {
    const { qid } = useParams();
    const { cid } = useParams();
    const navigate = useNavigate();

      const selectedQuiz = useSelector((state: any) =>
        state.quizzesReducer.quizzes.find((q: any) => q._id === qid));


    return (
        <div id="wd-assignments-editor">
            <div className="d-flex justify-content-center">
                <button className="btn btn-secondary me-3">Preview</button>
                <button className="btn btn-secondary me-3" onClick={() => navigate(`/Kanbas/Courses/${cid}/Quizzes/${qid}/Editor`)}>
                <FaPencil  className="text-secondary me-2" />
                    Edit
                </button>
            </div>
            <hr />
            <h1>{selectedQuiz.title}</h1>
            <div id="wd-quiz-preview-info">
                <div id="wd-type-preview" className="row align-items-center">
                    <label htmlFor="wd-display-grade-as" className="col-form-label col-3 text-end"><b>Quiz Type </b></label>
                    <div className="col">
                        <span>{selectedQuiz.type}</span>
                    </div>
                </div>
                <div id="wd-points-preview" className="row align-items-center">
                    <label htmlFor="wd-display-grade-as" className="col-form-label col-3 text-end"><b>Points </b></label>
                    <div className="col">
                        <span>{selectedQuiz.points}</span>
                    </div>
                </div>
                <div id="wd-group-preview" className="row align-items-center">
                    <label htmlFor="wd-display-grade-as" className="col-form-label col-3 text-end"><b>Assignment Group </b></label>
                    <div className="col">
                        <span>{selectedQuiz.group}</span>
                    </div>
                </div>
                <div id="wd-shuffle-preview" className="row align-items-center">
                    <label htmlFor="wd-display-grade-as" className="col-form-label col-3 text-end"><b>Shuffle Answers </b></label>
                    <div className="col">
                        <span> {selectedQuiz.shuffle_answers ? "Yes" : "No"}</span>
                    </div>
                </div>
                <div id="wd-time-limit-preview" className="row align-items-center">
                    <label htmlFor="wd-display-grade-as" className="col-form-label col-3 text-end"><b>Time Limit </b></label>
                    <div className="col">
                        <span> {selectedQuiz.time_limit} Minutes</span>
                    </div>
                </div>
                <div id="wd-multple-attempts-preview" className="row align-items-center">
                    <label htmlFor="wd-display-grade-as" className="col-form-label col-3 text-end"><b>Multiple Attempts </b></label>
                    <div className="col">
                        <span> {selectedQuiz.multiple_attempts ? "Yes" : "No"}</span>
                    </div>
                </div>
                <div id="wd-attempts-preview" className="row align-items-center">
                    <label htmlFor="wd-display-grade-as" className="col-form-label col-3 text-end"><b>How Many Attempts </b></label>
                    <div className="col">
                        <span> {selectedQuiz.attempts}</span>
                    </div>
                </div>
                <div id="wd-show-answers-preview" className="row align-items-center">
                    <label htmlFor="wd-display-grade-as" className="col-form-label col-3 text-end"><b>Show Correct Answers </b></label>
                    <div className="col">
                        <span> {selectedQuiz.show_correct ? "Immediately" : "Never"}</span>
                    </div>
                </div>
                <div id="wd-one-at-a-time-preview" className="row align-items-center">
                    <label htmlFor="wd-display-grade-as" className="col-form-label col-3 text-end"><b>One Question at a Time </b></label>
                    <div className="col">
                        <span> {selectedQuiz.one_question_at_a_time ? "Yes" : "No"}</span>
                    </div>
                </div>
                <div id="wd-code-preview" className="row align-items-center">
                    <label htmlFor="wd-display-grade-as" className="col-form-label col-3 text-end"><b>Access Code </b></label>
                    <div className="col">
                        <span> {selectedQuiz.access_code}</span>
                    </div>
                </div>
                <div id="wd-webcam-preview" className="row align-items-center">
                    <label htmlFor="wd-display-grade-as" className="col-form-label col-3 text-end"><b>Webcam Required </b></label>
                    <div className="col">
                        <span> {selectedQuiz.webcam_required ? "Yes" : "No"}</span>
                    </div>
                </div>
                <div id="wd-locked-preview" className="row align-items-center">
                    <label htmlFor="wd-display-grade-as" className="col-form-label col-3 text-end"><b>Lock Questions After Answering </b></label>
                    <div className="col">
                        <span> {selectedQuiz.lock_questions_after_answering ? "Yes" : "No"}</span>
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
    );
}
