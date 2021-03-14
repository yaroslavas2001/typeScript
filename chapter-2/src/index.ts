let t = document.getElementById("name")?.innerHTML;
console.log(t)
let element = document.getElementsByTagName("body")[0];
let table = document.createElement("div");
table.className = "table";
let row = document.createElement("div");
row.className = "row";

let cell= document.createElement("div");
let cellText = document.createTextNode("клетка");
cell.appendChild(cellText);
cell.className = "cell";
row.appendChild(cell);
let cell1= document.createElement("div");
let cellText1 = document.createTextNode("клетка 1");
cell1.appendChild(cellText1);
cell1.className = "cell";
row.appendChild(cell1);
let cell2= document.createElement("div");
let cellText2 = document.createTextNode("клетка 2");
cell2.appendChild(cellText2);
cell2.className = "cell";
row.appendChild(cell2);

table.appendChild(row);
element.appendChild(table);