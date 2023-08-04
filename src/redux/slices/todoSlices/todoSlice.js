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
        markAsDone: (state, action) => {
            if(state.todos[action.payload].completed){
                state.todos[action.payload].completed = false;
            }else{
                state.todos[action.payload].completed = true;
            }
        },
    },
});

export const { AddTodo, DeleteTodo, markAsDone } = todoSlice.actions;
export default todoSlice.reducer;
