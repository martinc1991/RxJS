import { interval, timer } from 'rxjs';

const observer = {
	next: (next) => {
		console.log('next:', next);
	},
	complete: () => {
		console.log('complete');
	},
};

const hoyEn5 = new Date();
hoyEn5.setSeconds(hoyEn5.getSeconds() + 5);

const interval$ = interval(1000);

// const timer$ = timer(2000);
// const timer$ = timer(2000, 1000);
const timer$ = timer(hoyEn5);

console.log('inicio');
timer$.subscribe(observer);
// interval$.subscribe(observer);
console.log('fin');
