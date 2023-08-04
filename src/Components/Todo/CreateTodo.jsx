import { useRef } from "react";
import { useDispatch } from "react-redux";
import { AddTodo } from "../../redux/slices/todoSlices/todoSlice";

const CreateToDo = () => {
    const dispatch = useDispatch();

    const taskInput = useRef();

    return (
        <div className="card">
            <div className="card-header text-center">
                <h1>Todo App With Redux</h1>
            </div>
            <div className="card-body">
                <div className="input-group">
                    <input className="form-control"
                        ref={taskInput}
                        type="text"
                        placeholder="Create a new task"
                    />
                    <button className="btn btn-success"
                        onClick={() =>
                            dispatch(AddTodo({task:taskInput.current.value,completed: false}))
                        }
                    >
                        Add New Task
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CreateToDo;
