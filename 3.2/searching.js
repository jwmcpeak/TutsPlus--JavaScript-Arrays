let numbers = [
	5,
	9,
	23,
	54,
	97,
	1
];

let list = [
    {text: 'bacon', cost: 12, need: true },
    {text: 'eggs', cost: 10, need: true },
    {text: 'butter', cost: 5, need: false },
    {text: 'milk', cost: 4, need: false },
    {text: 'bread', cost: 3, need: true}
];

let item = list.find((element) => element.cost < 5);
let even = numbers.find(value => value % 2 === 0);

console.log(even);