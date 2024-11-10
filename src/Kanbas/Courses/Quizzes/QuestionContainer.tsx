import { IoIosArrowDown } from "react-icons/io";
import "../../styles.css";
import { useState } from "react";

export default function QuestionContainer({ question }: { question: any }) {
  const [choices, setChoices] = useState<string[]>(question.choices);
  const [type, setType] = useState<string>(question.type);
  const [answer, setAnswer] = useState<string>(question.answer);
  const [description, setDescription] = useState<string>(question.description);

  const handleNewChoice = (choice: string) => {
    setChoices((prevChoices) => [...prevChoices, choice]);
  };

  return (
    <div id="wd-multiple-choice" className="w-75 border rounded p-3 m-2">
      {/* Header */}
      <div className="d-flex flex-row justify-content-between align-items-center">
        <input
          className="form-control me-3"
          value={question.title} // Corrected input to display title
          readOnly // Making the input read-only if it's just for display
        />
        <div className="wd-type input-group me-3">
          <select
            id="wd-type"
            className="form-control"
            value={type} // Bind select value to state or prop
            onChange={(e) => setType(e.target.value)} // Handle change if needed
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

        <label className="ms-4" htmlFor="wd-question-editor-title">
          pts:
        </label>
        <input
          id="wd-question-editor-title"
          className="form-control"
          value={question.points} // Corrected input to display points
          readOnly
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
        value={question.description || ""} // Display description if available
      />

      <br />

      <h4>
        <b>Answers:</b>
      </h4>

      {type === "True/False" ? (
        <div className="ms-3">
          <input type="radio" name="true-false" id="wd-true" className="me-2" />
          <label
            htmlFor="wd-true"
            className={answer === "True" ? "text-success" : ""}
            onClick={() => setAnswer("True")}
          >
            True
          </label>
          <br />
          <input
            type="radio"
            name="true-false"
            id="wd-false"
            className="me-2"
          />
          <label
            htmlFor="wd-false"
            className={answer === "False" ? "text-success" : ""}
            onClick={() => setAnswer("False")}
          >
            False
          </label>
        </div>
      ) : (
        <div>
          {choices.map((choice, idx) => {
            return (
              <div
                key={idx}
                className=" ms-3 m-4 d-flex flex-row align-items-center"
              >
                <label htmlFor={idx.toString()} className="me-2">
                  Possible Answer
                </label>
                <input className="form-control w-25" id={idx.toString()} />
              </div>
            );
          })}
          <div className="d-flex justify-content-end">
            <button
              className="btn btn-default text-danger"
              onClick={() => handleNewChoice("test answer")}
            >
              + Add Another Answer
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="m-3">
        <button className="btn btn-secondary me-3">Cancel</button>
        <button className="btn btn-danger">Update Question</button>
      </div>
    </div>
  );
}
