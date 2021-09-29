// const nombre: string = 'Martin';
// console.log(`Hola ${nombre}!`);

import { Observable, Observer, Subject } from 'rxjs';

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

const interval$ = new Observable<number>((subs) => {
	const intervalID = setInterval(() => {
		subs.next(Math.random());
	}, 1000);
	return () => {
		console.log('intervalo destruido');
		clearInterval(intervalID);
	};
});

const subject$ = new Subject();
const subscription = interval$.subscribe(subject$);

const subs1 = subject$.subscribe((num) => {
	console.log('num 1:', num);
});
const subs2 = subject$.subscribe((num) => {
	console.log('num 2:', num);
});
// const subs1 = interval$.subscribe((num) => {
// 	console.log('num 1 :', num);
// });
// const subs2 = interval$.subscribe((num) => {
// 	console.log('num 2 :', num);
// });

setTimeout(() => {
	subject$.next('Complete');
	subject$.complete();
	subscription.unsubscribe();
}, 3500);
