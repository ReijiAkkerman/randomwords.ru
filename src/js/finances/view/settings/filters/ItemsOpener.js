class ItemsOpener {
    static selectors = new Map([
        ["Кнопка открытия содержимого фильтра", ".settings-searchAndFilters_switchButton"],
    ]);





    switchDisplaying(event) {
        if(event.currentTarget.style.background.match(/^linear-gradient\(0deg.*/)) {
            this.#hideProperties(event.currentTarget.nextElementSibling);
            this.#unhighlightButton(event.currentTarget);
        }
        else {
            this.#showProperties(event.currentTarget.nextElementSibling);
            this.#highlightButton(event.currentTarget);
        }
    }

    #showProperties(properties_section) {
        properties_section.style.display = "";
    }

    #hideProperties(properties_section) {
        properties_section.style.display = "none";
    }

    #highlightButton(button) {
        button.style.background = "linear-gradient(0deg, #fff, #ccc)";
    }

    #unhighlightButton(button) {
        button.style.background = "";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    let open_buttons = document.querySelectorAll(ItemsOpener.selectors.get("Кнопка открытия содержимого фильтра"));
    let objects_for_buttons = new Array(open_buttons.length);
    for(let i = 0; i < open_buttons.length; i++) {
        objects_for_buttons[i] = new ItemsOpener();
        open_buttons[i].addEventListener("click", objects_for_buttons[i].switchDisplaying.bind(objects_for_buttons[i]));
    }
});