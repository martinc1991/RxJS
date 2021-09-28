// const nombre: string = 'Martin';
// console.log(`Hola ${nombre}!`);

import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
	next: (value) => {
		console.log('next: ', value);
	},
	error: (error) => {
		console.warn('error: ', error);
	},
	complete: () => {
		console.info('Printed when observer is completed');
	},
};

const interval$ = new Observable<number>((subscriber) => {
	// Create a counter
	let num = 1;
	const interval = setInterval(() => {
		// Every second
		subscriber.next(num);
		// console.log('num: ', num);
		num++;
	}, 1000);

	setInterval(() => {
		subscriber.complete();
	}, 4000);

	return () => {
		clearInterval(interval);
		console.log('Interval cleared');
	};
});

const subs1 = interval$.subscribe(observer);
const subs2 = interval$.subscribe(observer);
const subs3 = interval$.subscribe(observer);

subs1.add(subs2);

setTimeout(() => {
	subs1.unsubscribe();

	console.log('Finished on timeout');
}, 6000);
