import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const QUIZZES_API = `${REMOTE_SERVER}/api/quizzes`;
const QUESTIONS_API = `${REMOTE_SERVER}/api/questions`;
const ANSWERS_API = `${REMOTE_SERVER}/api/answers`;

// Quiz
export const updateQuiz = async (quiz: any) => {
  const { data } = await axios.put(`${QUIZZES_API}/${quiz._id}`, quiz);
  return data;
};

export const deleteQuiz = async (quizzesId: string) => {
  const response = await axios.delete(`${QUIZZES_API}/${quizzesId}`);
  return response.data;
};

export const getQuiz = async (quizId: string) => {
  const { data } = await axios.get(`${QUIZZES_API}/${quizId}`);
  return data;
};

// Answers
export const getAnswersForQuiz = async (
  quizId: string,
  attempt: number,
  userId: string
) => {
  const response = await axios.get(
    `${ANSWERS_API}/${quizId}/${userId}/${attempt}`
  );
  return response.data;
};

export const createOrUpdateAnswer = async (answer: any) => {
  const response = await axios.post(`${ANSWERS_API}`, answer);
  return response.data;
};

export const getLatestAnswersForQuiz = async (
  quizId: string,
  userId: string
) => {
  const response = await axios.get(`${ANSWERS_API}/${quizId}/${userId}`);
  return response.data;
};

// Questions
export const findQuestionForQuiz = async (quizId: string) => {
  const response = await axios.get(`${QUIZZES_API}/${quizId}/questions`);
  return response.data;
};

export const createQuestionForQuiz = async (quizId: string, question: any) => {
  const response = await axios.post(
    `${QUIZZES_API}/${quizId}/questions`,
    question
  );
  return response.data;
};

export const updateQuestion = async (question: any) => {
  const { data } = await axios.put(
    `${QUESTIONS_API}/${question._id}`,
    question
  );
  return data;
};

export const deleteQuestion = async (questionId: string) => {
  const response = await axios.delete(`${QUESTIONS_API}/${questionId}`);
  return response.data;
};
