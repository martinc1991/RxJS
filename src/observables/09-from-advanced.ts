import { from, of } from 'rxjs';

const observer = {
	next: (value) => {
		console.log('next:', value);
	},
	complete: () => {
		console.log('complete');
	},
};

// const source$ = of([1, 2, 3, 4, 5]);
// const source$ = from([1, 2, 3, 4, 5]);
// const source$ = from('Martin');
const source$ = from(fetch('https://api.github.com/users/martinc1991'));

// source$.subscribe(observer);

// source$.subscribe(async (response) => {
// 	console.log('response:', response.url);
// 	const resp = await response.json();
// 	console.log(resp);
// });

const miGenerador = function* () {
	yield 1;
	yield 2;
	yield 3;
	yield 4;
	yield 5;
};

const miIterable = miGenerador();

// for (const id of miIterable) {
// 	console.log(id);
// }

from(miIterable).subscribe(observer);
