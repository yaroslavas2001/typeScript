export class Button {
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