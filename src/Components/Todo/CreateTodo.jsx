import { useRef } from "react";
import { useDispatch } from "react-redux";
import { AddTodo } from "../../redux/slices/todoSlices/todoSlice";

const CreateToDo = () => {
    const dispatch = useDispatch();

    const taskInput = useRef();

    return (
        <>
            <input
                ref={taskInput}
                type="text"
                placeholder="Create a new task"
            />
            <button onClick={() => dispatch(AddTodo(taskInput.current.value))}>
                Add New Task
            </button>
        </>
    );
};

export default CreateToDo;
