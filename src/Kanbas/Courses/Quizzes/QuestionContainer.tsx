import { IoIosArrowDown } from "react-icons/io";
import "../../styles.css";
import { useState } from "react";
import { updateQuestion } from "./reducerQuestions";
import * as quizzesClient from "./client"
import { useDispatch } from "react-redux";

export default function QuestionContainer({ question }: { question: any }) {
  const [choices, setChoices] = useState<string[]>(question.choices);
  const [type, setType] = useState<string>(question.type);
  const [answers, setAnswers] = useState<string[]>(question.answers);
  const [description, setDescription] = useState<string>(question.question);
  const [title, setTitle] = useState<string>(question.title)
  const [points, setPoints] = useState<string>(question.points)
  const dispatch = useDispatch();

  const handleNewChoice = (choice: string) => {
    setChoices((prevChoices) => [...prevChoices, choice]);
  };

  const handleUpdateChoice = (index: number, newChoice: string) => {
    setChoices((prevChoices) => {
      const updatedChoices = prevChoices.map((choice, idx) =>
        idx === index ? newChoice : choice
      );
      if (type === "Fill In the Blank") {
        setAnswers(updatedChoices); // Sync answers with the updated choices
      }
      return updatedChoices;
    });
  };

  // const removeQuestion = async (questionId: string) => {
  //   await quizzesClient.deleteQuestion(questionId);
  //   dispatch(deleteQuestion(questionId));
  // };
  
  const saveQuestion = async (question: any) => {
    await quizzesClient.updateQuestion(question);
    dispatch(updateQuestion(question));
  };


  return (
    <div id="wd-multiple-choice" className="w-75 border rounded p-3 m-2">
      {/* Header */}
      <div className="d-flex flex-row justify-content-between align-items-center">
        <input
          className="form-control me-3 w-50"
          defaultValue={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="wd-type input-group me-3 w-50">
          <select
            id="wd-type"
            className="form-control"
            defaultValue={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="Multiple Choice">Multiple Choice</option>
            <option value="True/False">True/False</option>
            <option value="Fill In the Blank">Fill In the Blank</option>
          </select>
          <span
            className="input-group-text"
            style={{ height: "100%", display: "flex", alignItems: "center" }}
          >
            <IoIosArrowDown style={{ fontSize: "1.50rem" }} />
          </span>
        </div>

        <label className="ms-4 me-2" htmlFor="wd-question-editor-title">
          pts:
        </label>
        <input
          id="wd-question-editor-title"
          className="form-control w-25"
          defaultValue={points}
          onChange={(e) => setPoints(e.target.value)}
        />
      </div>

      <hr />
      <p>
        {type === "Multiple Choice"
          ? "Enter your question and multiple answers, then select the one correct answer."
          : type === "True/False"
            ? "Enter your question text, then select if True or False is the correct answer."
            : "Enter your question text, then define all possible correct answers for the blank. Students will see the question followed by a small textbox to type their answer."}
      </p>

      <h4>
        <b>Question:</b>
      </h4>
      <textarea
        id="wd-description"
        className="form-control"
        rows={12}
        cols={50}
        defaultValue={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <br />

      <h4>
        <b>Answers:</b>
      </h4>

      {type === "True/False" ? (
        <div className="ms-3">
          <input
            type="radio"
            name={`true-false-${question.id}`}
            id="wd-true"
            className="me-2"
            defaultChecked={answers.includes("True")}
            onClick={() => {
              setAnswers(["True"])
            }} />
          <label
            htmlFor="wd-true"
            className={answers.includes("True") ? "text-success" : ""}
            onClick={() => {
              setAnswers(["True"])
            }}
          >
            True
          </label>
          <br />
          <input
            type="radio"
            name={`true-false-${question.id}`}
            id="wd-false"
            className="me-2"
            defaultChecked={answers.includes("False")}
            onClick={() => {
              setAnswers(["False"])
            }}
          />
          <label
            htmlFor="wd-false"
            className={answers.includes("False") ? "text-success" : ""}
            onClick={() => {
              setAnswers(["False"])
            }}
          >
            False
          </label>
        </div>
      ) : (
        <div>
          {choices.map((choice, idx) => {
            return (
              type === 'Multiple Choice' ?
                (
                  <div key={idx} className="ms-3 m-4 d-flex flex-row align-items-center">
                    <input
                      type="radio"
                      name={`correct-answer-${question.id}`}
                      id={`correct-answer-${idx}`}
                      className="me-2"
                      defaultChecked={answers.includes(choice)}
                      onClick={() => setAnswers([choices[idx]])}
                    />
                    <label htmlFor={`correct-answer-${idx}`} className="me-2">
                      Possible Answer
                    </label>
                    <input
                      className="form-control w-25"
                      id={idx.toString()}
                      defaultValue={choice}
                      onChange={(e) => handleUpdateChoice(idx, e.target.value)}
                    />
                  </div>
                ) : (
                  <div
                    key={idx}
                    className=" ms-3 m-4 d-flex flex-row align-items-center"
                  >
                    <label htmlFor={idx.toString()} className="me-2">
                      Possible Answer
                    </label>
                    <input
                      className="form-control w-25"
                      id={idx.toString()}
                      defaultValue={choice}
                      onChange={(e) => handleUpdateChoice(idx, e.target.value)}
                    />
                  </div>
                )
            );
          })}
          <div className="d-flex justify-content-end">
            <button
              className="btn btn-default text-danger"
              onClick={() => handleNewChoice("")}
            >
              + Add Another Answer
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="m-3">
        <button className="btn btn-secondary me-3"
        onClick={() => {
          // setChoices(question.choices);
          // setType(question.type);
          // setAnswers(question.answers)
          // setDescription(question.question);
          // setTitle(question.title)
          // setPoints(question.points)
          // navigate(`#/Kanbas/Courses/${cid}/Quizzes/${qid}/QuestionsEditor`)
        }}>Cancel</button>
        <button className="btn btn-danger"
          onClick={() => {
            const newQuestion = {
              _id: question._id,
              title: title,
              question: description,
              points: points,
              type: type,
              choices: choices,
              answers: answers,
            }
            saveQuestion(newQuestion)
          }}>Update Question</button>
      </div>
    </div>
  );
}
