let list = [
    'bacon',
    'eggs',
    'butter',
    'milk',
    'bread'
];

let html = list.join('<br/>');

document.getElementById('list').innerHTML = html;