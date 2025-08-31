class tools_listsControl__group {
    static #selectors = new Map([
        ["Кнопка личных списков", ".tools__button_personalLists"],
        ["Кнопка списков друзей", ".tools__button_friendLists"],
        ["Кнопка групповых списков", ".tools__button_groupLists"],

        ["Иконка кнопки", ".tools-listsControl-group__svg"],
        ["Описание кнопки", ".tools-listsControl-group__pre"],
    ]);





    static personalLists__button = document.querySelector(tools_listsControl__group.#selectors.get("Кнопка личных списков"));
    static friendLists__button = document.querySelector(tools_listsControl__group.#selectors.get("Кнопка списков друзей"));
    static groupLists__button = document.querySelector(tools_listsControl__group.#selectors.get("Кнопка групповых списков"));

    static #personalLists__icon = tools_listsControl__group.personalLists__button.querySelector(tools_listsControl__group.#selectors.get("Иконка кнопки"));
    static #friendLists__icon = tools_listsControl__group.friendLists__button.querySelector(tools_listsControl__group.#selectors.get("Иконка кнопки"));
    static #groupLists__icon = tools_listsControl__group.groupLists__button.querySelector(tools_listsControl__group.#selectors.get("Иконка кнопки"));

    static #personalLists__description = tools_listsControl__group.personalLists__button.querySelector(tools_listsControl__group.#selectors.get("Описание кнопки"));
    static #friendLists__description = tools_listsControl__group.friendLists__button.querySelector(tools_listsControl__group.#selectors.get("Описание кнопки"));
    static #groupLists__description = tools_listsControl__group.groupLists__button.querySelector(tools_listsControl__group.#selectors.get("Описание кнопки"));





    //
}