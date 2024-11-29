import "../../styles.css";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import QuestionContainer from "./QuestionContainer";
import { addQuestion, setQuestions, deleteQuestion, updateQuestion } from "./reducerQuestions";
import * as quizClient from "./client"
import { updateQuiz } from "./reducer";
  //this comment is for a git push to update my netlify,ignore this :)

  
export default function QuizQuestionEditor() {
  const { qid } = useParams();
  const { cid } = useParams();
  const dispatch = useDispatch();
  const { questions } = useSelector((state: any) => state.questionsReducer);

  const fetchQuestions = async () => {
    const questions = await quizClient.findQuestionForQuiz(qid as string);
    dispatch(setQuestions(questions));
  };
  useEffect(() => {
    fetchQuestions();
  }, []);

  const createQuestionForQuiz = async () => {
    if (!qid) return;
    const newQuestion = {
      title: "New Question",
      question: "",
      points: "0",
      type: "Multiple Choice",
      choices: [],
      answers: [],
      quiz: qid
    };
    const question = await quizClient.createQuestionForQuiz(qid, newQuestion);
    dispatch(addQuestion(question)); // Pass the server response directly
  };

  return (
    <div id="wd-quiz-editor">
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className="nav-link text-danger " aria-current="page" href={`#/Kanbas/Courses/${cid}/Quizzes/${qid}/Editor`}>
            Details
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link active "
            href={`#/Kanbas/Courses/${cid}/Quizzes/${qid}/QuestionsEditor`}
          >
            Questions
          </a>
        </li>
      </ul>
      <br />

      <div id="wd-quiz-questions" className="row justify-content-center">
        {questions.map((question: any) => (
          <QuestionContainer question={question} />
        ))}
      </div>

      <div className=" d-flex justify-content-center">
        <button className="btn btn-secondary"
          onClick={createQuestionForQuiz}
        >+ New Question</button>
      </div>

      <hr />
    </div>
  );
}
