function changePosition(list, fromIndex, toIndex) {
    list.splice(toIndex, 0, list.splice(fromIndex, 1)[0]);
    return list;
}

const list = [
    { name: "Fourth" },
    { name: "Second" },
    { name: "Third" },
    { name: "Fifth" },
    { name: "First" },
];

changePosition(list, 2, 0);

drawTable(list);

function drawTable(data) {
    let table = document.getElementById("table");

    for (let i = 0; i < data.length; i++) {
        let row = `<tr><td>${data[i].name}</td></tr>`;
        table.innerHTML += row;
    }
}