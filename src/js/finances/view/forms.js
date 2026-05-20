class Forms {
    #selectors = new Map([
        ["Форма с параметрами фонда", ".funds-fund"],
        ["Форма с параметрами записи", ".entries-entry"],
        ["", ""],
        ["", ""],
        ["", ""],
        ["", ""],
    ]);





    #CE(selector) {
        return document.querySelector(this.#selectors.get(selector));
    }





    #fund__form = this.#CE("Форма с параметрами фонда");
    #entry__form = this.#CE("Форма с параметрами записи");

    FUND_FORM_OPENED = false;
    ENTRY_FORM_OPENED = false;





    showFundForm() {
        this.#fund__form.style.display = "";
        this.#OPEN_FUND_FORM();
    }

    hideFundForm() {
        this.#fund__form.style.display = "none";
        this.#CLOSE_FUND_FORM();
    }

    showEntryForm() {
        this.#entry__form.style.display = "";
        this.#OPEN_ENTRY_FORM();
    }

    hideEntryForm() {
        this.#entry__form.style.display = "none";
        this.#CLOSE_ENTRY_FORM();
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