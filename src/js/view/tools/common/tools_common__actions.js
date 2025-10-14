class tools_common__actions {
    static #selectors = new Map([
        // NEXT
        ["Кнопка разделения списка", ".tools__button_splitList"],
        ["Кнопка объединения списков", ".tools__button_combineLists"],
        ["Кнопка создания нового списка", ".tools__button_createList"],
        ["Кнопка переключения на более используемые действия", ".tools__button_next"],
        // BACK
        ["Кнопка переключения на менее используемые действия", ".tools__button_back"],
        ["Кнопка удаления списка", ".tools__button_deleteList"],
        ["Кнопка поделиться списком", ".tools__button_shareList"],
        ["Кнопка изменения списка", ".tools__button_editList"],

        ["Иконка кнопки", ".tools-common__svg"],
        ["Описание кнопки", ".tools-common__pre"],
    ]);





    // NEXT

    static splitList__button = document.querySelector(tools_common__actions.#selectors.get("Кнопка разделения списка"));
    static combineLists__button = document.querySelector(tools_common__actions.#selectors.get("Кнопка объединения списков"));
    static createList__button = document.querySelector(tools_common__actions.#selectors.get("Кнопка создания нового списка"));
    static next__button = document.querySelector(tools_common__actions.#selectors.get("Кнопка переключения на более используемые действия"));

    static #splitList__icon = tools_common__actions.splitList__button.querySelector(tools_common__actions.#selectors.get("Иконка кнопки"));
    static #combineLists__icon = tools_common__actions.combineLists__button.querySelector(tools_common__actions.#selectors.get("Иконка кнопки"));
    static #createList__icon = tools_common__actions.createList__button.querySelector(tools_common__actions.#selectors.get("Иконка кнопки"));
    static #next__icon = tools_common__actions.next__button.querySelector(tools_common__actions.#selectors.get("Иконка кнопки"));

    static #splitList__description = tools_common__actions.splitList__button.querySelector(tools_common__actions.#selectors.get("Описание кнопки"));
    static #combineLists__description = tools_common__actions.combineLists__button.querySelector(tools_common__actions.#selectors.get("Описание кнопки"));
    static #createList__description = tools_common__actions.createList__button.querySelector(tools_common__actions.#selectors.get("Описание кнопки"));

    // BACK

    static back__button = document.querySelector(tools_common__actions.#selectors.get("Кнопка переключения на менее используемые действия"));
    static deleteList__button = document.querySelector(tools_common__actions.#selectors.get("Кнопка удаления списка"));
    static shareList__button = document.querySelector(tools_common__actions.#selectors.get("Кнопка поделиться списком"));
    static editList__button = document.querySelector(tools_common__actions.#selectors.get("Кнопка изменения списка"));

    static #back__icon = tools_common__actions.back__button.querySelector(tools_common__actions.#selectors.get("Иконка кнопки"));
    static #deleteList__icon = tools_common__actions.deleteList__button.querySelector(tools_common__actions.#selectors.get("Иконка кнопки"));
    static #shareList__icon = tools_common__actions.shareList__button.querySelector(tools_common__actions.#selectors.get("Иконка кнопки"));
    static #editList__icon = tools_common__actions.editList__button.querySelector(tools_common__actions.#selectors.get("Иконка кнопки"));

    static #deleteList__description = tools_common__actions.deleteList__button.querySelector(tools_common__actions.#selectors.get("Описание кнопки"));
    static #shareList__description = tools_common__actions.shareList__button.querySelector(tools_common__actions.#selectors.get("Описание кнопки"));
    static #editList__description = tools_common__actions.editList__button.querySelector(tools_common__actions.#selectors.get("Описание кнопки"));





    static #animationInstance;
    static #animationDuration = 200;
    static #animationDelay = 200;


    
    static #TIMEOUT_ID__ICON = false;
    static #ICON_SHOWN = true;

    static #TIMEOUT_ID__DESCRIPTION = false;
    static #DESCRIPTION_SHOWN = false;





    // NEXT

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

    static animateNextButton() {
        tools_common__actions.#animateIcon(tools_common__actions.#next__icon);
    }





    // BACK

    static animateBackButton() {
        tools_common__actions.#animateIcon(tools_common__actions.#back__icon);
    }

    static showTip__deleteList() {
        tools_common__actions.#hideIcon(tools_common__actions.#deleteList__icon);
        tools_common__actions.#showDescription(tools_common__actions.#deleteList__description);
    }

    static hideTip__deleteList() {
        tools_common__actions.#hideDescription(tools_common__actions.#deleteList__description);
        tools_common__actions.#showIcon(tools_common__actions.#deleteList__icon);
    }

    static showTip__shareList() {
        tools_common__actions.#hideIcon(tools_common__actions.#shareList__icon);
        tools_common__actions.#showDescription(tools_common__actions.#shareList__description);
    }

    static hideTip__shareList() {
        tools_common__actions.#hideDescription(tools_common__actions.#shareList__description);
        tools_common__actions.#showIcon(tools_common__actions.#shareList__icon);
    }

    static showTip__editList() {
        tools_common__actions.#hideIcon(tools_common__actions.#editList__icon);
        tools_common__actions.#showDescription(tools_common__actions.#editList__description);
    }

    static hideTip__editList() {
        tools_common__actions.#hideDescription(tools_common__actions.#editList__description);
        tools_common__actions.#showIcon(tools_common__actions.#editList__icon);
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

    static #animateIcon(icon) {
        let animationInfo = [
            {opacity:0},
            {opacity:1},
            {opacity:0},
            {opacity:1},
        ];
        let timingInfo = {
            duration: 180,
            fill: "forwards",
            easing: "steps(3, end)",
        };
        icon.animate(animationInfo, timingInfo);
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
    // NEXT
    tools_common__actions.splitList__button.addEventListener("mouseenter", tools_common__actions.showTip__splitList);
    tools_common__actions.splitList__button.addEventListener("mouseleave", tools_common__actions.hideTip__splitList);
    tools_common__actions.combineLists__button.addEventListener("mouseenter", tools_common__actions.showTip__combineLists);
    tools_common__actions.combineLists__button.addEventListener("mouseleave", tools_common__actions.hideTip__combineLists);
    tools_common__actions.createList__button.addEventListener("mouseenter", tools_common__actions.showTip__createList);
    tools_common__actions.createList__button.addEventListener("mouseleave", tools_common__actions.hideTip__createList);
    tools_common__actions.next__button.addEventListener("mouseenter", tools_common__actions.animateNextButton);
    // BACK
    tools_common__actions.back__button.addEventListener("mouseenter", tools_common__actions.animateBackButton);
    tools_common__actions.deleteList__button.addEventListener("mouseenter", tools_common__actions.showTip__deleteList);
    tools_common__actions.deleteList__button.addEventListener("mouseleave", tools_common__actions.hideTip__deleteList);
    tools_common__actions.shareList__button.addEventListener("mouseenter", tools_common__actions.showTip__shareList);
    tools_common__actions.shareList__button.addEventListener("mouseleave", tools_common__actions.hideTip__shareList);
    tools_common__actions.editList__button.addEventListener("mouseenter", tools_common__actions.showTip__editList);
    tools_common__actions.editList__button.addEventListener("mouseleave", tools_common__actions.hideTip__editList);
});