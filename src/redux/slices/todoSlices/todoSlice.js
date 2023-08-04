import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todo",
    initialState: {
        todos: [],
    },
    reducers: {
        AddTodo: (state, action) => {
            state.todos.push(action.payload);
        },
        DeleteTodo: (state, action) => {
            state.todos.splice(action.payload, 1);
        },
    },
});

export const { AddTodo, DeleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
