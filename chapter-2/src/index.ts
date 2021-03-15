let t = document.getElementById("name")?.innerHTML;
console.log(t)
let element = document.getElementsByTagName("body")[0];
let table = document.createElement("div");
table.className = "table";
let row = document.createElement("div");
row.className = "row";
add("пирог")
add("мороженное")
add("пироженное")
add("шокола")

class Add{
    name : string;
    constructor(name:string){
        this.name = name;
        console.log(this.name);
    }
}
new Add("ffdfg");
function add(name:string){
    let cell= document.createElement("div");
    var cellText = document.createTextNode(name);
    cell.appendChild(cellText);
    cell.className = "cell";
    row.appendChild(cell);
}
table.appendChild(row);
element.appendChild(table);


class App{
    element: object;
    constructor(element:object){
        this.element=element
        this.Init(this.element);
    }
    Init(element:object){
        var element = element.appendChild(this._CreateTable);
    }
    _CreateСap(name:string) {
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
        var row = document.createElement("div")
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