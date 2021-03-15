
import  {formAdd } from "./formAdd";
 

class App{
    root : HTMLElement;
    table : HTMLDivElement;
    row :  HTMLDivElement;
    constructor(element:HTMLElement){
        console.log("gjh");
        //напишу в formAdd и могу использовать тут
        this.root=element;
        this.row= document.createElement('div') as HTMLDivElement;
        this.table= document.createElement('div') as HTMLDivElement;

        
        this.Init();
        var d = new formAdd(element);
        d.onAddEmplore = this.AddEmploer;
    
    }


    Init(){
       this.root.appendChild(this._CreateTable());
    }

    AddEmploer(name: string){
        console.log(name);
    }

    _CreateСap(name:string) {
        var cell = document.createElement("div") as HTMLDivElement;
        cell.className = "cell";
        cell.textContent = name;
        //var cellText = document.createTextNode(name);
        //cell.appendChild(cellText);
        this.row.appendChild(cell);
    }
            // метод для создания таблицы
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
