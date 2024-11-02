import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";

export default function TodoItem({ todo }: {
    todo: { id: string; title: string };
  }) {
    const dispatch = useDispatch();

    return (
      <li key={todo.id} className="list-group-item d-flex align-items-center">
        <div className="text-left">{todo.title}</div>
        <div className="ms-auto">
        <button onClick={() => dispatch(deleteTodo(todo.id))}
                id="wd-delete-todo-click"
                className="btn btn-danger m-1 float-end"> Delete </button>
        <button onClick={() => dispatch(setTodo(todo))}
                id="wd-set-todo-click"
                className="btn btn-primary m-1 float-end"> Edit </button>
                </div>
                    </li>);}