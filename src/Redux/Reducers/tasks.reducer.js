import { createSlice } from "@reduxjs/toolkit";


export const taskSlice = createSlice({
  name: "notes",
  initialState: {
    notes: [],
    tasks: [],
  },

  reducers: {
    addTodo: (state, action) => {
      const { title, content } = action.payload;
      state.notes.push({
        id: state.notes.length + 1,
        title,
        content,
      });
    },

    addTask: (state, action) => {
      const { title, content } = action.payload;
      state.tasks.push({
        id: state.notes.length + 1,
        title,
        content,
      });
    },

    deleteTodo: (state, action) => {
      const { filtereddata } = action.payload;
      state.notes.pop(filtereddata)
    },

    deleteTask: (state, action) => {
      const { filtereddata } = action.payload;
      state.tasks.pop(filtereddata)
    },

  },
});

// Action creators are generated for each case reducer function
export const { addTodo, addTask, deleteTodo, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
