// Read input values from stdin
const readline = require('readline');
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

rl.question('', (nA) => {
const sizeA = parseInt(nA);
rl.question('', (arrAInput) => {
const arrA = arrAInput.split(' ').map(Number);

rl.question('', (nB) => {
const sizeB = parseInt(nB);
rl.question('', (arrBInput) => {
const arrB = arrBInput.split(' ').map(Number);

// Call addNumbers and display the result
const result = addNumbers(sizeA, arrA, sizeB, arrB);
console.log(result.nSum);
console.log(result.arrSum.join(' '));

rl.close();
});
});
});
});

function addNumbers(sizeA, arrA, sizeB, arrB) {
// Write your code here

}