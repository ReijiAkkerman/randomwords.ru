class ItemsOpener {
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

export {ItemsOpener};