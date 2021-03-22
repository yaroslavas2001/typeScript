
//import  {formAdd } from "./formAdd";
interface AddEmployer {
    (message: string): void;
}
class Button {
    _btn: HTMLButtonElement;
    onclick: Function;
    // как передать функцию?
    constructor(text: string) {
        this._btn = document.createElement("button") as HTMLButtonElement;
        this._btn.textContent = text;
        this._btn.onclick = onclick;
        //return this._btn;
    }
}
class TrDisplay {
    index: number;
    name: string;
    row: HTMLDivElement;
    cell_number: HTMLDivElement;
    cell_fio: HTMLDivElement;
    cell_select: HTMLDivElement;
    cell_actoin: HTMLDivElement;
    constructor(index: number, name: string) {
        this.index = index;
        this.name = name;
        this.row = document.createElement('div') as HTMLDivElement;

        this.cell_number = document.createElement('div') as HTMLDivElement;
        this.cell_number.className = "cell";
        this.cell_number.innerHTML = String(index);
        this.row.appendChild(this.cell_number);

        this.cell_fio = document.createElement('div') as HTMLDivElement;
        this.cell_fio.className = "cell";
        this.cell_fio.innerHTML = name;
        this.row.appendChild(this.cell_fio);

        this.cell_select = document.createElement('div') as HTMLDivElement;
        this.cell_select.className = "cell";
        this.cell_select.innerHTML = String(index);
        this.row.appendChild(this.cell_select);

        this.cell_actoin = document.createElement('div') as HTMLDivElement;
        this.cell_actoin.className = "cell";
        this.cell_actoin.innerHTML = String(index);
        this.row.appendChild(this.cell_actoin);
    }
    GetElement() {
        return this.row
    }

}
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
        console.log(1);
        this.Init();
        var d = new formAdd(element);
        d.onAddEmployer = this.AddEmployer;
    }
    Init() {
        console.log(2);
        this.root.appendChild(this._CreateTable());
    }
    AddEmployer(name: string) {
        // почему оно не видит this.table?
        var display = new TrDisplay(this.index, name);
        this.index+=1;
        console.log(5);
        console.log(display.GetElement());
        //this.table.appendChild(display.GetElement());
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
        console.log(3);
        //localStorage.setItem("evpemrvmer","everver");
        return this.table;
    }
}

class formAdd {
    root: HTMLElement;
    input: HTMLInputElement;
    btn: HTMLButtonElement;
    onAddEmployer?: AddEmployer;
    constructor(element: HTMLElement) {
        this.root = element;
        this.input = document.createElement('input') as HTMLInputElement;
        this.btn = document.createElement('button') as HTMLButtonElement;
        this.Init();
    }
    Init() {
        this.btn.classList.add('btn');
        this.btn.textContent = "Добавить";
        this.root.appendChild(this.input);
        this.btn.onclick = this.onClickAddPeople.bind(this);
        this.root.appendChild(this.btn);
    }
    onClickAddPeople() {
        if (this.onAddEmployer) {
            console.log(4);
            this.onAddEmployer(this.input.value);
            this.input.value = "";
        }
    }
}

new App(document.getElementsByTagName("body")[0] as HTMLBodyElement);
