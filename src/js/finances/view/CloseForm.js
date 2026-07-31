class CloseForm {
    #form;
    #addNew_button;
    #list;
    #closeForm_button;

    constructor(
        form_selector,
        addNew_button_selector,
        list_selector,
        closeForm_button_selector
    ) {
        this.#form = document.querySelector(form_selector);
        this.#addNew_button = document.querySelector(addNew_button_selector);
        this.#list = document.querySelector(list_selector);
        this.#closeForm_button = document.querySelector(closeForm_button_selector);
        this.#closeForm_button.addEventListener("click", (event) => this.closeForm(event));
    }

    closeForm() {
        event.preventDefault();
        this.#hideForm();
        this.#showList();
        this.#showAddNewButton();
    }
    
    #hideForm() {
        this.#form.style.display = "none";
    }

    #showList() {
        this.#list.style.display = "";
    }

    #showAddNewButton() {
        this.#addNew_button.style.display = "";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    let goals = new CloseForm(".goals-goalForm", ".goals-showFormButton", ".goals-list", ".goals .FormElements-buttonsBlock_close");
    let funds = new CloseForm(".funds-fundForm", ".funds-showFormButton", ".funds-list", ".funds .FormElements-buttonsBlock_close");
    let entries = new CloseForm(".entries-entryForm", ".entries-showFormButton", ".entries-list", ".entries-entryForm_close");
});