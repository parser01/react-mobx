import { makeAutoObservable } from "mobx";

class TodoList {
	todos = [
		{ id: 1, title: "Watch movie", completed: false },
		{ id: 2, title: "Sleep", completed: false },
		{ id: 3, title: "Go to the park", completed: false },
	];

	constructor() {
		makeAutoObservable(this);
	}

	addTodo(todo) {
		this.todos.push(todo);
		console.log("addTodo");
	}

	removeTodo(id) {
		this.todos = this.todos.filter((todo) => todo.id !== id);
		console.log("removeTodo");
	}

	completeTodo(todo) {
		todo.completed = !todo.completed;
		console.log("completeTodo");
	}

	fetchTodos() {
		fetch("https://jsonplaceholder.typicode.com/todos")
			.then((response) => response.json())
			.then((json) => {
				this.todos = [...this.todos, ...json];
			});
	}
}

const todoList = new TodoList();

export default todoList;
