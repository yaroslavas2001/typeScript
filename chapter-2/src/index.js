"use strict";
var Button = /** @class */ (function () {
    // как передать функцию?
    function Button(text) {
        this._btn = document.createElement("button");
        this._btn.textContent = text;
        this._btn.onclick = onclick;
        //return this._btn;
    }
    return Button;
}());
var TrDisplay = /** @class */ (function () {
    function TrDisplay(index, name) {
        this.index = index;
        this.name = name;
        this.row = document.createElement('div');
        this.cell_number = document.createElement('div');
        this.cell_number.className = "cell";
        this.cell_number.innerHTML = String(index);
        this.row.appendChild(this.cell_number);
        this.cell_fio = document.createElement('div');
        this.cell_fio.className = "cell";
        this.cell_fio.innerHTML = name;
        this.row.appendChild(this.cell_fio);
        this.cell_select = document.createElement('div');
        this.cell_select.className = "cell";
        this.cell_select.innerHTML = String(index);
        this.row.appendChild(this.cell_select);
        this.cell_actoin = document.createElement('div');
        this.cell_actoin.className = "cell";
        this.cell_actoin.innerHTML = String(index);
        this.row.appendChild(this.cell_actoin);
    }
    TrDisplay.prototype.GetElement = function () {
        return this.row;
    };
    return TrDisplay;
}());
var App = /** @class */ (function () {
    function App(element) {
        //напишу в formAdd и могу использовать тут
        this.index = 1;
        this.root = element;
        this.row = document.createElement('div');
        this.table = document.createElement('div');
        console.log(1);
        this.Init();
        var d = new formAdd(element);
        d.onAddEmployer = this.AddEmployer;
    }
    App.prototype.Init = function () {
        console.log(2);
        this.root.appendChild(this._CreateTable());
    };
    App.prototype.AddEmployer = function (name) {
        // почему оно не видит this.table?
        var display = new TrDisplay(this.index, name);
        this.index += 1;
        console.log(5);
        console.log(display.GetElement());
        //this.table.appendChild(display.GetElement());
        return this.table;
    };
    App.prototype._CreateСap = function (name) {
        var cell = document.createElement("div");
        cell.className = "cell";
        cell.textContent = name;
        this.row.appendChild(cell);
    };
    App.prototype._CreateTable = function () {
        this.table.className = "table";
        this.row.className = "row";
        this._CreateСap("№");
        this._CreateСap("ФИО");
        this._CreateСap("Профессия");
        this._CreateСap("Действия");
        this.table.appendChild(this.row);
        console.log(3);
        //localStorage.setItem("evpemrvmer","everver");
        return this.table;
    };
    return App;
}());
var formAdd = /** @class */ (function () {
    function formAdd(element) {
        this.root = element;
        this.input = document.createElement('input');
        this.btn = document.createElement('button');
        this.Init();
    }
    formAdd.prototype.Init = function () {
        this.btn.classList.add('btn');
        this.btn.textContent = "Добавить";
        this.root.appendChild(this.input);
        this.btn.onclick = this.onClickAddPeople.bind(this);
        this.root.appendChild(this.btn);
    };
    formAdd.prototype.onClickAddPeople = function () {
        if (this.onAddEmployer) {
            console.log(4);
            this.onAddEmployer(this.input.value);
            this.input.value = "";
        }
    };
    return formAdd;
}());
new App(document.getElementsByTagName("body")[0]);
//# sourceMappingURL=index.js.map