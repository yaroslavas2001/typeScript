let t = document.getElementById("name")?.innerHTML;
console.log(t)
let element = document.getElementsByTagName("body")[0];
let table = document.createElement("div");
table.className = "table";
let row = document.createElement("div");
row.className = "row";

for(let i: number=0;i<4;i++){
    let cell= document.createElement("div");
    var cellText = document.createTextNode("name");
    cell.appendChild(cellText);
    cell.className = "cell";
    row.appendChild(cell);
}

table.appendChild(row);
element.appendChild(table);