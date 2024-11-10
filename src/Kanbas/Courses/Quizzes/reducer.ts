import { createSlice } from "@reduxjs/toolkit";
import { quizzes } from "../../Database";
const initialState = {
  quizzes: quizzes,
};
const quizSlice = createSlice({
  name: "quizzes",
  initialState,
  reducers: {
    addQuiz: (state, { payload: quiz }) => {
      const newQuiz: any = {
        _id: new Date().getTime().toString(),
        title: quiz.title,
        description: quiz.description,
        course: quiz.course,
        type: quiz.type,
        points: quiz.points,
        group: quiz.group,
        shuffle_answers: quiz.shuffle_answers,
        time_limit: quiz.time_limit,
        multiple_attempts: quiz.multiple_attempts,
        attempts: quiz.attempts,
        show_correct: quiz.show_correct,
        access_code: quiz.access_code,
        one_question_at_a_time: quiz.one_question_at_a_time,
        webcam_required: quiz.webcam_required,
        lock_questions_after_answering: quiz.lock_questions_after_answering,
        due_date: quiz.due_date,
        available_date: quiz.available_date,
        available_until_date: quiz.available_until_date,
        published: quiz.published
      };

      state.quizzes = [...state.quizzes, newQuiz] as any;
    },
    deleteQuiz: (state, { payload: quizId }) => {
      state.quizzes = state.quizzes.filter(
        (q: any) => q._id !== quizId);
    },
    updateQuiz: (state, { payload: quiz }) => {
      state.quizzes = state.quizzes.map((q: any) =>
        q._id === quiz._id ? quiz : q
      ) as any;
    },
  },
});
export const { addQuiz, deleteQuiz, updateQuiz } =
quizSlice.actions;
export default quizSlice.reducer;