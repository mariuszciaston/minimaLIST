export default class List {
	constructor(name) {
		this.name = name;
		this.tasks = [];
	}

	setName(name) {
		this.name = name;
	}

	addTask(newTask) {
		this.tasks.push(newTask);
	}

	deleteTask(taskName) {
		this.tasks = this.tasks.filter((task) => task.name !== taskName);
	}

	getTasks() {
		return this.tasks;
	}

	clearTasks() {
		this.tasks = [];
	}
}
