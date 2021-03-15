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
class App {
    constructor(element) {
        this.element = element;
        this.Init(this.element);
    }
    Init(element) {
        element.appendChild(this._CreateTable);
    }
    _CreateСap(name) {
        var cell = document.createElement("div");
        cell.className = "cell";
        var cellText = document.createTextNode(name);
        cell.appendChild(cellText);
        row.appendChild(cell);
    }
    // метод для создания таблицы
    _CreateTable() {
        var table = document.createElement("div");
        table.className = "table";
        var row = document.createElement("div");
        row.className = "row";
        this._CreateСap("№");
        this._CreateСap("ФИО");
        this._CreateСap("Профессия");
        this._CreateСap("Действия");
        table.appendChild(row);
        return table;
    }
}
new App(document.getElementsByTagName("body")[0]);
//# sourceMappingURL=index.js.map