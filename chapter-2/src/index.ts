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