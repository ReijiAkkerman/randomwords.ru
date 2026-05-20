class Switcher {
    #selectors = new Map([
        ["Кнопка отображения фондов", ".switcher-funds"],
        ["Кнопка отображения записей фонда", ".switcher-selectedFund"],
        ["Кнопка отображения настроек", ".switcher-settings"],

        ["Область фондов", ".funds"],
        ["Область записей", ".entries"],
        ["Область настроек", ".settings"],

        ["Наименование открытой области", ".title"],

        ["", ""],
        ["", ""],
    ]);





    #CE(selector) {
        return document.querySelector(this.#selectors.get(selector));
    }





    funds__button = this.#CE("Кнопка отображения фондов");
    entries__button = this.#CE("Кнопка отображения записей фонда");;
    settings__button = this.#CE("Кнопка отображения настроек");

    #funds__area = this.#CE("Область фондов");
    #entries__area = this.#CE("Область записей");
    #settings__area = this.#CE("Область настроек");

    #title = this.#CE("Наименование открытой области");




    #areas = new Map([
        ["funds", [this.#funds__area, this.funds__button]],
        ["entries", [this.#entries__area, this.entries__button]],
        ["settings", [this.#settings__area, this.settings__button]],
    ]);
    SELECTED_AREA = "funds";






    showFunds() {
        switcher.#showSelectedArea(this);
        switcher.#exchangeTitle(this);
    }

    showEntries() {
        switcher.#showSelectedArea(this);
        switcher.#exchangeTitle(this);
    }

    showSettings() {
        switcher.#showSelectedArea(this);
        switcher.#exchangeTitle(this);
    }

    #showSelectedArea(selected_button) {
        this.#disablePreviousSelectedArea();
        this.#disablePreviousSelectedButton();
        this.#enableCurrentSelectedButton(selected_button);
        this.#enableCurrentSelectedArea();
    }

    #exchangeTitle(selected_button) {
        this.#title.innerText = selected_button.dataset.title;
    }





    #enableCurrentSelectedButton(selected_button) {
        this.#SET_SELECTED_AREA(selected_button);
        this.#_hideButtonBorderline(selected_button);
    }

    #enableCurrentSelectedArea() {
        let area = this.#areas.get(this.SELECTED_AREA)[0];
        area.style.display = "";
    }

    #disablePreviousSelectedArea() {
        let area = this.#areas.get(this.SELECTED_AREA)[0];
        area.style.display = "none";
    }

    #disablePreviousSelectedButton() {
        let button = this.#areas.get(this.SELECTED_AREA)[1];
        this.#_showButtonBorderline(button);
    }





    #_showButtonBorderline(button) {
        button.style.borderTopColor = "";
    }

    #_hideButtonBorderline(button) {
        button.style.borderTopColor = "#0000";
    }





    #SET_SELECTED_AREA(button) {
        this.SELECTED_AREA = button.dataset.section;
    }
}

export var switcher = new Switcher();

document.addEventListener("DOMContentLoaded", function() {
    switcher.funds__button.addEventListener('click', switcher.showFunds);
    switcher.entries__button.addEventListener('click', switcher.showEntries);
    switcher.settings__button.addEventListener('click', switcher.showSettings);
});