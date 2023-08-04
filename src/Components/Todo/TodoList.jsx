import { useDispatch, useSelector } from "react-redux";
import { DeleteTodo } from "../../redux/slices/todoSlices/todoSlice";


const TodoList = () => {
    const todos = useSelector((state) => state.todo.todos);
    const dispatch = useDispatch();

    return (
        <div>
            <table border="1" width="80%" align="center">
                <thead>
                    <tr>
                        <th>Sl.No.</th>
                        <th>Task Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((item, index) => {
                        return (
                            <tr key={index.toString()}>
                                <td>{index}</td>
                                <td>{item}</td>
                                <td>
                                    <button>Mark as done</button>
                                    <button>Edit</button>
                                    <button onClick={()=>dispatch(DeleteTodo(index))}>Delete</button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default TodoList;
