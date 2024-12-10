import "../../styles.css";

export default function PreviewContainer({
  question,
  updateQuestionState,
}: {
  question: any;
  updateQuestionState: (q: any) => void;
}) {
  return (
    <div className="m-2 w-75 p-2 pt-3 d-flex flex-column justify-content-between">
      {/* Header */}
      <div
        className={`p-2 pt-3 border d-flex flex-row justify-content-between align-items-center bg-secondary`}
      >
        <span className="d-flex flex-row align-items-center">
          <h4>{question.title}</h4>
          <button
            className="btn btn-danger ms-3"
            onClick={() => {
              const editQuestion = { ...question, editing: true };
              updateQuestionState(editQuestion);
            }}
          >
            Edit
          </button>
        </span>
        <h5>{question.points} pts</h5>
      </div>
      <div className="border">
        {/* Question body */}
        <p className="p-2">{question.question}</p>

        {/* Answers */}
        {question.type === "True/False" ? (
          <div className="p-2 mb-3">
            <hr />
            <input
              name={`correct-answer-${question.id}`}
              id={`correct-answer-true`}
              type="radio"
              className="me-2"
            />
            <label htmlFor={`correct-answer-true`} className="me-2">
              True
            </label>
            <hr />
            <input
              name={`correct-answer-${question.id}`}
              id={`correct-answer-false`}
              type="radio"
              className="me-2"
            />
            <label htmlFor={`correct-answer-false`} className="me-2">
              False
            </label>
          </div>
        ) : question.type === "Multiple Choice" ? (
          <div className="m-2 mb-3">
            {question.choices.map((choice: string, idx: number) => {
              return (
                <>
                  <hr />
                  <div key={idx} className="d-flex flex-row align-items-center">
                    <input
                      name={`correct-answer-${question.id}`}
                      id={`correct-answer-${idx}`}
                      type="radio"
                      className="me-2"
                    />
                    <label htmlFor={`correct-answer-${idx}`} className="me-2">
                      {choice}
                    </label>
                  </div>
                </>
              );
            })}
          </div>
        ) : (
          // Fill in the blank
          <div className="mb-3 p-2">
            <hr />
            <input
              name={`correct-answer-${question.id}`}
              type="text"
              className="me-2"
            />
          </div>
        )}
      </div>
    </div>
  );
}
