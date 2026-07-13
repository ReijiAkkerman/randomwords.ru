import {CSSStyles} from "/src/js/finances/view/CSSStyles.js";

class SwitcherButton {
    static #earlier_selected_button;

    #button;
    #window;

    constructor(button_selector, window_selector) {
        this.#button = document.querySelector(button_selector);
        this.#window = document.querySelector(window_selector);
        this.#button.addEventListener("click", (event) => this.enableCurrentSection(event));
        if(SwitcherButton.#earlier_selected_button === undefined) SwitcherButton.#earlier_selected_button = goals;
    }

    enableCurrentSection(event) {
        SwitcherButton.#earlier_selected_button.#disablePreviousSection();
        SwitcherButton.#earlier_selected_button = this;
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
        let svg = this.#button.querySelector("svg.switcher__svg");
        if(svg === null) {
            svg = this.#button.querySelector("svg.svg-stroke");
            svg.style.stroke = CSSStyles.getMainSvgColor();
        }
        else svg.style.fill = CSSStyles.getMainSvgColor();
    }

    #unhighlightSvg() {
        let svg = this.#button.querySelector("svg.switcher__svg");
        if(svg === null) {
            svg = this.#button.querySelector("svg.svg-stroke");
            svg.style.stroke = "";
        }
        else svg.style.fill = "";
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
    goals = new SwitcherButton(".switcher-goals", ".mainWindow.goals");
    funds = new SwitcherButton(".switcher-funds", ".mainWindow.funds");
    entries = new SwitcherButton(".switcher-entries", ".mainWindow.entries");
    settings = new SwitcherButton(".switcher-settings", ".mainWindow.settings");
});