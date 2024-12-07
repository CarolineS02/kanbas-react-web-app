import "../../styles.css";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import * as quizClient from "./client";
import TakingQuestionContainer from "./TakingQuestionContainer";
import { RiErrorWarningLine } from "react-icons/ri";
import { LiaPencilAltSolid } from "react-icons/lia";

export default function QuizScreen({ preview }: { preview: boolean }) {
  const { qid, cid } = useParams();
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [quizInfo, setQuizInfo] = useState<any | null>(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [startDate, setStartDate] = useState<string>("");
  const navigate = useNavigate();
  const [quizAnswers, setQuizAnswers] = useState<any[]>([]);
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const fetchQuiz = async () => {
    const results = await quizClient.findQuestionForQuiz(qid as string);
    setQuizQuestions(results);
    const resultQuiz = await quizClient.getQuiz(qid as string);
    setQuizInfo(resultQuiz);

    var resultAnswers = await quizClient.getAnswersForQuiz(
        qid as string,
        0,
        currentUser._id
      ); // 0 is placeholder for attempt number
      if (Array.isArray(resultAnswers) && resultAnswers.length === 0) {
        resultAnswers = Array.from({ length: results.length }, () => ({
          quiz: qid,
          user: currentUser._id,
          answer: [],
          attempt: 1,
        }));
      }
      setQuizAnswers(resultAnswers);

  };
  useEffect(() => {
    fetchQuiz();
    setStartDate(new Date().toString());
  }, []);

  const submitQuiz = async () => {
    quizAnswers.map(
      async (a) =>
        await quizClient.createAnswer(a)
    );
  };

  const updateAnswer = (updatedAnswer: any) => {
    setQuizAnswers((prevAnswers) =>
      prevAnswers.map((prevAnswer, idx) =>
        idx === questionIndex ? updatedAnswer : prevAnswer
      )
    );
  };

  return (
    <div id="wd-quiz-taker">
      <h2>
        <b>{quizInfo?.title}</b>
      </h2>
      {preview && (
        <p className="p-2 bg-warning bg-gradient text-danger rounded">
          <RiErrorWarningLine className="text-danger me-1" />
          This is a preview of the published version of the quiz
        </p>
      )}
      <p>Started: {startDate}</p>
      <h2>Quiz Intructions</h2>
      <hr />

      <div
        id="wd-quiz-questions-and-answers"
        className="row justify-content-center mb-2"
      >
        {quizQuestions.length > 1 && quizAnswers.length > 1 && (
          <TakingQuestionContainer
            question={quizQuestions[questionIndex]}
            questionAnswer={quizAnswers[questionIndex]}
            updateAnswer={updateAnswer}
            questionIndex={questionIndex}
          />
        )}
        {questionIndex < quizQuestions.length - 1 && (
          <div className="d-flex flex-row justify-content-center mt-2">
            <button
              className="btn btn-secondary"
              onClick={() => setQuestionIndex(questionIndex + 1)}
            >
              Next
            </button>
          </div>
        )}
      </div>

      <div className="border d-flex p-2 mb-3 flex-row-reverse align-items-center">
        <button
          className="btn btn-secondary float-end me-2"
          onClick={submitQuiz}
        >
          Submit Quiz
        </button>
        <p className="me-2">Quiz saved at ...</p>
      </div>

      {preview && (
        <p
          className="border bg-secondary p-2 mb-3 rounded"
          onClick={() =>
            navigate(`/Kanbas/Courses/${cid}/Quizzes/${qid}/Editor`)
          }
        >
          <LiaPencilAltSolid className="me-2" />
          Keep editing this quiz
        </p>
      )}

      <h3>Questions</h3>
      <div className="list-group">
        {quizQuestions.map((quizQuestion: any, idx: number) => (
          <ul className="text-danger" onClick={() => setQuestionIndex(idx)}>
            {idx === questionIndex ? (
              <b>{quizQuestion.title}</b>
            ) : (
              <span>{quizQuestion.title}</span>
            )}
          </ul>
        ))}
      </div>
    </div>
  );
}
