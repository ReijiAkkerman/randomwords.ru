class settings_Switcher {
    #selectors = new Map([
        ["Кнопка включения параметров", ".settings-modeSwitcher_switchToParams"],
        ["Кнопка включения фильтров", ".settings-modeSwitcher_switchToFilters"],
        ["Область параметров", ".settings-parametersEditing"],
        ["Область фильтров", ".settings-searchAndFilters"],
    ]);





    #CE(selector) {
        return document.querySelector(this.#selectors.get(selector));
    }





    enableParameters__button = this.#CE("Кнопка включения параметров");
    enableFilters__button = this.#CE("Кнопка включения фильтров");
    parameters__area = this.#CE("Область параметров");
    filters__area = this.#CE("Область фильтров");





    showParameters() {
        settings_switcher.#hideFilters();
        settings_switcher.#showParameters();
        settings_switcher.#unhighlightFiltersButton();
        settings_switcher.#highlightParametersButton();
    }

    showFilters() {
        settings_switcher.#hideParameters();
        settings_switcher.#showFilters();
        settings_switcher.#unhighlightParametersButton();
        settings_switcher.#highlightFiltersButton();
    }

    #showParameters() {
        this.parameters__area.style.display = "";
    }

    #hideParameters() {
        this.parameters__area.style.display = "none";
    } 

    #showFilters() {
        this.filters__area.style.display = "";
    }

    #hideFilters() {
        this.filters__area.style.display = "none";
    }

    #highlightParametersButton() {
        this.enableParameters__button.style.color = "#000";
    }

    #unhighlightParametersButton() {
        this.enableParameters__button.style.color = "";
    }

    #highlightFiltersButton() {
        this.enableFilters__button.style.color = "#000";
    }

    #unhighlightFiltersButton() {
        this.enableFilters__button.style.color = "";
    }
}

export var settings_switcher = new settings_Switcher();

document.addEventListener("DOMContentLoaded", function() {
    settings_switcher.enableParameters__button.addEventListener("click", settings_switcher.showParameters);
    settings_switcher.enableFilters__button.addEventListener("click", settings_switcher.showFilters);
});