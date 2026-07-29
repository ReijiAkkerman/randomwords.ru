class NewAdderButton {
    #form;
    #list;
    #addNew_button;

    constructor(addNew_button_selector, list_selector, form_selector) {
        this.#addNew_button = document.querySelector(addNew_button_selector);
        this.#list = document.querySelector(list_selector);
        this.#form = document.querySelector(form_selector);
        this.#addNew_button.addEventListener("click", (event) => this.openForm(event));
    }

    openForm() {
        this.#hideAddNewButton();
        this.#hideList();
        this.#showForm();
    }

    #hideAddNewButton() {
        this.#addNew_button.style.display = "none";
    }

    #hideList() {
        this.#list.style.display = "none";
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