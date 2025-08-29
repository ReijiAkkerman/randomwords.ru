class tools_common__actions {
    static #selectors = new Map([
        ["Кнопка разделения списка", ".tools__button_splitList"],
        ["Кнопка объединения списков", ".tools__button_combineLists"],
        ["Кнопка создания нового списка", ".tools__button_createList"],

        ["Иконка кнопки", ".tools-common__svg"],
        ["Описание кнопки", ".tools-common__pre"],
    ]);





    static splitList__button = document.querySelector(tools_common__actions.#selectors.get("Кнопка разделения списка"));
    static combineLists__button = document.querySelector(tools_common__actions.#selectors.get("Кнопка объединения списков"));
    static createList__button = document.querySelector(tools_common__actions.#selectors.get("Кнопка создания нового списка"));

    static #splitList__icon = tools_common__actions.splitList__button.querySelector(tools_common__actions.#selectors.get("Иконка кнопки"));
    static #combineLists__icon = tools_common__actions.combineLists__button.querySelector(tools_common__actions.#selectors.get("Иконка кнопки"));
    static #createList__icon = tools_common__actions.createList__button.querySelector(tools_common__actions.#selectors.get("Иконка кнопки"));

    static #splitList__description = tools_common__actions.splitList__button.querySelector(tools_common__actions.#selectors.get("Описание кнопки"));
    static #combineLists__description = tools_common__actions.combineLists__button.querySelector(tools_common__actions.#selectors.get("Описание кнопки"));
    static #createList__description = tools_common__actions.createList__button.querySelector(tools_common__actions.#selectors.get("Описание кнопки"));
}