export interface AddEmployer {
    (message: string): void;
}
// класс отвечающий за принятие ФИО человека с помощью input и кнопки
export class formAdd {
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
