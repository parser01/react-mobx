import "./TodoList.css";
import todoList from "../../store/todoList";
import { observer } from "mobx-react-lite";

const TodoList = observer(() => {
	console.log("TodoList render");
	return (
		<div className="todoList">
			<button onClick={() => todoList.fetchTodos()}>Fetch todos</button>
			<div className="todoList__todos">
				{todoList.todos.map((todo) => (
					<div className="todoList__todo" key={todo.id}>
						<input
							type="checkbox"
							checked={todo.completed}
							onChange={() => todoList.completeTodo(todo)}
						/>
						<span>{todo.title}</span>
						<button onClick={() => todoList.removeTodo(todo.id)}>
							remove
						</button>
					</div>
				))}
			</div>
		</div>
	);
});

export default TodoList;
