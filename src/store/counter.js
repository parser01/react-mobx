import { makeAutoObservable } from "mobx";

class Counter {
	count = 0;
	count2 = 20;

	constructor() {
		makeAutoObservable(this);
	}

	increment() {
		this.count = this.count + 1;
		console.log("increment", this.count);
	}

	decrement() {
		this.count = this.count - 1;
		console.log("decrement", this.count);
	}

	get totalCount() {
		console.log("totalCount");
		return "Total count: " + (this.count + this.count2);
	}
}

const counter = new Counter();

export default counter;
