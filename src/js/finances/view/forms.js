import {switcher} from "/src/js/finances/view/switcher.js";

class Forms {
    #selectors = new Map([
        ["Форма с параметрами фонда", ".funds-fund"],
        ["Форма с параметрами записи", ".entries-entry"],

        ["Область со списком фондов", ".funds-list"],
        ["Область со списком записей фонда", ".entries-list"],

        ["Кнопка добавления чего-либо", ".addNew__button"],

        ["Кнопка закрытия формы с параметрами фонда", ".funds-fund_close"],
        ["Кнопка закрытия формы с параметрами записи", ".entries-entry_close"],
    ]);





    #CE(selector) {
        return document.querySelector(this.#selectors.get(selector));
    }





    #fund__form = this.#CE("Форма с параметрами фонда");
    #entry__form = this.#CE("Форма с параметрами записи");

    #fundList__area = this.#CE("Область со списком фондов");
    #entryList__area = this.#CE("Область со списком записей фонда");

    addNew__button = this.#CE("Кнопка добавления чего-либо");

    closeFundForm__button = this.#CE("Кнопка закрытия формы с параметрами фонда");
    closeEntryForm__button = this.#CE("Кнопка закрытия формы с параметрами записи");

    FUND_FORM_OPENED = false;
    ENTRY_FORM_OPENED = false;





    openForm() {
        switch(switcher.SELECTED_AREA) {
            case "funds":
                forms.#hideAddNewButton();
                forms.#hideFundListArea();
                forms.#showFundForm();
                forms.#OPEN_FUND_FORM();
                break;
            case "entries":
                forms.#hideAddNewButton();
                forms.#hideEntryListArea();
                forms.#showEntryForm();
                forms.#OPEN_ENTRY_FORM();
                break;
        }
    }

    closeFundForm(event) {
        event.preventDefault();
        forms.#hideFundForm();
        forms.#showFundListArea();
        forms.#showAddNewButton();
        forms.#CLOSE_FUND_FORM();
    }

    closeEntryForm(event) {
        event.preventDefault();
        forms.#hideEntryForm();
        forms.#showEntryListArea();
        forms.#showAddNewButton();
        forms.#CLOSE_ENTRY_FORM();
    }





    #showFundForm() {
        this.#fund__form.style.display = "";
    }

    #hideFundForm() {
        this.#fund__form.style.display = "none";
    }

    #showEntryForm() {
        this.#entry__form.style.display = "";
    }

    #hideEntryForm() {
        this.#entry__form.style.display = "none";
    }





    #showFundListArea() {
        this.#fundList__area.style.display = "";
    }

    #hideFundListArea() {
        this.#fundList__area.style.display = "none";
    }

    #showEntryListArea() {
        this.#entryList__area.style.display = "";
    }

    #hideEntryListArea() {
        this.#entryList__area.style.display = "none";
    }





    #showAddNewButton() {
        this.addNew__button.style.display = "";
    }

    #hideAddNewButton() {
        this.addNew__button.style.display = "none";
    }





    #OPEN_FUND_FORM() {
        this.FUND_FORM_OPENED = true;
    }

    #CLOSE_FUND_FORM() {
        this.FUND_FORM_OPENED = false;
    }

    #OPEN_ENTRY_FORM() {
        this.ENTRY_FORM_OPENED = true;
    }

    #CLOSE_ENTRY_FORM() {
        this.ENTRY_FORM_OPENED = false;
    }





    defineInitialStateOfForms() {
        this.FUND_FORM_OPENED = (this.#fund__form.style.display) ? false : true;
        this.ENTRY_FORM_OPENED = (this.#entry__form.style.display) ? false : true;
    }
}

export var forms = new Forms();
forms.defineInitialStateOfForms();

document.addEventListener("DOMContentLoaded", function() {
    forms.addNew__button.addEventListener("click", forms.openForm);
    forms.closeFundForm__button.addEventListener("click", forms.closeFundForm);
    forms.closeEntryForm__button.addEventListener("click", forms.closeEntryForm);
});