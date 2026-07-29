class NewAdderButton {
    #form;
    #currently_opened_area;
    #addNew_button;

    constructor(addNew_button_selector, currently_opened_area_selector, form_selector) {
        this.#addNew_button = document.querySelector(addNew_button_selector);
        this.#currently_opened_area = document.querySelector(currently_opened_area_selector);
        this.#form = document.querySelector(form_selector);
        this.#addNew_button.addEventListener("click", (event) => this.openForm(event));
    }

    openForm() {
        this.#hideAddNewButton();
        this.#hideCurrentlyOpenedArea();
        this.#showForm();
    }

    #hideAddNewButton() {
        this.#addNew_button.style.display = "none";
    }

    #hideCurrentlyOpenedArea() {
        this.#currently_opened_area.style.display = "none";
    }

    #showForm() {
        this.#form.style.display = "";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    let goals = new NewAdderButton(".goals-showFormButton", ".goals-list", ".goals-goalForm");
    let funds = new NewAdderButton(".funds-showFormButton", ".funds-list", ".funds-fundForm");
    let entries = new NewAdderButton(".entries-showFormButton", ".entries-list", ".entries-entryForm");
});