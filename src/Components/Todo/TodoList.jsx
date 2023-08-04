import { useDispatch, useSelector } from "react-redux";
import {
    DeleteTodo,
    markAsDone,
} from "../../redux/slices/todoSlices/todoSlice";

const TodoList = () => {
    const todos = useSelector((state) => state.todo.todos);
    const dispatch = useDispatch();

    return (
        <div className="card mt-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table
                        width="80%"
                        align="center"
                        className="table table-hover table-border"
                    >
                        <thead>
                            <tr>
                                <th>Sl.No.</th>
                                <th>Task Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {todos.map((todo, index) => {
                                return (
                                    <tr key={index.toString()}>
                                        <td className="w-25">{index}</td>
                                        <td
                                            className="w-50"
                                            style={{
                                                textDecoration: todo.completed
                                                    ? "line-through"
                                                    : "none",
                                            }}
                                        >
                                            {todo.task}
                                        </td>
                                        <td className="d-flex align-items-center">
                                            <div className="form-check me-3">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="done"
                                                    onChange={() =>
                                                        dispatch(
                                                            markAsDone(index)
                                                        )
                                                    }
                                                />
                                                <label htmlFor="#done">
                                                    Mark as {(!todo.completed)?'Done':'Undone'}
                                                </label>
                                            </div>
                                            <button
                                                className="btn btn-danger"
                                                onClick={() =>
                                                    dispatch(DeleteTodo(index))
                                                }
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default TodoList;
