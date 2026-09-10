import {CSSStyles} from "/src/js/finances/view/CSSStyles.js";

class ModeSwitcher {
    static #selectedButton;
    static #selectedSection;

    #button;
    #section;

    constructor(button_selector, section_selector) {
        this.#button = document.querySelector(button_selector);
        this.#section = document.querySelector(section_selector);
    }

    setCurrentMode(event) {
        this.#hideSection(ModeSwitcher.#selectedSection);
        this.#unhighlightButton(ModeSwitcher.#selectedButton);
        this.#showSection(this.#section);
        this.#highlightButton(this.#button);
        this.#SET_SELECTED_MODE();
    }

    init() {
        this.#SET_SELECTED_MODE();
    }

    #showSection(section) {
        section.style.display = "";
    }

    #hideSection(section) {
        section.style.display = "none";
    }

    #highlightButton(button) {
        button.style.color = CSSStyles.getMainTextColor();
        button.style.borderColor = CSSStyles.getMainBorderColor();
    }

    #unhighlightButton(button) {
        button.style.color = "";
        button.style.borderColor = "";
    }

    #SET_SELECTED_MODE() {
        ModeSwitcher.#selectedButton = this.#button;
        ModeSwitcher.#selectedSection = this.#section;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    let login__button = document.querySelector(".auth-switcher_login");
    let registration__button = document.querySelector(".auth-switcher_registration");

    let login = new ModeSwitcher(".auth-switcher_login", ".auth-login");
    let registration = new ModeSwitcher(".auth-switcher_registration", ".auth-registration");

    login__button.addEventListener("click", login.setCurrentMode.bind(login));
    registration__button.addEventListener("click", registration.setCurrentMode.bind(registration));
    login.init();
});