const names = prompt("Please enter a series of names separated by a ', '");

let splitNames = names.split(', ');

function compare(a, b) {
    let splitA = a.split(" ");
    let splitB = b.split(" ");
    let lastA = splitA[splitA.length - 1];
    let lastB = splitB[splitB.length - 1];

    if (lastA < lastB) return -1;
    if (lastA > lastB) return 1;
    return 0;
}

let sorted = splitNames.sort(compare);

let html = `<ol>`;

sorted.forEach(current => {
    let sortedName = current;
    html += `<li>${current}</li>`;
});

html += `</ol>`

document.querySelector('body').insertAdjacentHTML('afterbegin', html);
