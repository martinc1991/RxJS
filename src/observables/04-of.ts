import { of } from 'rxjs';

const observer = {
	next: (next) => {
		console.log('next: ', next);
	},
	error: (error) => {
		console.warn('error: ', error);
	},
	complete: () => {
		console.log('completed');
	},
};

const obs$ = of(1, 2, 3, 4, 5, 6);
console.log('Inicio del observable');
obs$.subscribe(observer);
console.log('Fin del observable');
