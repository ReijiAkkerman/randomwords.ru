import {CSSStyles} from "/src/js/finances/view/CSSStyles.js";

class WindowSwitcher {
    static #earlier_selected_button;

    #button;
    #window;
    #title;
    #button_color;

    constructor(button_selector, window_selector, button_color = CSSStyles.getMainSvgColor()) {
        this.#button = document.querySelector(button_selector);
        this.#window = document.querySelector(window_selector);
        this.#title = document.querySelector(".title");
        this.#button_color = button_color;
        this.#button.addEventListener("click", (event) => this.enableCurrentSection(event));
        if(WindowSwitcher.#earlier_selected_button === undefined) WindowSwitcher.#earlier_selected_button = goals;
    }

    enableCurrentSection(event) {
        if(WindowSwitcher.#earlier_selected_button !== this)
        WindowSwitcher.#earlier_selected_button.#disablePreviousSection();
        WindowSwitcher.#earlier_selected_button = this;
        this.#setTitle();
        this.#showWindow();
        this.#highlightSvg();
        this.#hightlightButton();
    }

    #disablePreviousSection() {
        this.#hideWindow();
        this.#unhighlightSvg();
        this.#unhighlightButton();
    }

    #hightlightButton() {
        this.#button.style.borderTopColor = "#0000";
    }

    #unhighlightButton() {
        this.#button.style.borderTopColor = "";
    }

    #highlightSvg() {
        let svg = this.#button.querySelector("svg.svg-stroke");
        if(svg === null) {
            svg = this.#button.querySelector("svg.switcher__svg");
            svg.style.fill = this.#button_color;
        }
        else svg.style.stroke = this.#button_color;
    }

    #unhighlightSvg() {
        let svg = this.#button.querySelector("svg.svg-stroke");
        if(svg === null) {
            svg = this.#button.querySelector("svg.switcher__svg");
            svg.style.fill = "";
        }
        else svg.style.stroke = "";
    }

    #setTitle() {
        this.#title.textContent = this.#button.dataset.title;
    }

    #showWindow() {
        this.#window.style.display = "";
    }

    #hideWindow() {
        this.#window.style.display = "none";
    }
}

export var goals, funds, entries, settings;

document.addEventListener("DOMContentLoaded", function() {
    goals = new WindowSwitcher(".switcher-goals", ".mainWindow.goals");
    funds = new WindowSwitcher(".switcher-funds", ".mainWindow.funds");
    entries = new WindowSwitcher(".switcher-entries", ".mainWindow.entries", CSSStyles.getMainTextColor());
    settings = new WindowSwitcher(".switcher-settings", ".mainWindow.settings", CSSStyles.getMainTextColor());
});