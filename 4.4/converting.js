let list = [
    {text: 'bacon', cost: 12, need: true },
    {text: 'eggs', cost: 10, need: true },
    {text: 'butter', cost: 5, need: false },
    {text: 'milk', cost: 4, need: false },
    {text: 'bread', cost: 3, need: true}
];

let listElements = list.map(function({text, cost, need}) {
    if (need) {
        return `<li>${text} $${cost}</li>`;
    } else {
        return '';
    }
});

document.getElementById('list').innerHTML = listElements.join('');