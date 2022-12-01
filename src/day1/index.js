import { read } from '../utils.js';

let caloriesInput = read(new URL('./input', import.meta.url));

let elves = caloriesInput.split(/\r?\n\r?\n/)
    .map(group => group.split(/\r?\n/).map(Number).reduce((a, b) => a + b, 0));

let highestElve = elves.reduce((a, b) => a > b ? a : b, 0);

console.log(highestElve);
