import "../../styles.css";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import QuestionContainer from "./QuestionContainer";
import {
  addOrUpdateQuestion,
  setQuestions,
} from "./reducerQuestions";
import * as quizClient from "./client";
import PreviewContainer from "./PreviewContainer";
import * as quizzesClient from "./client";
//this comment is for a git push to update my netlify,ignore this :)

export default function QuizQuestionEditor() {
  const { qid, cid } = useParams();
  const dispatch = useDispatch();
  const { questions } =
    useSelector((state: any) => state.questionsReducer) || [];
  const [questionsState, setQuestionsState] = useState<any[]>(questions);
  const navigate = useNavigate();

  const fetchQuestions = async () => {
    const questions = await quizClient.findQuestionForQuiz(qid as string);
    dispatch(setQuestions(questions));
    setQuestionsState(questions);
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
      quiz: qid,
      sequence: questionsState.length,
    };
    let question = await quizClient.createQuestionForQuiz(qid, newQuestion);
    question = { ...question, editing: false };
    setQuestionsState((prevQuestions) => [...prevQuestions, question]);
    // dispatch(addQuestion(question)); // Pass the server response directly
  };

  const deleteQuestion = (quesId: string) => {
    const updatedQuestions = questionsState.filter(
      (q: any) => q._id !== quesId
    );
    setQuestionsState(updatedQuestions);
  };

  const updateQuestionState = (ques: any) => {
    const updatedQuestions = questionsState.map((q: any) =>
      q._id === ques._id ? ques : q
    );
    setQuestionsState(updatedQuestions);
  };

  const saveQuestions = async () => {
    const savedQuestions = await Promise.all(
      questionsState.map(async (question: any) => {
        await quizzesClient.updateQuestion(question);
        const uneditQuestion = { ...question, editing: false };
        dispatch(addOrUpdateQuestion(uneditQuestion));
        return uneditQuestion;
      })
    );
    setQuestionsState(savedQuestions);
  };

  return (
    <div id="wd-quiz-editor">
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a
            className="nav-link text-danger "
            aria-current="page"
            href={`#/Kanbas/Courses/${cid}/Quizzes/${qid}/Editor`}
          >
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
        {questionsState.map((question: any) => {
          if (question.editing) {
            return (
              <QuestionContainer
                question={question}
                updateQuestionState={updateQuestionState}
                deleteQuestion={deleteQuestion}
              />
            );
          } else {
            return (
              <PreviewContainer
                question={question}
                updateQuestionState={updateQuestionState}
              />
            );
          }
        })}
      </div>

      <div className=" d-flex justify-content-center">
        <button className="btn btn-secondary" onClick={createQuestionForQuiz}>
          + New Question
        </button>
      </div>

      <hr />

      <div
        id="wd-edit-assignment-buttons"
        className="d-flex justify-content-center"
      >
        <button
          id="wd-save"
          className="btn btn-lg btn-danger me-2"
          onClick={() => {
            saveQuestions();
          }}
          type="button"
        >
          Save
        </button>
        <button
          id="wd-cancel"
          className="btn btn-lg btn-secondary me-2"
          onClick={() => window.location.reload()}
          type="button"
        >
          Cancel
        </button>
      </div>
      <hr />
    </div>
  );
}
