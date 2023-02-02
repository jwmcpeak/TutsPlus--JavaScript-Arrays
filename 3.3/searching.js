let numbers = [
	5,
	9,
	23,
	55,
	97,
	1
];

let list = [
    {text: 'bacon', cost: 12, need: false },
    {text: 'eggs', cost: 10, need: false },
    {text: 'butter', cost: 5, need: false },
    {text: 'milk', cost: 4, need: false },
    {text: 'bread', cost: 3, need: true}
];

//console.log(numbers.includes(24));

//console.log(list.some(item => item.need));
console.log(numbers.every(num => num % 2 !== 0));