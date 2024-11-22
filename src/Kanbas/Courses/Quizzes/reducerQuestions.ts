import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questions: [],
};
const questionSice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    setQuestions: (state, action) => {
      state.questions = action.payload;
    },
    addQuestion: (state, { payload: question }) => {

      state.questions = [...state.questions, question] as any;
    },
    deleteQuestion: (state, { payload: questionId }) => {
      state.questions = state.questions.filter(
        (q: any) => q._id !== questionId);
    },
    updateQuestion: (state, { payload: question }) => {
      state.questions = state.questions.map((q: any) =>
        q._id === question._id ? question : q
      ) as any;
    },
  },
});
export const { addQuestion, deleteQuestion, updateQuestion, setQuestions } =
questionSice.actions;
export default questionSice.reducer;