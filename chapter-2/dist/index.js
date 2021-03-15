"use strict";
var _a;
let t = (_a = document.getElementById("name")) === null || _a === void 0 ? void 0 : _a.innerHTML;
console.log(t);
let element = document.getElementsByTagName("body")[0];
let table = document.createElement("div");
table.className = "table";
let row = document.createElement("div");
row.className = "row";
add("пирог");
add("мороженное");
add("пироженное");
add("шокола");
class Add {
    constructor(name) {
        this.name = name;
        console.log(this.name);
    }
}
new Add("ffdfg");
function add(name) {
    let cell = document.createElement("div");
    var cellText = document.createTextNode(name);
    cell.appendChild(cellText);
    cell.className = "cell";
    row.appendChild(cell);
}
table.appendChild(row);
element.appendChild(table);
//# sourceMappingURL=index.js.map