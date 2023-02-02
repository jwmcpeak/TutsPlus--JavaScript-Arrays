let numbers = [1, 2, 4, 8];

console.log(numbers);

numbers[4] = 16;

console.log(numbers);

numbers.push(32);

console.log(numbers);

numbers.unshift(0);

console.log(numbers);

let lastNumber = numbers.pop();

console.log(numbers);

console.log(lastNumber);

let firstNumber = numbers.shift();

console.log(numbers);

console.log(firstNumber);

numbers.splice(4, 1);

console.log(numbers);

