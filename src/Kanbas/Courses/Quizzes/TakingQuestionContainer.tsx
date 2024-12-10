import "../../styles.css";

export default function TakingQuestionContainer({
  question,
  questionAnswer,
  updateAnswer,
  questionIndex,
  setTimeUpdated,
  corrections,
}: {
  question: any;
  questionAnswer: any;
  updateAnswer: (answers: any[]) => void;
  questionIndex: number;
  setTimeUpdated: (time: string) => void;
  corrections: boolean;
}) {
  return (
    <>
      {/* Header */}
      <div
        className={`w-75 p-2 pt-3 border d-flex flex-row justify-content-between align-items-center ${
          corrections && questionAnswer.correct && "bg-success"
        } 
      ${corrections && !questionAnswer.correct && "bg-danger"}
      ${!corrections && "bg-secondary"}`}
      >
        <h4 className={`${corrections && "text-white"}`}>{question.title}</h4>
        <h5 className={`${corrections && "text-white"}`}>
          {question.points} pts
        </h5>
      </div>
      <div className="w-75 border">
        {/* Question body */}
        <p className="pt-2">{question.question}</p>

        {/* Answers */}
        {question.type === "True/False" ? (
          <div className="mb-3">
            <hr />
            <input
              name={`correct-answer-${question.id}`}
              id={`correct-answer-true`}
              type="radio"
              className="me-2"
              checked={questionAnswer.answer.includes("True")}
              disabled={corrections}
              onChange={(e) => {
                // If checked, add to array
                if (e.target.checked) {
                  updateAnswer({
                    ...questionAnswer,
                    answer: ["True"],
                    quiz_question: question._id,
                    correct: question.answers.includes("True"),
                    sequence: questionIndex,
                  });
                  setTimeUpdated(new Date().toString());
                }
              }}
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
              checked={questionAnswer.answer.includes("False")}
              disabled={corrections}
              onChange={(e) => {
                // If checked, add to array
                if (e.target.checked) {
                  updateAnswer({
                    ...questionAnswer,
                    answer: ["False"],
                    quiz_question: question._id,
                    correct: question.answers.includes("False"),
                    sequence: questionIndex,
                  });
                  setTimeUpdated(new Date().toString());
                }
              }}
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
                      type="checkbox"
                      className="me-2"
                      checked={questionAnswer.answer.includes(choice)}
                      disabled={corrections}
                      onChange={(e) => {
                        if (e.target.checked) {
                          // Clear all other selections and set the current choice
                          updateAnswer({
                            ...questionAnswer,
                            answer: [choice],
                            quiz_question: question._id,
                            correct: question.answers.includes(choice),
                            sequence: questionIndex,
                          });
                        } else {
                          // Uncheck the current selection (optional, based on desired behavior)
                          updateAnswer({
                            ...questionAnswer,
                            answer: [],
                            quiz_question: question._id,
                            correct: false,
                            sequence: questionIndex,
                          });
                        }
                        setTimeUpdated(new Date().toString());
                      }}
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
          <div className="mb-3">
            <hr />
            <input
              name={`correct-answer-${question.id}`}
              type="text"
              className="me-2"
              value={
                questionAnswer.answer.length === 1
                  ? questionAnswer.answer[0]
                  : ""
              }
              disabled={corrections}
              onChange={(e) => {
                updateAnswer({
                  ...questionAnswer,
                  answer: [e.target.value],
                  quiz_question: question._id,
                  correct: question.answers.includes(e.target.value),
                  sequence: questionIndex,
                });
                setTimeUpdated(new Date().toString());
              }}
            />
          </div>
        )}
      </div>
    </>
  );
}
