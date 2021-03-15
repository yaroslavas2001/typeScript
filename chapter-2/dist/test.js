// class App{
//     element: object;
//     constructor(element:object){
//         this.element=element
//         this.Init(this.element);
//     }
//     Init(element:object){
//         console.log(element)
        
//     }
//     _CreateСap(name:string) {
//         var cell = document.createElement("div");
//         cell.className = "cell";
//         var cellText = document.createTextNode(name);
//         cell.appendChild(cellText);
//         row.appendChild(cell);
//     }
//     // метод для создания таблицы
//     _CreateTable() {
//         var table = document.createElement("div");
//         table.className = "table";
//         var row = document.createElement("div")
//         row.className = "row";
//         this._CreateСap("№");
//         this._CreateСap("ФИО");
//         this._CreateСap("Профессия");
//         this._CreateСap("Действия");
//         table.appendChild(row);
//         return table;
//     }
// }
// new App(document.getElementsByTagName("body")[0]);