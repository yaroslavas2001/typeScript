
//import  {formAdd } from "./formAdd";
interface AddEmployer {
    (message: string): void;
}
class Button {
    _btn: HTMLButtonElement;
    constructor(name: string, clickHandler: () => any) {
        this._btn = document.createElement("button") as HTMLButtonElement;
        this._btn.textContent = name;
        this._btn.onclick = clickHandler;
    }
    BtnReturn(){
        return this._btn;
    }
}
class TrDisplay {
    index: number;
    name: string;
    row: HTMLDivElement;
    cell_number: HTMLDivElement;
    cell_fio: HTMLDivElement;
    cell_select: HTMLDivElement;
    cell_actions: HTMLDivElement;
    select: HTMLSelectElement;
    input:HTMLInputElement;
    constructor(index: number, name: string) {
        this.index = index;
        this.name = name;
        this.row = document.createElement('div') as HTMLDivElement;
        this.row.className = "row";

        this.cell_number = document.createElement('div') as HTMLDivElement;
        this.cell_number.className = "cell";
        this.cell_number.innerHTML = String(this.index);
        this.row.appendChild(this.cell_number);

        this.cell_fio = document.createElement('div') as HTMLDivElement;
        this.cell_fio.className = "cell";
        this.cell_fio.innerHTML = name;
        this.row.appendChild(this.cell_fio);

        this.cell_select = document.createElement('div') as HTMLDivElement;
        this.cell_select.className = "cell";
        this.select = document.createElement("select") as HTMLSelectElement;
        let options = ["","Frontend", "Backend", "Designer", "Tester", "Manager"]; 
        for(var i = 0; i < options.length; i++) {   
            var opt = options[i];
            var el = document.createElement("option");
            el.textContent = opt;
            el.value = opt;
            this.select.appendChild(el)
        }
        this.cell_select.appendChild(this.select);
        //this.cell_select.innerHTML = String(this.index);
        this.row.appendChild(this.cell_select);

        this.cell_actions = document.createElement('div') as HTMLDivElement;
        this.cell_actions.className = "cell";

        this.cell_actions.appendChild(new Button("Edit",this.Edit.bind(this)).BtnReturn());
        this.cell_actions.appendChild(new Button("Remove",this.Remove.bind(this)).BtnReturn());

        this.row.appendChild(this.cell_actions);
    }
    Edit(){
        this.input = document.createElement("input") as HTMLInputElement;
        this.input.value = this.cell_fio.innerHTML;
        this.name=this.cell_fio.innerHTML;
        this.cell_fio.innerHTML="";
        this.cell_fio.appendChild(this.input);
        this.cell_actions.innerHTML="";

        this.cell_actions.appendChild(new Button("Save",this.Save.bind(this)).BtnReturn());
        this.cell_actions.appendChild(new Button("Cansel",this.Cancel.bind(this)).BtnReturn());
    }
    Save(){
        this.cell_fio.innerHTML="";
        this.cell_fio.innerHTML=this.input.value;
        this.cell_actions.innerHTML="";

        this.cell_actions.appendChild(new Button("Edit",this.Edit.bind(this)).BtnReturn());
        this.cell_actions.appendChild(new Button("Remove",this.Remove.bind(this)).BtnReturn());
    }
    Cancel(){
        this.cell_fio.innerHTML="";
        this.cell_fio.innerHTML=this.name;
        this.cell_actions.innerHTML="";
        this.cell_actions.appendChild(new Button("Edit",this.Edit.bind(this)).BtnReturn());
        this.cell_actions.appendChild(new Button("Remove",this.Remove.bind(this)).BtnReturn());
    }
    Remove(){
        this.row.remove();
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
        this.Init();
        var d = new formAdd(element);
        d.onAddEmployer = this.AddEmployer.bind(this);
    }
    Init() {
        this.root.appendChild(this._CreateTable());
    }
    AddEmployer(name: string) {
        // почему оно не видит this.table и this.index?
        var display = new TrDisplay(this.index, name);
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
            this.onAddEmployer(this.input.value);
            this.input.value = "";
        }
    }
}

new App(document.getElementsByTagName("body")[0] as HTMLBodyElement);
