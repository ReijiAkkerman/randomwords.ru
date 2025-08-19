class tools_listsControl__group {
    static #selectors = new Map([
        ["Область кнопок списков", ".tools-listsControl-group"],

        ["Кнопка личных списков", ".tools__button_personalLists"],
        ["Кнопка списков друзей", ".tools__button_friendLists"],
        ["Кнопка групповых списков", ".tools__button_groupLists"],

        ["Иконка кнопки списков", ".tools-listsControl-group__svg"],
        ["Описание кнопки списков", ".tools-listsControl-group__p"],
    ]);





    static listsControl__group = document.querySelector(tools_listsControl__group.#selectors.get("Область кнопок списков"));

    static personalLists__button = document.querySelector(tools_listsControl__group.#selectors.get("Кнопка личных списков"));
    static friendLists__button = document.querySelector(tools_listsControl__group.#selectors.get("Кнопка списков друзей"));
    static groupLists__button = document.querySelector(tools_listsControl__group.#selectors.get("Кнопка групповых списков"));

    static #personalLists__icon = tools_listsControl__group.personalLists__button.querySelector(tools_listsControl__group.#selectors.get("Иконка кнопки списков"));
    static #friendLists__icon = tools_listsControl__group.friendLists__button.querySelector(tools_listsControl__group.#selectors.get("Иконка кнопки списков"));
    static #groupLists__icon = tools_listsControl__group.groupLists__button.querySelector(tools_listsControl__group.#selectors.get("Иконка кнопки списков"));

    static #personalLists__description = tools_listsControl__group.personalLists__button.querySelector(tools_listsControl__group.#selectors.get("Описание кнопки списков"));
    static #friendLists__description = tools_listsControl__group.friendLists__button.querySelector(tools_listsControl__group.#selectors.get("Описание кнопки списков"));
    static #groupLists__description = tools_listsControl__group.groupLists__button.querySelector(tools_listsControl__group.#selectors.get("Описание кнопки списков"));

    



    static showMeaningOfButton__personalLists() {
        tools_listsControl__group.#personalLists__icon.style.display = "none";
        tools_listsControl__group.friendLists__button.style.width = 
        tools_listsControl__group.groupLists__button.style.width = "fit-content";
        tools_listsControl__group.personalLists__button.style.width = "100%";
        tools_listsControl__group.#personalLists__description.style.display = "";
    }

    static showMeaningOfButton__friendLists() {
        tools_listsControl__group.#friendLists__icon.style.display = "none";
        tools_listsControl__group.personalLists__button.style.width = 
        tools_listsControl__group.groupLists__button.style.width = "fit-content";
        tools_listsControl__group.friendLists__button.style.width = "100%";
        tools_listsControl__group.#friendLists__description.style.display = "";
    }

    static showMeaningOfButton__groupLists() {
        tools_listsControl__group.#groupLists__icon.style.display = "none";
        tools_listsControl__group.personalLists__button.style.width = 
        tools_listsControl__group.friendLists__button.style.width = "fit-content";
        tools_listsControl__group.groupLists__button.style.width = "100%";
        tools_listsControl__group.#groupLists__description.style.display = "";
    }





    static hideMeaningOfButton__personalLists() {
        tools_listsControl__group.#personalLists__description.style.display = "none";
        tools_listsControl__group.#personalLists__icon.style.display = "";
    }

    static hideMeaningOfButton__friendLists() {
        tools_listsControl__group.#friendLists__description.style.display = "none";
        tools_listsControl__group.#friendLists__icon.style.display = "";
    }

    static hideMeaningOfButton__groupLists() {
        tools_listsControl__group.#groupLists__description.style.display = "none";
        tools_listsControl__group.#groupLists__icon.style.display = "";
    }





    static setDefaultButtonsWidth() {
        tools_listsControl__group.friendLists__button.style.width = 
        tools_listsControl__group.groupLists__button.style.width = 
        tools_listsControl__group.personalLists__button.style.width = "100%";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    tools_listsControl__group.listsControl__group.addEventListener("mouseout", tools_listsControl__group.setDefaultButtonsWidth);

    tools_listsControl__group.personalLists__button.addEventListener("mouseover", tools_listsControl__group.showMeaningOfButton__personalLists);
    tools_listsControl__group.friendLists__button.addEventListener("mouseover", tools_listsControl__group.showMeaningOfButton__friendLists);
    tools_listsControl__group.groupLists__button.addEventListener("mouseover", tools_listsControl__group.showMeaningOfButton__groupLists);

    tools_listsControl__group.personalLists__button.addEventListener("mouseout", tools_listsControl__group.hideMeaningOfButton__personalLists);
    tools_listsControl__group.friendLists__button.addEventListener("mouseout", tools_listsControl__group.hideMeaningOfButton__friendLists);
    tools_listsControl__group.groupLists__button.addEventListener("mouseout", tools_listsControl__group.hideMeaningOfButton__groupLists);
});