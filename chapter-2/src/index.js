import { TrDisplay } from "./trDisplay.js";
import { formAdd } from "./formAdd.js";
class App {
    constructor(element) {
        //напишу в formAdd и могу использовать тут
        this.index = 1;
        this.root = element;
        this.row = document.createElement('div');
        this.table = document.createElement('div');
        this.Init();
        var d = new formAdd(element);
        d.onAddEmployer = this.AddEmployer.bind(this);
    }
    Init() {
        this.root.appendChild(this._CreateTable());
    }
    AddEmployer(name) {
        if (localStorage.length > 0) {
            var map = {}, keys = Object.keys(localStorage), i = keys.length;
            var key = [];
            for (var u = 0; u < i; u++) {
                key[u] = parseInt(keys[u]);
            }
            ;
            key.sort(function (a, b) {
                return a - b;
            });
            this.index = key[i - 1] + 1;
            var display = new TrDisplay(this.index, name, "");
            var people = [name, ""];
            localStorage.setItem(String(this.index), String(people));
            this.table.appendChild(display.GetElement());
            //return this.table;
        }
        else {
            var display = new TrDisplay(this.index, name, "");
            var people = [name, ""];
            localStorage.setItem(String(this.index), String(people));
            this.index += 1;
            this.table.appendChild(display.GetElement());
        }
    }
    _CreateСap(name) {
        var cell = document.createElement("div");
        cell.className = "cell";
        cell.textContent = name;
        this.row.appendChild(cell);
    }
    _CreateTable() {
        this.table.className = "table";
        this.row.className = "row";
        this._CreateСap("№");
        this._CreateСap("ФИО");
        this._CreateСap("Профессия");
        this._CreateСap("Действия");
        this.table.appendChild(this.row);
        this._OnLoad();
        return this.table;
    }
    _OnLoad() {
        if (localStorage.length > 0) {
            var map = {}, keys = Object.keys(localStorage), i = keys.length;
            var key = [];
            for (var u = 0; u < i; u++) {
                key[u] = parseInt(keys[u]);
            }
            ;
            key.sort(function (a, b) {
                return a - b;
            });
            for (var t = 0; t < i; t++) {
                map[key[t]] = localStorage.getItem(String(key[t]));
            }
            ;
            for (var j = 0; j < i; j++) {
                if (map[key[j]].split(",").length == 2) {
                    var display = new TrDisplay(key[j], map[key[j]].split(",")[0], map[key[j]].split(",")[1]);
                    this.table.appendChild(display.GetElement());
                }
                else {
                    var display = new TrDisplay(key[j], map[key[j]].split(",")[0], "");
                    this.table.appendChild(display.GetElement());
                }
            }
        }
    }
}
new App(document.getElementsByTagName("body")[0]);
//localStorage
//# sourceMappingURL=index.js.map