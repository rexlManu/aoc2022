import { read } from '../utils.js';

let caloriesInput = read(new URL('./input', import.meta.url));

let elves = caloriesInput.split(/\r?\n\r?\n/)
    .map(group => group.split(/\r?\n/).map(Number).reduce((a, b) => a + b, 0));

let sortedElves = elves.sort((a, b) => a - b);

console.log("Highest number of calories:", sortedElves[sortedElves.length - 1]);

console.log("Top 3:", sortedElves.slice(sortedElves.length - 3).reduce((a, b) => a + b, 0));