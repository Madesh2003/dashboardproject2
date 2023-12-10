import { configureStore } from "@reduxjs/toolkit";
// ROOT REDUCER
import TasksReducer from "./Reducers/tasks.reducer";
export default configureStore({
  reducer: {
    tasksReducer: TasksReducer,
  },
});
