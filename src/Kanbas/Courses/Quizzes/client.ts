import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const QUIZZES_API = `${REMOTE_SERVER}/api/quizzes`;

export const updateQuiz = async (quiz: any) => {
    const { data } = await axios.put(`${QUIZZES_API}/${quiz._id}`, quiz);
    return data;
};

export const deleteQuiz = async (quizzesId: string) => {
    const response = await axios.delete(`${QUIZZES_API}/${quizzesId}`);
    return response.data;
};
