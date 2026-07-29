class showEntryData {
    #selectors = new Map([
        ["Запись", ".entries-list-item"],
        ["Форма данных записи", ".entries-entryForm"],
        ["Область записей", ".entries-list"],
        ["Кнопка открытия формы для создания новой записи", ".entries-showFormButton"],

        ["Категория", ".entries-entryForm-param-cath"],
        ["Тип", ".entries-entryForm-param-type"],
        ["Область пользователей", ".entries-entryForm .FormElements-usersBlock"],
        ["Сумма", ".entries-entryForm .FormElements-sumBlock_sum"],
        ["Валюта", ".entries-entryForm .FormElements-sumBlock_currency"],
        ["Особые отметки", ".entries-entryForm-param_specialMarks"],
        ["Описание", ".entries-entryForm-param_description"],
    ]);





    #CE(selector) {
        return document.querySelector(this.#selectors.get(selector));
    }





    entry__buttons = document.querySelectorAll(this.#selectors.get("Запись"));
    #entryData__form = this.#CE("Форма данных записи");
    #entries__area = this.#CE("Область записей");
    #showForm__button = this.#CE("Кнопка открытия формы для создания новой записи");

    #cathegory__field = this.#CE("Категория");
    #type__field = this.#CE("Тип");
    #users__area = this.#CE("Область пользователей");
    #sum__field = this.#CE("Сумма");
    #currency__field = this.#CE("Валюта");
    #specialMarks__field = this.#CE("Особые отметки");
    #description__field = this.#CE("Описание");





    openEntry() {
        show_entry_data.#hideShowFormButton();
        show_entry_data.#closeEntriesArea();
        show_entry_data.#openForm();
        show_entry_data.#completeFormFields(this);
    }

    #hideShowFormButton() {
        this.#showForm__button.style.display = "none";
    }

    #closeEntriesArea() {
        this.#entries__area.style.display = "none";
    }

    #openForm() {
        this.#entryData__form.style.display = "";
    }

    #completeFormFields(item) {
        this.#fillCathegory(item);
        this.#fillType(item);
        this.#fillUsers(item);
        this.#fillSum(item);
        this.#fillCurrency(item);
        this.#fillSpecialMarks(item);
        this.#fillDescription(item);
    }

    #fillCathegory(item) {
        this.#cathegory__field.value = item.dataset.cathegory;
    }

    #fillType(item) {
        this.#type__field.value = item.dataset.type;
    }

    #fillUsers(item) {
        let users = this.#_getAllUsers(item.dataset.users);
        users.forEach(user => {
            let user__field = this.#users__area.querySelector(`#entries_${user}`);
            user__field.checked = true;
        });
    }

    #_getAllUsers(users_str) {
        let users_array = users_str.split(",");
        return users_array;
    }

    #fillSum(item) {
        this.#sum__field.value = item.dataset.sum;
    }

    #fillCurrency(item) {
        this.#currency__field.value = item.dataset.currency;
    }

    #fillSpecialMarks(item) {
        this.#specialMarks__field.value = item.dataset.special_marks;
    }

    #fillDescription(item) {
        this.#description__field.value = item.dataset.description;
    }
}

var show_entry_data = new showEntryData();

document.addEventListener("DOMContentLoaded", function() {
    show_entry_data.entry__buttons.forEach(entry => {
        entry.addEventListener("click", show_entry_data.openEntry);
    });
});