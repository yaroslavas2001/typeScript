export class formAdd {
    constructor(element) {
        this.root = element;
        this.input = document.createElement('input');
        this.btn = document.createElement('button');
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
//this.root.appendChild(this.input);
//# sourceMappingURL=formAdd.js.map