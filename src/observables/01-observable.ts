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

const obs$ = new Observable<string>((subs) => {
	subs.next('Hola');
	subs.next('Mundo');
	subs.next('Hola');
	subs.next('Mundo');
	subs.complete();
	subs.next('Hola');
	subs.next('Mundo');
});

obs$.subscribe(observer);
