class SectionSwitcher {
    static #SELECTED_BUTTON;
    static #SELECTED_SECTION;

    #section;
    #button;

    constructor(button_selector, section_selector) {
        this.#button = document.querySelector(button_selector);
        this.#section = document.querySelector(section_selector);
        // Первым экземпляром этого класса должен быть включенный по умолчанию раздел
        if(SectionSwitcher.#SELECTED_BUTTON === undefined) SectionSwitcher.#SELECTED_BUTTON = this.#button;
        if(SectionSwitcher.#SELECTED_SECTION === undefined) SectionSwitcher.#SELECTED_SECTION = this.#section;
        this.#button.addEventListener("click", (event) => this.openSection(event));
    }

    openSection() {
        this.#hideSection(SectionSwitcher.#SELECTED_SECTION);
        this.#unhighlightButton(SectionSwitcher.#SELECTED_BUTTON);
        this.#showSection(this.#section);
        this.#highlightButton(this.#button);
        this.#MARK_SELECTED_SECTION();
    }

    #highlightButton(button) {
        button.style.color = "#000";
    }

    #unhighlightButton(button) {
        button.style.color = "";
    }

    #showSection(section) {
        section.style.display = "";
    }

    #hideSection(section) {
        section.style.display = "none";
    }

    #MARK_SELECTED_SECTION() {
        SectionSwitcher.#SELECTED_SECTION = this.#section;
        SectionSwitcher.#SELECTED_BUTTON = this.#button;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // filters - раздел включенный по умолчанию при загрузке страницы
    let filters = new SectionSwitcher(".settings-modeSwitcher_switchToFilters", ".settings-searchAndFilters");
    let parameters = new SectionSwitcher(".settings-modeSwitcher_switchToParams", ".settings-parametersEditing");
});