let list = [
    {text: 'bacon', cost: 12, need: true },
    {text: 'eggs', cost: 10, need: true },
    {text: 'butter', cost: 5, need: false },
    {text: 'milk', cost: 4, need: false },
    {text: 'bread', cost: 3, need: true}
];

let listElements = list
                    .filter(item => item.need && item.cost < 12)
                    .map(({text, cost}) => `<li>${text} $${cost}</li>`)
                    .join('');

document.getElementById('list').innerHTML = listElements;