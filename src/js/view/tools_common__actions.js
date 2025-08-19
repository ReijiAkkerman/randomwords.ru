class tools_common__actions {
    static #selectors = new Map([
        ["Область кнопок действий", ".tools-common-actions"],

        ["Кнопка разделения списка", ".tools__button_splitList"],
        ["Кнопка обьединения списков", ".tools__button_combineLists"],
        ["Кнопка формирования нового списка", ".tools__button_createList"],

        ["Иконка кнопки действия", ".tools-common__svg"],
        ["Описание кнопки действия", ".tools-common__p"],
    ]);





    static common__actions = document.querySelector(tools_common__actions.#selectors.get("Область кнопок действий"));

    static splitList__button = document.querySelector(tools_common__actions.#selectors.get("Кнопка разделения списка"));
    static combineLists__button = document.querySelector(tools_common__actions.#selectors.get("Кнопка обьединения списков"));
    static createList__button = document.querySelector(tools_common__actions.#selectors.get("Кнопка формирования нового списка"));

    static #splitList__icon = tools_common__actions.splitList__button.querySelector(tools_common__actions.#selectors.get("Иконка кнопки действия"));
    static #combineLists__icon = tools_common__actions.combineLists__button.querySelector(tools_common__actions.#selectors.get("Иконка кнопки действия"));
    static #createList__icon = tools_common__actions.createList__button.querySelector(tools_common__actions.#selectors.get("Иконка кнопки действия"));

    static #splitList__description = tools_common__actions.splitList__button.querySelector(tools_common__actions.#selectors.get("Описание кнопки действия"));
    static #combineLists__description = tools_common__actions.combineLists__button.querySelector(tools_common__actions.#selectors.get("Описание кнопки действия"));
    static #createList__description = tools_common__actions.createList__button.querySelector(tools_common__actions.#selectors.get("Описание кнопки действия"));





    static showMeaningOfButton__splitList() {
        tools_common__actions.#splitList__icon.style.display = "none";
        tools_common__actions.combineLists__button.style.width = 
        tools_common__actions.createList__button.style.width = "fit-content";
        tools_common__actions.splitList__button.style.width = "100%";
        tools_common__actions.#splitList__description.style.display = "";
    }

    static showMeaningOfButton__combineLists() {
        tools_common__actions.#combineLists__icon.style.display = "none";
        tools_common__actions.splitList__button.style.width = 
        tools_common__actions.createList__button.style.width = "fit-content";
        tools_common__actions.combineLists__button.style.width = "100%";
        tools_common__actions.#combineLists__description.style.display = "";
    }

    static showMeaningOfButton__createList() {
        tools_common__actions.#createList__icon.style.display = "none";
        tools_common__actions.splitList__button.style.width = 
        tools_common__actions.combineLists__button.style.width = "fit-content";
        tools_common__actions.createList__button.style.width = "100%";
        tools_common__actions.#createList__description.style.display = "";
    }





    static hideMeaningOfButton__splitList() {
        tools_common__actions.#splitList__description.style.display = "none";
        tools_common__actions.#splitList__icon.style.display = "";
    }

    static hideMeaningOfButton__combineLists() {
        tools_common__actions.#combineLists__description.style.display = "none";
        tools_common__actions.#combineLists__icon.style.display = "";
    }

    static hideMeaningOfButton__createList() {
        tools_common__actions.#createList__description.style.display = "none";
        tools_common__actions.#createList__icon.style.display = "";
    }





    static setDefaultButtonsWidth() {
        tools_common__actions.splitList__button.style.width = 
        tools_common__actions.combineLists__button.style.width = 
        tools_common__actions.createList__button.style.width = "100%";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    tools_common__actions.common__actions.addEventListener("mouseout", tools_common__actions.setDefaultButtonsWidth);

    tools_common__actions.splitList__button.addEventListener("mouseover", tools_common__actions.showMeaningOfButton__splitList);
    tools_common__actions.combineLists__button.addEventListener("mouseover", tools_common__actions.showMeaningOfButton__combineLists);
    tools_common__actions.createList__button.addEventListener("mouseover", tools_common__actions.showMeaningOfButton__createList);

    tools_common__actions.splitList__button.addEventListener("mouseout", tools_common__actions.hideMeaningOfButton__splitList);
    tools_common__actions.combineLists__button.addEventListener("mouseout", tools_common__actions.hideMeaningOfButton__combineLists);
    tools_common__actions.createList__button.addEventListener("mouseout", tools_common__actions.hideMeaningOfButton__createList);
});