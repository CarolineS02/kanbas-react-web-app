import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  assignments: [],
};
const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    setAssignments: (state, action) => {
      state.assignments = action.payload;
    },
    addAssignment: (state, { payload: assignment }) => {
      // const newAssignment: any = {
      //   _id: new Date().getTime().toString(),
      //   title: assignment.title,
      //   course: assignment.course,
      //   description: assignment.description,
      //   points: assignment.points,
      //   due_date: assignment.due_date,
      //   available_date: assignment.available_date,
      //   available_until_date: assignment.available_until_date
      // };

      state.assignments = [...state.assignments, assignment] as any;
    },
    deleteAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.filter(
        (a: any) => a._id !== assignmentId);
    },
    updateAssignment: (state, { payload: assignment }) => {
      state.assignments = state.assignments.map((a: any) =>
        a._id === assignment._id ? assignment : a
      ) as any;
    },
  },
});
export const { addAssignment, deleteAssignment, updateAssignment, setAssignments } =
assignmentsSlice.actions;
export default assignmentsSlice.reducer;