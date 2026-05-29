class FundForm {
    #selectors = new Map([
        ["Кнопка для отображения формы с параметрами фонда", ".funds-showFormButton"],
        ["Кнопка закрытия формы с параметрами фонда", ".funds-fundForm_close"],

        ["Область со списком фондов", ".funds-list"],
        ["Форма с параметрами фонда", ".funds-fundForm"],
    ]);





    #CE(selector) {
        return document.querySelector(this.#selectors.get(selector));
    }





    openForm__button = this.#CE("Кнопка для отображения формы с параметрами фонда");
    closeForm__button = this.#CE("Кнопка закрытия формы с параметрами фонда");

    #fundList__area = this.#CE("Область со списком фондов");
    #fundForm = this.#CE("Форма с параметрами фонда");





    openForm(event) {
        event.preventDefault();
        fundForm.#hideList();
        fundForm.#hideOpenFormButton();
        fundForm.#showForm();
    }

    closeForm(event) {
        event.preventDefault();
        fundForm.#hideForm();
        fundForm.#showList();
        fundForm.#showOpenFormButton();
    }





    #showForm() {
        this.#fundForm.style.display = "";
    }

    #hideForm() {
        this.#fundForm.style.display = "none";
    }

    #showList() {
        this.#fundList__area.style.display = "";
    }

    #hideList() {
        this.#fundList__area.style.display = "none";
    }

    #showOpenFormButton() {
        this.openForm__button.style.display = "";
    }

    #hideOpenFormButton() {
        this.openForm__button.style.display = "none";
    }
}

var fundForm = new FundForm();

document.addEventListener("DOMContentLoaded", function() {
    fundForm.openForm__button.addEventListener("click", fundForm.openForm);
    fundForm.closeForm__button.addEventListener("click", fundForm.closeForm);
});