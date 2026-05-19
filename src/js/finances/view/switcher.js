class Switcher {
    static #selectors = new Map([
        ["Кнопка отображения фондов", ".switcher-funds"],
        ["Кнопка отображения записей фонда", ".switcher-selectedFund"],
        ["Кнопка отображения настроек", ".switcher-settings"],

        ["Область фондов", ".funds"],
        ["Область записей", ".entries"],
        ["Область настроек", ".settings"],

        ["Наименование открытой области", ".title"],

        ["Кнопка добавления чего-либо", ".addNew__button"],

        ["", ""],
        ["", ""],
    ]);





    static #CE(selector) {
        return document.querySelector(Switcher.#selectors.get(selector));
    }





    static funds__button = Switcher.#CE("Кнопка отображения фондов");
    static entries__button = Switcher.#CE("Кнопка отображения записей фонда");
    static settings__button = Switcher.#CE("Кнопка отображения настроек");

    static #funds__area = Switcher.#CE("Область фондов");
    static #entries__area = Switcher.#CE("Область записей");
    static #settings__area = Switcher.#CE("Область настроек");

    static #title = Switcher.#CE("Наименование открытой области");

    static #addNew__button = Switcher.#CE("Кнопка добавления чего-либо");





    static #areas = new Map([
        ["funds", [Switcher.#funds__area, Switcher.funds__button]],
        ["entries", [Switcher.#entries__area, Switcher.entries__button]],
        ["settings", [Switcher.#settings__area, Switcher.settings__button]],
    ]);
    static SELECTED_AREA = "funds";






    static showFunds() {
        Switcher.#showAddNewButton();
        Switcher.#showSelectedArea(this);
        Switcher.#exchangeTitle(this);
    }

    static showEntries() {
        Switcher.#showAddNewButton();
        Switcher.#showSelectedArea(this);
        Switcher.#exchangeTitle(this);
    }

    static showSettings() {
        Switcher.#hideAddNewButton();
        Switcher.#showSelectedArea(this);
        Switcher.#exchangeTitle(this);
    }

    static #showSelectedArea(selected_button) {
        Switcher.#disablePreviousSelectedArea();
        Switcher.#disablePreviousSelectedButton();
        Switcher.#enableCurrentSelectedButton(selected_button);
        Switcher.#enableCurrentSelectedArea();
    }

    static #exchangeTitle(selected_button) {
        Switcher.#title.innerText = selected_button.dataset.title;
    }





    static #enableCurrentSelectedButton(selected_button) {
        Switcher.#SET_SELECTED_AREA(selected_button);
        Switcher.#_hideButtonBorderline(selected_button);
    }

    static #enableCurrentSelectedArea() {
        let area = Switcher.#areas.get(Switcher.SELECTED_AREA)[0];
        area.style.display = "";
    }

    static #disablePreviousSelectedArea() {
        let area = Switcher.#areas.get(Switcher.SELECTED_AREA)[0];
        area.style.display = "none";
    }

    static #disablePreviousSelectedButton() {
        let button = Switcher.#areas.get(Switcher.SELECTED_AREA)[1];
        Switcher.#_showButtonBorderline(button);
    }





    static #_showButtonBorderline(button) {
        button.style.borderTopColor = "";
    }

    static #_hideButtonBorderline(button) {
        button.style.borderTopColor = "#0000";
    }





    static #hideAddNewButton() {
        Switcher.#addNew__button.style.display = "none";
    }

    static #showAddNewButton() {
        Switcher.#addNew__button.style.display = "";
    }





    static #SET_SELECTED_AREA(button) {
        Switcher.SELECTED_AREA = button.dataset.section;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    Switcher.funds__button.addEventListener('click', Switcher.showFunds);
    Switcher.entries__button.addEventListener('click', Switcher.showEntries);
    Switcher.settings__button.addEventListener('click', Switcher.showSettings);
});