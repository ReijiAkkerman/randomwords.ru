import {CSS_STYLES} from "/src/js/finances/view/CSS_STYLES.js";

class TabSwitcher {
    static earlier_selected_button;
    static #bar = document.querySelector(".switcher");

    #button;
    #window;
    #title;
    #button_color;

    constructor(button_selector, window_selector, button_color = CSS_STYLES.getMainSvgColor()) {
        this.#button = document.querySelector(button_selector);
        this.#window = document.querySelector(window_selector);
        this.#title = document.querySelector(".title");
        this.#button_color = button_color;
        this.#button.addEventListener("click", (event) => this.enableCurrentSection(event));
        if(TabSwitcher.earlier_selected_button === undefined) TabSwitcher.earlier_selected_button = goals;
    }

    enableCurrentSection(event) {
        if(TabSwitcher.earlier_selected_button !== this)
        TabSwitcher.earlier_selected_button.#disablePreviousSection();
        TabSwitcher.earlier_selected_button = this;
        this.#setTitle();
        this.#showWindow();
        this.#highlightSvg();
        this.#hightlightButton();
    }

    // Имена методов написанные заглавными буквами могут быть вызваны только другими классами.
    // Классом, в котором они определены, вызываться не должны.
    static HIDE_SECTION() {
        TabSwitcher.earlier_selected_button.#hideWindow();
    }

    static SHOW_SECTION() {
        TabSwitcher.earlier_selected_button.#showWindow();
    }

    static HIDE_SWITCHER_BAR() {
        TabSwitcher.#bar.style.display = "none";
    }

    static SHOW_SWITCHER_BAR() {
        TabSwitcher.#bar.style.display = "";
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

var goals, funds, entries, settings;
export {TabSwitcher};

document.addEventListener("DOMContentLoaded", function() {
    goals = new TabSwitcher(".switcher-goals", ".mainWindow.goals");
    funds = new TabSwitcher(".switcher-funds", ".mainWindow.funds");
    entries = new TabSwitcher(".switcher-entries", ".mainWindow.entries", CSS_STYLES.getMainTextColor());
    settings = new TabSwitcher(".switcher-settings", ".mainWindow.settings", CSS_STYLES.getMainTextColor());
});