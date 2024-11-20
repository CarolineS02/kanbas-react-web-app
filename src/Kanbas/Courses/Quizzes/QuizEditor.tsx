import { IoIosArrowDown } from "react-icons/io";
import "../../styles.css"
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { TiCancel } from "react-icons/ti"
import { deleteQuiz, updateQuiz } from "./reducer";
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
import * as coursesClient from "../client"
import { setQuizzes } from "./reducer";
import * as quizClient from "./client"

export default function QuizEditor() {
  const { qid } = useParams();
  const { cid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

const [points, setPoints] = useState<any>(100);
const [type, setType] = useState<any>("Graded Quiz");
const [title, setTitle] = useState<any>("New Quiz");
const [description, setDescription] = useState<any>("");
const [group, setGroup] = useState<any>("Quizzes");
const [shuffle, setShuffle] = useState<any>(true);
const [hasTimeLimit, setHasTimeLimit] = useState<any>(true)
const [timeLimit, setTimeLimit] = useState<any>("20");
const [hasMultipleAttempts, setHasMulitpleAttempts] = useState<any>(false);
const [attempts, setAttempts] = useState<any>("1");
const [showCorrect, setShowCorrect] = useState<any>(false);
const [accessCode, setAccessCode] = useState<any>("");
const [oneQuestionAtATime, setOneQuestionAtATime] = useState<any>(true);
const [webcamRequired, setWebcamRequired] = useState<any>(false);
const [lockQuestions, setLockQuestions] = useState<any>(false);
const [due_date, setDueDate] = useState<any>("");
const [available_date, setAvailableDate] = useState<any>("");
const [available_until_date, setAvailableUntilDate] = useState<any>("");
const [published, setPublished] = useState<any>(false)

const fetchQuiz = async () => {
    const quizzes = await coursesClient.findQuizForCourse(cid as string);
    dispatch(setQuizzes(quizzes));
    const quiz = quizzes.find((quiz: any) => quiz._id === qid)
    if(quiz){
      setPoints(quiz.points)
      setType(quiz.type)
      setTitle(quiz.title)
      setDescription(quiz.description)
      setGroup(quiz.group)
      setShuffle(quiz.shuffle_answers)
      setHasTimeLimit(quiz.has_time_limit)
      setHasMulitpleAttempts(quiz.multiple_attempts)
      setAttempts(quiz.attempts)
      setShowCorrect(quiz.show_correct)
      setAccessCode(quiz.access_code)
      setOneQuestionAtATime(quiz.one_question_at_a_time)
      setWebcamRequired(quiz.webcam_required)
      setLockQuestions(quiz.lock_questions_after_answering)
      setDueDate(quiz.due_date)
      setAvailableDate(quiz.available_date)
      setAvailableUntilDate(quiz.available_until_date)
      setPublished(quiz.published)
    }
};
const removeQuiz = async (quizId: string) => {
  await quizClient.deleteQuiz(quizId);
  dispatch(deleteQuiz(quizId));
};
const saveQuiz = async (quiz: any) => {
  await quizClient.updateQuiz(quiz);
  dispatch(updateQuiz(quiz));
};
useEffect(() => {
  fetchQuiz();
}, []);

  const isNewQuiz = location.state?.isNewQuiz;

  return (
    <div id="wd-quiz-editor">
      <div className="d-flex justify-content-end align-items-center">
        <span className="me-3 fs-5">Points {points}</span>
        <span className="d-flex me-3 text-secondary align-items-center">
          {published ? <GreenCheckmark /> : <TiCancel className="fs-3" />}
          {published ? "Published" : "Not Published"}
        </span>
        <button id="wd-add-assignment-group" className="btn btn-s btn-secondary float-end">
          <IoEllipsisVertical className="fs-4" />
        </button>
      </div>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className="nav-link active " aria-current="page" href={`#/Kanbas/Courses/${cid}/Quizzes/${qid}/Editor`}>Details</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-danger " href={`#/Kanbas/Courses/${cid}/Quizzes/${qid}/QuestionsEditor`}>Questions</a>
        </li>
      </ul>
      <br />

      <input id="wd-name" className="form-control w-50"
        onChange={(event) => {
          setTitle(event.target.value);
        }}
        value={title} /><br />
      <label className="form-check-label mb-1" htmlFor="wd-description">Quiz Instructions:</label>
      <textarea id="wd-description" className="form-control" value={description}
        onChange={(event) => {
          setDescription(event.target.value);
        }}
        rows={12} cols={50}>
      </textarea>

      <br />
      <div className="row mb-3 align-items-center">
        <label htmlFor="wd-type" className="col-form-label col-3 text-end">Quiz Type</label>
        <div className="col">
          <div className="wd-type input-group">
            <select id="wd-type" className="form-control"
              onChange={(event) => setType(event.target.value)}
              value={type}>
              <option value="Graded Quiz">Graded Quiz</option>
              <option value="Practice Quiz">Practice Quiz</option>
              <option value="Graded Survey">Graded Survey</option>
              <option value="Ungraded Survey">Ungraded Survey</option>
            </select>
            <span className="input-group-text" style={{ height: '100%', display: 'flex', alignItems: 'center' }}>
              <IoIosArrowDown style={{ fontSize: '1.50rem' }} />
            </span>
          </div>
        </div>
      </div>

      <div className="row mb-3 align-items-center">
        <label htmlFor="wd-group" className="col-form-label col-3 text-end">Assignment Group</label>
        <div className="col">
          <div className="wd-group input-group">
            <select id="wd-group" className="form-control"
              onChange={(event) => setGroup(event.target.value)}
              value={group}>
              <option value="Quizzes">QUIZZES</option>
              <option value="Exams">EXAMS</option>
              <option value="Assignments">ASSIGNMENTS</option>
              <option value="Project">PROJECT</option>
            </select>
            <span className="input-group-text" style={{ height: '100%', display: 'flex', alignItems: 'center' }}>
              <IoIosArrowDown style={{ fontSize: '1.50rem' }} />
            </span>
          </div>
        </div>
      </div>

      <div className="row mb-3 align-items-center">
        <label htmlFor="wd-access-code" className="col-form-label col-3 text-end">Access Code</label>
        <div className="col">
          <input id="wd-access-code" className="form-control"
            onChange={(event) => {
              setAccessCode(event.target.value);
            }}
            value={accessCode} />
        </div>
      </div>

      <div className="row mb-3 ">
        <label htmlFor="wd-points" className="col-form-label col-3 text-end">Points</label>
        <div className="col">
          <input id="wd-points" className="form-control"
            onChange={(event) => {
              setPoints(event.target.value);
            }}
            value={points} />
          <br />
          <label className="col-form-label "><b>Options</b></label>
          <div className="form-check mb-3">
            <input
              type="checkbox"
              className="form-check-input"
              name="check-submission"
              id="wd-shuffle-answers"
              checked={shuffle}
              onChange={() => { setShuffle(!shuffle) }}
            />
            <label className="form-check-label" htmlFor="wd-shuffle-answers">
              Shuffle Answers
            </label>
          </div>
          <div className="form-check mb-3">
            <input
              type="checkbox"
              className="form-check-input"
              name="check-submission"
              id="wd-correct-answers"
              checked={showCorrect}
              onChange={() => { setShowCorrect(!showCorrect) }}
            />
            <label className="form-check-label" htmlFor="wd-correct-answers">
              Show Correct Answers
            </label>
          </div>
          <div className="form-check mb-3">
            <input
              type="checkbox"
              className="form-check-input"
              name="check-submission"
              id="wd-one-question"
              checked={oneQuestionAtATime}
              onChange={() => { setOneQuestionAtATime(!oneQuestionAtATime) }}
            />
            <label className="form-check-label" htmlFor="wd-one-question">
              One Question at a Time
            </label>
          </div>
          <div className="form-check mb-3">
            <input
              type="checkbox"
              className="form-check-input"
              name="check-submission"
              id="wd-lock-questions"
              checked={lockQuestions}
              onChange={() => { setLockQuestions(!lockQuestions) }}
            />
            <label className="form-check-label" htmlFor="wd-lock-questions">
              Lock Questions After Answering
            </label>
          </div>
          <div className="form-check mb-3">
            <input
              type="checkbox"
              className="form-check-input"
              name="check-submission"
              id="wd-webcam"
              checked={webcamRequired}
              onChange={() => { setWebcamRequired(!webcamRequired) }}
            />
            <label className="form-check-label" htmlFor="wd-webcam">
              Webcam Required
            </label>
          </div>

          <div className="d-flex align-items-center">
            <div className="form-check mb-2 me-auto">
              <input
                type="checkbox"
                className="form-check-input me-2"
                name="check-submission"
                id="wd-time-limit"
                checked={hasTimeLimit}
                onChange={() => { setHasTimeLimit(!hasTimeLimit) }}
              />
              <label className="form-check-label" htmlFor="wd-time-limit">
                Time Limit
              </label>
            </div>
            <div className="d-flex flex-row col-7 ms-3 mb-2 align-items-center">
              <input
                id="wd-time-minutes"
                className="form-control me-2 w-50"
                onChange={(event) => {
                  setTimeLimit(event.target.value);
                }}
                value={timeLimit}
              />
              <label className="form-check-label" htmlFor="wd-time-minutes">
                Minutes
              </label>
            </div>
          </div>

          <div className="border rounded p-2 d-flex align-items-center">
            <div className="form-check mb-2 me-auto">
              <input
                type="checkbox"
                className="form-check-input me-2"
                name="check-submission"
                id="wd-multiple-attempts"
                checked={hasMultipleAttempts}
                onChange={() => { setHasMulitpleAttempts(!hasMultipleAttempts) }}

              />
              <label className="form-check-label" htmlFor="wd-multiple-attempts">
                Allow Multiple Attempts
              </label>
            </div>
            <div className="d-flex flex-row col-7 ms-3 mb-2 align-items-center">
              <input
                id="wd-attempt-nummber"
                className="form-control me-2 w-50"
                onChange={(event) => {
                  setAttempts(event.target.value);
                }}
                value={attempts}
              />
              <label className="form-check-label" htmlFor="wd-attempt-number">
                Attempt(s)
              </label>
            </div>
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

      <hr />
      <div id="wd-edit-assignment-buttons" className="d-flex justify-content-center">
        <button
          id="wd-save"
          className="btn btn-lg btn-danger me-2"
          onClick={() => {
            saveQuiz({
              _id: qid,
              title: title,
              description: description,
              course: cid,
              type: type,
              points: points,
              group: group,
              shuffle_answers: shuffle,
              time_limit: timeLimit,
              has_time_limit: hasTimeLimit,
              multiple_attempts: hasMultipleAttempts,
              attempts: attempts,
              show_correct: showCorrect,
              access_code: accessCode,
              one_question_at_a_time: oneQuestionAtATime,
              webcam_required: webcamRequired,
              lock_questions_after_answering: lockQuestions,
              due_date: due_date,
              available_date: available_date,
              available_until_date: available_until_date,
              published: published
            })
            navigate(`/Kanbas/Courses/${cid}/Quizzes`);
          }}
          type="button">
          Save
        </button>
        <button
          id="wd-save-and-publish"
          className="btn btn-lg btn-secondary me-2"
          onClick={() => {
            saveQuiz({
              _id: qid,
              title: title,
              description: description,
              course: cid,
              type: type,
              points: points,
              group: group,
              shuffle_answers: shuffle,
              time_limit: timeLimit,
              has_time_limit: hasTimeLimit,
              multiple_attempts: hasMultipleAttempts,
              attempts: attempts,
              show_correct: showCorrect,
              access_code: accessCode,
              one_question_at_a_time: oneQuestionAtATime,
              webcam_required: webcamRequired,
              lock_questions_after_answering: lockQuestions,
              due_date: due_date,
              available_date: available_date,
              available_until_date: available_until_date,
              published: true
            })
            navigate(`/Kanbas/Courses/${cid}/Quizzes`);
          }}
          type="button">
          Save and Publish
        </button>
        <button id="wd-cancel"
          className="btn btn-lg btn-secondary me-2"
          onClick={() => {
            if (isNewQuiz) {
              if(qid){
                removeQuiz(qid)
              }
              navigate(`/Kanbas/Courses/${cid}/Quizzes`);
            } else {
              navigate(`/Kanbas/Courses/${cid}/Quizzes`);
            }
          }}
          type="button">
          Cancel
        </button>
      </div>
      <hr />
    </div >
  );
}
