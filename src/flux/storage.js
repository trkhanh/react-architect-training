let storage = {
	read() {
		let data = localStorage.todos;
		return (data && JSON.parse(data)) || [];
	},

	write(todos) {
		localStorage.todos = JSON.stringify(todos);
	},

	readTab() {
		let data = localStorage.tab;
		return (data && JSON.parse(data)) || "";
	},

	writeTab(tab) {
		localStorage.tab = JSON.stringify(tab);
	},
};

export default storage;