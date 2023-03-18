import "./App.css";
import Counter from "./components/Counter/Counter";
import TodoList from "./components/TodoList/TodoList";

function App() {
	console.log("App render");
	return (
		<div className="app">
			<Counter />
			<TodoList />
		</div>
	);
}

export default App;
