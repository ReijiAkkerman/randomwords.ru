class listsControl__group {
    static #selectors = new Map([
        ["Область кнопок списков", ".tools-listsControl-group"],

        ["Кнопка личных списков", ".tools-listsControl-group__button_personalLists"],
        ["Кнопка списков друзей", ".tools-listsControl-group__button_friendLists"],
        ["Кнопка групповых списков", ".tools-listsControl-group__button_groupLists"],

        ["Иконка кнопки списков", ".tools-listsControl-group__svg"],
        ["Описание кнопки списков", ".tools-listsControl-group__p"],
    ]);





    static listsControl__group = document.querySelector(listsControl__group.#selectors.get("Область кнопок списков"));

    static personalLists__button = document.querySelector(listsControl__group.#selectors.get("Кнопка личных списков"));
    static friendLists__button = document.querySelector(listsControl__group.#selectors.get("Кнопка списков друзей"));
    static groupLists__button = document.querySelector(listsControl__group.#selectors.get("Кнопка групповых списков"));

    static #personalLists__icon = listsControl__group.personalLists__button.querySelector(listsControl__group.#selectors.get("Иконка кнопки списков"));
    static #friendLists__icon = listsControl__group.friendLists__button.querySelector(listsControl__group.#selectors.get("Иконка кнопки списков"));
    static #groupLists__icon = listsControl__group.groupLists__button.querySelector(listsControl__group.#selectors.get("Иконка кнопки списков"));

    static #personalLists__description = listsControl__group.personalLists__button.querySelector(listsControl__group.#selectors.get("Описание кнопки списков"));
    static #friendLists__description = listsControl__group.friendLists__button.querySelector(listsControl__group.#selectors.get("Описание кнопки списков"));
    static #groupLists__description = listsControl__group.groupLists__button.querySelector(listsControl__group.#selectors.get("Описание кнопки списков"));




    static showMeaningOfButton__personalLists() {
        listsControl__group.#personalLists__icon.style.display = "none";
        listsControl__group.friendLists__button.style.width = 
        listsControl__group.groupLists__button.style.width = "fit-content";
        listsControl__group.personalLists__button.style.width = "100%";
        listsControl__group.#personalLists__description.style.display = "";
    }

    static showMeaningOfButton__friendLists() {
        listsControl__group.#friendLists__icon.style.display = "none";
        listsControl__group.personalLists__button.style.width = 
        listsControl__group.groupLists__button.style.width = "fit-content";
        listsControl__group.friendLists__button.style.width = "100%";
        listsControl__group.#friendLists__description.style.display = "";
    }

    static showMeaningOfButton__groupLists() {
        listsControl__group.#groupLists__icon.style.display = "none";
        listsControl__group.personalLists__button.style.width = 
        listsControl__group.friendLists__button.style.width = "fit-content";
        listsControl__group.groupLists__button.style.width = "100%";
        listsControl__group.#groupLists__description.style.display = "";
    }




    static hideMeaningOfButton__personalLists() {
        listsControl__group.#personalLists__description.style.display = "none";
        listsControl__group.#personalLists__icon.style.display = "";
    }

    static hideMeaningOfButton__friendLists() {
        listsControl__group.#friendLists__description.style.display = "none";
        listsControl__group.#friendLists__icon.style.display = "";
    }

    static hideMeaningOfButton__groupLists() {
        listsControl__group.#groupLists__description.style.display = "none";
        listsControl__group.#groupLists__icon.style.display = "";
    }





    static setDefaultButtonsWidth() {
        listsControl__group.friendLists__button.style.width = 
        listsControl__group.groupLists__button.style.width = 
        listsControl__group.personalLists__button.style.width = "100%";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    listsControl__group.listsControl__group.addEventListener("mouseout", listsControl__group.setDefaultButtonsWidth);

    listsControl__group.personalLists__button.addEventListener("mouseover", listsControl__group.showMeaningOfButton__personalLists);
    listsControl__group.friendLists__button.addEventListener("mouseover", listsControl__group.showMeaningOfButton__friendLists);
    listsControl__group.groupLists__button.addEventListener("mouseover", listsControl__group.showMeaningOfButton__groupLists);

    listsControl__group.personalLists__button.addEventListener("mouseout", listsControl__group.hideMeaningOfButton__personalLists);
    listsControl__group.friendLists__button.addEventListener("mouseout", listsControl__group.hideMeaningOfButton__friendLists);
    listsControl__group.groupLists__button.addEventListener("mouseout", listsControl__group.hideMeaningOfButton__groupLists);
});