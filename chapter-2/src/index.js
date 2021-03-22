"use strict";
var Button = /** @class */ (function () {
    function Button(name, clickHandler) {
        this._btn = document.createElement("button");
        this._btn.textContent = name;
        this._btn.onclick = clickHandler;
    }
    Button.prototype.BtnReturn = function () {
        return this._btn;
    };
    return Button;
}());
var TrDisplay = /** @class */ (function () {
    function TrDisplay(index, name) {
        this.index = index;
        this.name = name;
        this.row = document.createElement('div');
        this.row.className = "row";
        this.cell_number = document.createElement('div');
        this.cell_number.className = "cell";
        this.cell_number.innerHTML = String(this.index);
        this.row.appendChild(this.cell_number);
        this.cell_fio = document.createElement('div');
        this.cell_fio.className = "cell";
        this.cell_fio.innerHTML = name;
        this.row.appendChild(this.cell_fio);
        this.cell_select = document.createElement('div');
        this.cell_select.className = "cell";
        this.select = document.createElement("select");
        var options = ["", "Frontend", "Backend", "Designer", "Tester", "Manager"];
        for (var i = 0; i < options.length; i++) {
            var opt = options[i];
            var el = document.createElement("option");
            el.textContent = opt;
            el.value = opt;
            this.select.appendChild(el);
        }
        this.cell_select.appendChild(this.select);
        //this.cell_select.innerHTML = String(this.index);
        this.row.appendChild(this.cell_select);
        this.cell_actions = document.createElement('div');
        this.cell_actions.className = "cell";
        this.cell_actions.appendChild(new Button("Edit", this.Edit.bind(this)).BtnReturn());
        this.cell_actions.appendChild(new Button("Remove", this.Remove.bind(this)).BtnReturn());
        this.row.appendChild(this.cell_actions);
    }
    TrDisplay.prototype.Edit = function () {
        this.input = document.createElement("input");
        this.input.value = this.cell_fio.innerHTML;
        this.name = this.cell_fio.innerHTML;
        this.cell_fio.innerHTML = "";
        this.cell_fio.appendChild(this.input);
        this.cell_actions.innerHTML = "";
        this.cell_actions.appendChild(new Button("Save", this.Save.bind(this)).BtnReturn());
        this.cell_actions.appendChild(new Button("Cansel", this.Cancel.bind(this)).BtnReturn());
    };
    TrDisplay.prototype.Save = function () {
        this.cell_fio.innerHTML = "";
        this.cell_fio.innerHTML = this.input.value;
        this.cell_actions.innerHTML = "";
        this.cell_actions.appendChild(new Button("Edit", this.Edit.bind(this)).BtnReturn());
        this.cell_actions.appendChild(new Button("Remove", this.Remove.bind(this)).BtnReturn());
    };
    TrDisplay.prototype.Cancel = function () {
        this.cell_fio.innerHTML = "";
        this.cell_fio.innerHTML = this.name;
        this.cell_actions.innerHTML = "";
        this.cell_actions.appendChild(new Button("Edit", this.Edit.bind(this)).BtnReturn());
        this.cell_actions.appendChild(new Button("Remove", this.Remove.bind(this)).BtnReturn());
    };
    TrDisplay.prototype.Remove = function () {
        this.row.remove();
    };
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
        this.Init();
        var d = new formAdd(element);
        d.onAddEmployer = this.AddEmployer.bind(this);
    }
    App.prototype.Init = function () {
        this.root.appendChild(this._CreateTable());
    };
    App.prototype.AddEmployer = function (name) {
        // почему оно не видит this.table и this.index?
        var display = new TrDisplay(this.index, name);
        this.index += 1;
        this.table.appendChild(display.GetElement());
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
            this.onAddEmployer(this.input.value);
            this.input.value = "";
        }
    };
    return formAdd;
}());
new App(document.getElementsByTagName("body")[0]);
//# sourceMappingURL=index.js.map