class EntryForm {
    #selectors = new Map([
        ["Кнопка для отображения формы с параметрами записи", ".entries-showFormButton"],
        ["Кнопка закрытия формы с параметрами записи", ".entries-entryForm_close"],

        ["Область со списком записей", ".entries-list"],
        ["Форма с параметрами записи", ".entries-entryForm"],
    ]);





    #CE(selector) {
        return document.querySelector(this.#selectors.get(selector));
    }





    openForm__button = this.#CE("Кнопка для отображения формы с параметрами записи");
    closeForm__button = this.#CE("Кнопка закрытия формы с параметрами записи");

    #entryList__area = this.#CE("Область со списком записей");
    #entryForm = this.#CE("Форма с параметрами записи");





    openForm(event) {
        event.preventDefault();
        entryForm.#hideList();
        entryForm.#hideOpenFormButton();
        entryForm.#showForm();
    }

    closeForm(event) {
        event.preventDefault();
        entryForm.#hideForm();
        entryForm.#showList();
        entryForm.#showOpenFormButton();
    }





    #showForm() {
        this.#entryForm.style.display = "";
    }

    #hideForm() {
        this.#entryForm.style.display = "none";
    }

    #showList() {
        this.#entryList__area.style.display = "";
    }

    #hideList() {
        this.#entryList__area.style.display = "none";
    }

    #showOpenFormButton() {
        this.openForm__button.style.display = "";
    }

    #hideOpenFormButton() {
        this.openForm__button.style.display = "none";
    }
}

var entryForm = new EntryForm();

document.addEventListener("click", function() {
    entryForm.openForm__button.addEventListener("click", entryForm.openForm);
    entryForm.closeForm__button.addEventListener("click", entryForm.closeForm);
});