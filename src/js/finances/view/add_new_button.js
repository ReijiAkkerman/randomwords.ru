import {switcher} from "/src/js/finances/view/switcher.js";
import {forms} from "/src/js/finances/view/forms.js";

class AddNewButton {
    #selectors = new Map([
        ["Кнопка добавления чего-либо", ".addNew__button"],
        ["", ""],
        ["", ""],
        ["", ""],
        ["", ""],
        ["", ""],
    ]);





    #CE(selector) {
        return document.querySelector(this.#selectors.get(selector));
    }





    addNew__button = this.#CE("Кнопка добавления чего-либо");





    showAddNewButton() {
        if(addNewButton.#needAddNewButton()) 
            addNewButton.#showAddNewButton();
        else 
            addNewButton.#hideAddNewButton();
    }

    #needAddNewButton() {
        let show_button;
        switch(switcher.SELECTED_AREA) {
            case "funds":
                show_button = (forms.FUND_FORM_OPENED) ? false : true;
                break;
            case "entries":
                show_button = (forms.ENTRY_FORM_OPENED) ? false : true;
                break;
            case "settings":
                show_button = false;
                break;
        }
        return show_button;
    }

    #showAddNewButton() {
        this.addNew__button.style.display = "";
    }

    #hideAddNewButton() {
        this.addNew__button.style.display = "none";
    }
}

export var addNewButton = new AddNewButton();

document.addEventListener("DOMContentLoaded", function() {
    switcher.funds__button.addEventListener("click", addNewButton.showAddNewButton);
    switcher.entries__button.addEventListener("click", addNewButton.showAddNewButton);
    switcher.settings__button.addEventListener("click", addNewButton.showAddNewButton);
});