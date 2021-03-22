"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formAdd = void 0;
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
        if (this.onAddEmplore) {
            this.onAddEmplore(this.input.value);
        }
    };
    return formAdd;
}());
exports.formAdd = formAdd;
//this.root.appendChild(this.input);
//# sourceMappingURL=formAdd.js.map