class GoalForm {
    #selectors = new Map([
        ["Кнопка для отображения формы с параметрами цели", ".goals-showFormButton"],
        ["Кнопка закрытия формы с параметрами цели", ".goals-goalForm_close"],

        ["Область со списком целей", ".goals-list"],
        ["Форма с параметрами цели", ".goals-goalForm"],
    ]);





    #CE(selector) {
        return document.querySelector(this.#selectors.get(selector));
    }





    openForm__button = this.#CE("Кнопка для отображения формы с параметрами цели");
    closeForm__button = this.#CE("Кнопка закрытия формы с параметрами цели");

    #goalList__area = this.#CE("Область со списком целей");
    #goalForm = this.#CE("Форма с параметрами цели");





    openForm(event) {
        event.preventDefault();
        goalForm.#hideList();
        goalForm.#hideOpenFormButton();
        goalForm.#showForm();
    }

    closeForm(event) {
        event.preventDefault();
        goalForm.#hideForm();
        goalForm.#showList();
        goalForm.#showOpenFormButton();
    }





    #showForm() {
        this.#goalForm.style.display = "";
    }

    #hideForm() {
        this.#goalForm.style.display = "none";
    }

    #showList() {
        this.#goalList__area.style.display = "";
    }

    #hideList() {
        this.#goalList__area.style.display = "none";
    }

    #showOpenFormButton() {
        this.openForm__button.style.display = "";
    }

    #hideOpenFormButton() {
        this.openForm__button.style.display = "none";
    }
}

var goalForm = new GoalForm();

document.addEventListener("DOMContentLoaded", function() {
    goalForm.openForm__button.addEventListener("click", goalForm.openForm);
    goalForm.closeForm__button.addEventListener("click", goalForm.closeForm);
});