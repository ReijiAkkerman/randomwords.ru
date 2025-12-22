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





    static #animationInstance;
    static #animationDuration = 200;
    static #animationDelay = 200;


    
    static #TIMEOUT_ID__ICON = false;
    static #ICON_SHOWN = true;

    static #TIMEOUT_ID__DESCRIPTION = false;
    static #DESCRIPTION_SHOWN = false;





    /**
     * Анимации при наведении мыши
     */

    static showTip__personalLists() {
        tools_listsControl__group.#hideIcon(tools_listsControl__group.#personalLists__icon);
        tools_listsControl__group.#showDescription(tools_listsControl__group.#personalLists__description);
    }

    static hideTip__personalLists() {
        tools_listsControl__group.#hideDescription(tools_listsControl__group.#personalLists__description);
        tools_listsControl__group.#showIcon(tools_listsControl__group.#personalLists__icon);
    }

    static showTip__friendLists() {
        tools_listsControl__group.#hideIcon(tools_listsControl__group.#friendLists__icon);
        tools_listsControl__group.#showDescription(tools_listsControl__group.#friendLists__description);
    }

    static hideTip__friendLists() {
        tools_listsControl__group.#hideDescription(tools_listsControl__group.#friendLists__description);
        tools_listsControl__group.#showIcon(tools_listsControl__group.#friendLists__icon);
    }

    static showTip__groupLists() {
        tools_listsControl__group.#hideIcon(tools_listsControl__group.#groupLists__icon);
        tools_listsControl__group.#showDescription(tools_listsControl__group.#groupLists__description);
    }

    static hideTip__groupLists() {
        tools_listsControl__group.#hideDescription(tools_listsControl__group.#groupLists__description);
        tools_listsControl__group.#showIcon(tools_listsControl__group.#groupLists__icon);
    }





    static #hideIcon(icon) {
        let animationInfo = [{opacity:0}];
        let timingInfo = {
            duration: tools_listsControl__group.#animationDuration,
            fill: "forwards",
            easing: "ease-in-out",
        };
        tools_listsControl__group.#animationInstance = icon.animate(animationInfo, timingInfo);
        tools_listsControl__group.#TIMEOUT_ID__ICON = setTimeout(() => {
            icon.style.display = "none";
            icon.style.opacity = 0;
            tools_listsControl__group.#SET_STATUS__ICON_HIDDEN();
        }, tools_listsControl__group.#animationDelay);
    }

    static #showIcon(icon) {
        let animationInfo = [{opacity:1}];
        let timingInfo = {
            duration: tools_listsControl__group.#animationDuration,
            fill: "forwards",
            easing: "ease-in-out",
        };
        if(tools_listsControl__group.#ICON_SHOWN === false) {
            icon.style.display = "";
            icon.animate(animationInfo, timingInfo);
            icon.style.opacity = 1;
            tools_listsControl__group.#SET_STATUS__ICON_SHOWN();
        }
        else {
            tools_listsControl__group.#animationInstance.reverse();
            tools_listsControl__group.#DECLINE_ICON_SHOWING();
        }
    }

    static #showDescription(description) {
        let animationInfo = [
            {opacity:1},
            {opacity:0},
            {opacity:1},
        ];
        let timingInfo = {
            duration: 120,
            fill: "forwards",
            easing: "steps(2, end)",
        };
        tools_listsControl__group.#TIMEOUT_ID__DESCRIPTION = setTimeout(() => {
            description.style.display = "";
            description.animate(animationInfo, timingInfo);
            tools_listsControl__group.#SET_STATUS__DESCRIPTION_SHOWN();
        }, tools_listsControl__group.#animationDelay);
    }

    static #hideDescription(description) {
        if(tools_listsControl__group.#DESCRIPTION_SHOWN === true) {
            description.style.display = "none";
            tools_listsControl__group.#SET_STATUS__DESCRIPTION_HIDDEN();
        }
        else 
            tools_listsControl__group.#DECLINE_DESCRIPTION_SHOWING();
    }





    static #SET_STATUS__ICON_HIDDEN() {
        tools_listsControl__group.#ICON_SHOWN = false;
    }

    static #SET_STATUS__ICON_SHOWN() {
        tools_listsControl__group.#ICON_SHOWN = true;
    }

    static #SET_STATUS__DESCRIPTION_SHOWN() {
        tools_listsControl__group.#DESCRIPTION_SHOWN = true;
    }

    static #SET_STATUS__DESCRIPTION_HIDDEN() {
        tools_listsControl__group.#DESCRIPTION_SHOWN = false;
    }

    static #DECLINE_ICON_SHOWING() {
        clearTimeout(tools_listsControl__group.#TIMEOUT_ID__ICON);
    }

    static #DECLINE_DESCRIPTION_SHOWING() {
        clearTimeout(tools_listsControl__group.#TIMEOUT_ID__DESCRIPTION);
    }





    /**
     * Переключение режима группирования по клику
     */

    
}

document.addEventListener("DOMContentLoaded", function() {
    tools_listsControl__group.personalLists__button.addEventListener("mouseenter", tools_listsControl__group.showTip__personalLists);
    tools_listsControl__group.personalLists__button.addEventListener("mouseleave", tools_listsControl__group.hideTip__personalLists);
    tools_listsControl__group.friendLists__button.addEventListener("mouseenter", tools_listsControl__group.showTip__friendLists);
    tools_listsControl__group.friendLists__button.addEventListener("mouseleave", tools_listsControl__group.hideTip__friendLists);
    tools_listsControl__group.groupLists__button.addEventListener("mouseenter", tools_listsControl__group.showTip__groupLists);
    tools_listsControl__group.groupLists__button.addEventListener("mouseleave", tools_listsControl__group.hideTip__groupLists);
});