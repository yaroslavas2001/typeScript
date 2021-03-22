export class Button {
    constructor(name, clickHandler) {
        this._btn = document.createElement("button");
        this._btn.textContent = name;
        this._btn.onclick = clickHandler;
    }
    BtnReturn() {
        return this._btn;
    }
}
//# sourceMappingURL=button.js.map