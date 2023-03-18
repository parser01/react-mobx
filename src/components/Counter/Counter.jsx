import "./Counter.css";
import counter from "../../store/counter";
import { observer } from "mobx-react-lite";

const Counter = observer(() => {
	console.log("Counter render");
	return (
		<div className="counter">
			{/* <div className="counter__count">{counter.count}</div> */}
			<div className="counter__count">{counter.totalCount}</div>
			<div className="counter__btns">
				<button
					className="counter__btn"
					onClick={() => counter.increment()}
				>
					+
				</button>
				<button
					className="counter__btn"
					onClick={() => counter.decrement()}
				>
					-
				</button>
			</div>
		</div>
	);
});

export default Counter;
