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





    static #animationInstance;
    static #animationDuration = 200;
    static #animationDelay = 200;
    static #timingInfo = {
        duration: 80,
        fill: "forwards",
        easing: "steps(2, end)",
    };


    
    static #TIMEOUT_ID__ICON = false;
    static #ICON_SHOWN = true;

    static #TIMEOUT_ID__DESCRIPTION = false;
    static #DESCRIPTION_SHOWN = false;





    static showTip__splitList() {
        tools_common__actions.#hideIcon(tools_common__actions.#splitList__icon);
        tools_common__actions.#showDescription(tools_common__actions.#splitList__description);
    }

    static hideTip__splitList() {
        tools_common__actions.#hideDescription(tools_common__actions.#splitList__description);
        tools_common__actions.#showIcon(tools_common__actions.#splitList__icon);
    }

    static showTip__combineLists() {
        tools_common__actions.#hideIcon(tools_common__actions.#combineLists__icon);
        tools_common__actions.#showDescription(tools_common__actions.#combineLists__description);
    }

    static hideTip__combineLists() {
        tools_common__actions.#hideDescription(tools_common__actions.#combineLists__description);
        tools_common__actions.#showIcon(tools_common__actions.#combineLists__icon);
    }

    static showTip__createList() {
        tools_common__actions.#hideIcon(tools_common__actions.#createList__icon);
        tools_common__actions.#showDescription(tools_common__actions.#createList__description);
    }

    static hideTip__createList() {
        tools_common__actions.#hideDescription(tools_common__actions.#createList__description);
        tools_common__actions.#showIcon(tools_common__actions.#createList__icon);
    }





    static #hideIcon(icon) {
        let animationInfo = [{opacity:0}];
        let timingInfo = {
            duration: tools_common__actions.#animationDuration,
            fill: "forwards",
            easing: "ease-in-out",
        };
        tools_common__actions.#animationInstance = icon.animate(animationInfo, timingInfo);
        tools_common__actions.#TIMEOUT_ID__ICON = setTimeout(() => {
            icon.style.display = "none";
            icon.style.opacity = 0;
            tools_common__actions.#SET_STATUS__ICON_HIDDEN();
        }, tools_common__actions.#animationDelay);
    }

    static #showIcon(icon) {
        let animationInfo = [{opacity:1}];
        let timingInfo = {
            duration: tools_common__actions.#animationDuration,
            fill: "forwards",
            easing: "ease-in-out",
        };
        if(tools_common__actions.#ICON_SHOWN === false) {
            icon.style.display = "";
            icon.animate(animationInfo, timingInfo);
            icon.style.opacity = 1;
            tools_common__actions.#SET_STATUS__ICON_SHOWN();
        }
        else {
            tools_common__actions.#animationInstance.reverse();
            tools_common__actions.#DECLINE_ICON_SHOWING();
        }
    }





    static #showDescription(description) {
        let animationInfo = [
            {opacity:1},
            {opacity:0},
            {opacity:1},
        ];
        let timingInfo = {
            duration: 80,
            fill: "forwards",
            easing: "steps(2, end)",
        };
        tools_common__actions.#TIMEOUT_ID__DESCRIPTION = setTimeout(() => {
            description.style.display = "";
            description.animate(animationInfo, timingInfo);
            tools_common__actions.#SET_STATUS__DESCRIPTION_SHOWN();
        }, tools_common__actions.#animationDelay);
    }

    static #hideDescription(description) {
        if(tools_common__actions.#DESCRIPTION_SHOWN === true) {
            description.style.display = "none";
            tools_common__actions.#SET_STATUS__DESCRIPTION_HIDDEN();
        }
        else 
            tools_common__actions.#DECLINE_DESCRIPTION_SHOWING();
    }





    // Изменение статус-переменных

    static #SET_STATUS__ICON_SHOWN() {
        tools_common__actions.#ICON_SHOWN = true;
    }

    static #SET_STATUS__ICON_HIDDEN() {
        tools_common__actions.#ICON_SHOWN = false;
    }

    static #SET_STATUS__DESCRIPTION_SHOWN() {
        tools_common__actions.#DESCRIPTION_SHOWN = true;
    }

    static #SET_STATUS__DESCRIPTION_HIDDEN() {
        tools_common__actions.#DESCRIPTION_SHOWN = false;
    }

    static #DECLINE_ICON_SHOWING() {
        clearTimeout(tools_common__actions.#TIMEOUT_ID__ICON);
    }

    static #DECLINE_DESCRIPTION_SHOWING() {
        clearTimeout(tools_common__actions.#TIMEOUT_ID__DESCRIPTION);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    tools_common__actions.splitList__button.addEventListener("mouseenter", tools_common__actions.showTip__splitList);
    tools_common__actions.splitList__button.addEventListener("mouseleave", tools_common__actions.hideTip__splitList);
    tools_common__actions.combineLists__button.addEventListener("mouseenter", tools_common__actions.showTip__combineLists);
    tools_common__actions.combineLists__button.addEventListener("mouseleave", tools_common__actions.hideTip__combineLists);
    tools_common__actions.createList__button.addEventListener("mouseenter", tools_common__actions.showTip__createList);
    tools_common__actions.createList__button.addEventListener("mouseleave", tools_common__actions.hideTip__createList);
});