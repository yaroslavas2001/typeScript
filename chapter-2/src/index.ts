import {TrDisplay} from "./trDisplay.js";
import {formAdd} from "./formAdd.js";

class App {
    root: HTMLElement;
    table: HTMLDivElement;
    row: HTMLDivElement;
    index : number;
    constructor(element: HTMLElement) {
        //напишу в formAdd и могу использовать тут
        this.index = 1;
        this.root = element;
        this.row = document.createElement('div') as HTMLDivElement;
        this.table = document.createElement('div') as HTMLDivElement;
        this.Init();
        var d = new formAdd(element);
        d.onAddEmployer = this.AddEmployer.bind(this);
    }
    Init() {
        this.root.appendChild(this._CreateTable());
    }
    AddEmployer(name: string) {
        var display = new TrDisplay(this.index, name);
        localStorage.setItem(String(this.index),name);
        this.index+=1;
        this.table.appendChild(display.GetElement());
        return this.table;
    }

    _CreateСap(name: string) {
        var cell = document.createElement("div") as HTMLDivElement;
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
        return this.table;
    }
}


new App(document.getElementsByTagName("body")[0] as HTMLBodyElement);

//localStorage
