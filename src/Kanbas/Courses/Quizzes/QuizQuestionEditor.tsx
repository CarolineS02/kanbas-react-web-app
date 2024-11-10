import "../../styles.css";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import QuestionContainer from "./QuestionContainer";

export default function QuizQuestionEditor() {
  const { qid } = useParams();
  const { cid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const [questions, setQuestions] = useState([
    {
      title: "New Question",
      question: "",
      points: "0",
      type: "Multiple Choice",
      choices: [""],
      answer: "",
    }
  ]);


  const handleNewQuestion = () => {
    const newQuestion = {
      title: "New Question",
      question: "",
      points: "0",
      type: "Multiple Choice",
      choices: [""],
      answer: "",
    }
    setQuestions((prevQuestions) => [...prevQuestions, newQuestion]);
  }

  return (
    <div id="wd-quiz-editor">
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className="nav-link active " aria-current="page" href="#">
            Details
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link text-danger "
            href={`#/Kanbas/Courses/${cid}/Quizzes/${qid}/QuestionsEditor`}
          >
            Questions
          </a>
        </li>
      </ul>
      <br />

      <div id="wd-quiz-questions" className="row justify-content-center">
        {questions.map((question) => (
          <QuestionContainer question={question}/>
        ))}
      </div>

      <div className=" d-flex justify-content-center">
        <button className="btn btn-secondary"
        onClick={handleNewQuestion}
        >+ New Question</button>
      </div>

      <hr />
      <div
        id="wd-edit-assignment-buttons"
        className="d-flex justify-content-center"
      >
        <button
          id="wd-save"
          className="btn btn-lg btn-danger me-2"
          //   onClick={() => {
          //     dispatch(updateAssignment({
          //       _id: aid,
          //       title: title,
          //       course: cid,
          //       description: description,
          //       points: points,
          //       due_date: due_date,
          //       available_date: available_date,
          //       available_until_date: available_until_date
          //     }))
          //     navigate(`/Kanbas/Courses/${cid}/Assignments`);
          //   }}
          type="button"
        >
          Save
        </button>
        <button
          id="wd-save-and-publish"
          className="btn btn-lg btn-secondary me-2"
        >
          Save and Publish
        </button>
        <button
          id="wd-cancel"
          className="btn btn-lg btn-secondary me-2"
          //   onClick={() => {
          //     if(isNewQuiz){
          //       dispatch(deleteAssignment( aid ))
          //       navigate(`/Kanbas/Courses/${cid}/Assignments`);
          //     } else {
          //       navigate(`/Kanbas/Courses/${cid}/Assignments`);
          //     }
          //   }}
          type="button"
        >
          Cancel
        </button>
      </div>
      <hr />
    </div>
  );
}
