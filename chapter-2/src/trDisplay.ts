import { Button } from "./button.js";
// класс для создания row с возможность удаления и изменения
export class TrDisplay {
    index: number;
    name: string;
    row: HTMLDivElement;
    cell_number: HTMLDivElement;
    cell_fio: HTMLDivElement;
    cell_select: HTMLDivElement;
    cell_actions: HTMLDivElement;
    select: HTMLSelectElement;
    input: HTMLInputElement;
    constructor(index: number, name: string, value: string) {
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
        this.select.addEventListener("change", this.Select.bind(this));
        let options = ["", "Frontend", "Backend", "Designer", "Tester", "Manager"];
        for (var i = 0; i < options.length; i++) {
            var opt = options[i];
            var el = document.createElement("option");
            el.textContent = opt;
            el.value = opt;
            el.selected = opt == value;
            this.select.appendChild(el)
        }
        this.cell_select.appendChild(this.select);
        this.row.appendChild(this.cell_select);

        this.cell_actions = document.createElement('div') as HTMLDivElement;
        this.cell_actions.className = "cell";
        this.cell_actions.appendChild(new Button("Edit", this.Edit.bind(this)).BtnReturn());
        this.cell_actions.appendChild(new Button("Remove", this.Remove.bind(this)).BtnReturn());

        this.row.appendChild(this.cell_actions);
    }
    /**
     * 
     */
    Edit() {
        this.input = document.createElement("input") as HTMLInputElement;
        this.input.value = this.cell_fio.innerHTML;
        this.name = this.cell_fio.innerHTML;
        this.cell_fio.innerHTML = "";
        this.cell_fio.appendChild(this.input);
        this.cell_actions.innerHTML = "";

        this.cell_actions.appendChild(new Button("Save", this.Save.bind(this)).BtnReturn());
        this.cell_actions.appendChild(new Button("Cansel", this.Cancel.bind(this)).BtnReturn());
    }
    Save() {
        this.cell_fio.innerHTML = "";
        this.cell_fio.innerHTML = this.input.value;
        this.cell_actions.innerHTML = "";
        var set = [this.cell_fio.innerHTML, this.select.value];
        localStorage.setItem(this.cell_number.innerHTML, String(set));
        this.cell_actions.appendChild(new Button("Edit", this.Edit.bind(this)).BtnReturn());
        this.cell_actions.appendChild(new Button("Remove", this.Remove.bind(this)).BtnReturn());
    }
    Cancel() {
        this.cell_fio.innerHTML = "";
        this.cell_fio.innerHTML = this.name;
        this.cell_actions.innerHTML = "";
        this.cell_actions.appendChild(new Button("Edit", this.Edit.bind(this)).BtnReturn());
        this.cell_actions.appendChild(new Button("Remove", this.Remove.bind(this)).BtnReturn());
    }
    Remove() {
        this.row.remove();
        localStorage.removeItem(this.cell_number.innerHTML);
    }
    Select() {
        var set = [this.cell_fio.innerHTML, this.select.value];
        localStorage.setItem(this.cell_number.innerHTML, String(set));
    }
    GetElement() {
        return this.row
    }
}