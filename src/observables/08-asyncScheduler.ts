import { asyncScheduler } from 'rxjs';

// setTimeout(() => {}, 10000);
// setTimeout(() => {}, 1000);

const saludar = () => {
	console.log('Hola Mundo');
};
const saludar2 = (name) => {
	console.log('Hola ' + name);
};

// asyncScheduler.schedule(saludar2, 2000, 'martin');

const subscription = asyncScheduler.schedule(
	function (state) {
		console.log('state:', state);
		this.schedule(state + 1, 1000);
	},
	2000,
	0
);

// setTimeout(() => {
// 	subscription.unsubscribe();
// }, 6000);

asyncScheduler.schedule(() => {
	subscription.unsubscribe();
}, 6000);
