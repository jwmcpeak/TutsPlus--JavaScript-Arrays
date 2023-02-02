let odd = [1, 3, 5, 7, 9];
let even = [2, 4, 6, 8, 10];
let letters = ['a', 'b', 'c', 'd', 'e'];

//let numbers = odd.concat(even, letters);

let alphanumeric = [...odd, ...even, ...letters];


console.log(odd);
console.log(even);
console.log(letters);
console.log(alphanumeric);