import { formAdd } from "./formAdd";
var App = /** @class */ (function () {
    function App(element) {
        console.log("gjh");
        //напишу в formAdd и могу использовать тут
        this.root = element;
        this.row = document.createElement('div');
        this.table = document.createElement('div');
        this.Init();
        var d = new formAdd(element);
        d.onAddEmplore = this.AddEmploer;
    }
    App.prototype.Init = function () {
        this.root.appendChild(this._CreateTable());
    };
    App.prototype.AddEmploer = function (name) {
        console.log(name);
    };
    App.prototype._CreateСap = function (name) {
        var cell = document.createElement("div");
        cell.className = "cell";
        cell.textContent = name;
        //var cellText = document.createTextNode(name);
        //cell.appendChild(cellText);
        this.row.appendChild(cell);
    };
    // метод для создания таблицы
    App.prototype._CreateTable = function () {
        this.table.className = "table";
        this.row.className = "row";
        this._CreateСap("№");
        this._CreateСap("ФИО");
        this._CreateСap("Профессия");
        this._CreateСap("Действия");
        this.table.appendChild(this.row);
        return this.table;
    };
    return App;
}());
new App(document.getElementsByTagName("body")[0]);
//# sourceMappingURL=index.js.map