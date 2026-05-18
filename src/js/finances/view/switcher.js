class Switcher {
    static #selectors = new Map([
        ["Кнопка отображения фондов", ".switcher-funds"],
        ["Кнопка отображения записей фонда", ".switcher-selectedFund"],
        ["Кнопка отображения настроек", ".switcher-settings"],

        ["Область фондов", ".funds"],
        ["Область записей", ".entries"],
        ["Область настроек", ".settings"],
        ["", ""],
        ["", ""],
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





    static #areas = new Map([
        ["funds", [Switcher.#funds__area, Switcher.funds__button]],
        ["entries", [Switcher.#entries__area, Switcher.entries__button]],
        ["settings", [Switcher.#settings__area, Switcher.settings__button]],
    ]);
    static #SELECTED_AREA = "funds";






    // static showFunds() {
    //     Switcher.#disablePreviousSelectedArea();
    //     Switcher.#disablePreviousSelectedButton();
    //     Switcher.#enableCurrentSelectedButton(this);
    //     Switcher.#enableCurrentSelectedArea();
    // }

    // static showEntries() {
    //     Switcher.#disablePreviousSelectedArea();
    //     Switcher.#disablePreviousSelectedButton();
    //     Switcher.#enableCurrentSelectedButton(this);
    //     Switcher.#enableCurrentSelectedArea();
    // }

    // static showSettings() {
    //     Switcher.#disablePreviousSelectedArea();
    //     Switcher.#disablePreviousSelectedButton();
    //     Switcher.#enableCurrentSelectedButton(this);
    //     Switcher.#enableCurrentSelectedArea();
    // }

    static showSelectedArea() {
        Switcher.#disablePreviousSelectedArea();
        Switcher.#disablePreviousSelectedButton();
        Switcher.#enableCurrentSelectedButton(this);
        Switcher.#enableCurrentSelectedArea();
    }





    static #enableCurrentSelectedButton(selected_button) {
        Switcher.#SET_SELECTED_AREA(selected_button);
        Switcher.#_makeButtonTransparent(selected_button);
        Switcher.#_hideButtonBorderline(selected_button);
    }

    static #enableCurrentSelectedArea() {
        let area = Switcher.#areas.get(Switcher.#SELECTED_AREA)[0];
        area.style.display = "";
    }

    static #disablePreviousSelectedArea() {
        let area = Switcher.#areas.get(Switcher.#SELECTED_AREA)[0];
        area.style.display = "none";
    }

    static #disablePreviousSelectedButton() {
        let button = Switcher.#areas.get(Switcher.#SELECTED_AREA)[1];
        Switcher.#_makeButtonOpaque(button);
        Switcher.#_showButtonBorderline(button);
    }





    static #_makeButtonTransparent(button) {
        button.style.backgroundColor = "#0000";
    }

    static #_makeButtonOpaque(button) {
        button.style.backgroundColor = "";
    }

    static #_showButtonBorderline(button) {
        button.style.borderTopColor = "";
    }

    static #_hideButtonBorderline(button) {
        button.style.borderTopColor = "#0000";
    }





    static #SET_SELECTED_AREA(button) {
        Switcher.#SELECTED_AREA = button.dataset.section;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    Switcher.funds__button.addEventListener('click', Switcher.showSelectedArea);
    Switcher.entries__button.addEventListener('click', Switcher.showSelectedArea);
    Switcher.settings__button.addEventListener('click', Switcher.showSelectedArea);
});