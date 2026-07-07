class settings_ItemsOpener {
    #selectors = new Map([
        ["Кнопка открывания раздела фильтра", ".settings-searchAndFilters_switchButton"],
    ]);





    openFilterSection__buttons = document.querySelectorAll(this.#selectors.get("Кнопка открывания раздела фильтра"));





    openFilterSection() {
        if(this.style.background) {
            settings_itemsOpener.#closeFilterSection(this.nextElementSibling);
            settings_itemsOpener.#unhighlightButtonActivity(this);
        }
        else {
            settings_itemsOpener.#openFilterSection(this.nextElementSibling);
            settings_itemsOpener.#highlightButtonActivity(this);
        }
    }

    #openFilterSection(section) {
        section.style.display = "";
    }

    #closeFilterSection(section) {
        section.style.display = "none";
    }

    #highlightButtonActivity(button) {
        button.style.background = "linear-gradient(180deg, #ccc, #fff)"
    }

    #unhighlightButtonActivity(button) {
        button.style.background = "";
    }
}

var settings_itemsOpener = new settings_ItemsOpener();

document.addEventListener("DOMContentLoaded", function() {
    settings_itemsOpener.openFilterSection__buttons.forEach(element => {
        element.addEventListener("click", settings_itemsOpener.openFilterSection);
    });
});