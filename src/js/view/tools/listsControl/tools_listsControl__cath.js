class tools_listsControl__cath {
    static #selectors = new Map([
        ["Левая кнопка", ".tools-listsControl-cath_leftButton"],
        ["Правая кнопка", ".tools-listsControl-cath_rightButton"],

        ["Иконка кнопки", ".tools-listsControl-cath__svg"],
        ["Текст кнопки", ".tools-listsControl-cath__pre"],
    ]);





    static left__button = document.querySelector(tools_listsControl__cath.#selectors.get("Левая кнопка"));
    static right__button = document.querySelector(tools_listsControl__cath.#selectors.get("Правая кнопка"));

    static #switchToGroup__icon = tools_listsControl__cath.left__button.querySelector(tools_listsControl__cath.#selectors.get("Иконка кнопки"));
    static #switchToCathegory__icon = tools_listsControl__cath.right__button.querySelector(tools_listsControl__cath.#selectors.get("Иконка кнопки"));
    static #selectGroup__text = tools_listsControl__cath.left__button.querySelector(tools_listsControl__cath.#selectors.get("Текст кнопки"));
    static #selectCathegory__text = tools_listsControl__cath.right__button.querySelector(tools_listsControl__cath.#selectors.get("Текст кнопки"));





    static #transitionDuration = 200;
    static #blinkingDuration = 120;
    static #secondElementDelay = 150;





    static switchToGroup() {
        tools_listsControl__cath.#cathegory_hideText();
        tools_listsControl__cath.#setProportionsForGroup();
        tools_listsControl__cath.#cathegory_hideIcon();
        tools_listsControl__cath.#group_showText();
        tools_listsControl__cath.#group_showIcon();
    }

    static switchToCathegory() {
        tools_listsControl__cath.#group_hideText();
        tools_listsControl__cath.#setProportionsForCathegory();
        tools_listsControl__cath.#group_hideIcon();
        tools_listsControl__cath.#cathegory_showIcon();
        tools_listsControl__cath.#cathegory_showText();
    }





    static #group_hideIcon() {
        tools_listsControl__cath.#hideIcon(tools_listsControl__cath.#switchToCathegory__icon);
    }

    static #group_showIcon() {
        tools_listsControl__cath.#showIcon(tools_listsControl__cath.#switchToCathegory__icon, tools_listsControl__cath.#secondElementDelay);
    }

    static #group_hideText() {
        tools_listsControl__cath.#hideText(tools_listsControl__cath.#selectGroup__text);
    }

    static #group_showText() {
        tools_listsControl__cath.#showText(tools_listsControl__cath.#selectGroup__text);
    }



    static #cathegory_hideIcon() {
        tools_listsControl__cath.#hideIcon(tools_listsControl__cath.#switchToGroup__icon);
    }

    static #cathegory_showIcon() {
        tools_listsControl__cath.#showIcon(tools_listsControl__cath.#switchToGroup__icon);
    }

    static #cathegory_hideText() {
        tools_listsControl__cath.#hideText(tools_listsControl__cath.#selectCathegory__text);
    }

    static #cathegory_showText() {
        tools_listsControl__cath.#showText(tools_listsControl__cath.#selectCathegory__text, tools_listsControl__cath.#secondElementDelay);
    }



    static #hideIcon(icon) {
        let animationInfo = [{opacity:0}];
        let timingInfo = {
            duration: tools_listsControl__cath.#transitionDuration,
            fill: "forwards",
            easing: "ease-in-out",
        };
        icon.animate(animationInfo, timingInfo);
        setTimeout(() => {
            icon.style.opacity = 0;
            icon.style.display = "none";
        }, tools_listsControl__cath.#transitionDuration);
    }

    static #showIcon(icon, secondElementDelay = 0) {
        let animationInfo = [
            {opacity:1},
            {opacity:0},
            {opacity:1},
        ]
        let timingInfo = {
            duration: tools_listsControl__cath.#blinkingDuration,
            fill: "forwards",
            easing: "steps(2, end)",
        };
        let duration = tools_listsControl__cath.#transitionDuration + secondElementDelay;
        setTimeout(() => {
            icon.style.display = "";
            icon.animate(animationInfo, timingInfo);
            icon.style.opacity = 1;
        }, duration);
    }

    static #hideText(text) {
        text.style.display = "none";
        text.style.opacity = 0;
    }

    static #showText(text, secondElementDelay = 0) {
        let animationInfo = [
            {opacity:1},
            {opacity:0},
            {opacity:1},
        ]
        let timingInfo = {
            duration: tools_listsControl__cath.#blinkingDuration,
            fill: "forwards",
            easing: "steps(2, end)",
        };
        let duration = tools_listsControl__cath.#transitionDuration + secondElementDelay;
        setTimeout(() => {
            text.style.display = "";
            text.animate(animationInfo, timingInfo);
            text.style.opacity = 1;
        }, duration);
    }



    static #setProportionsForGroup() {
        let animationInfo = [{width:"20%"}];
        let timingInfo = {
            duration: tools_listsControl__cath.#transitionDuration,
            fill: "forwards",
            easing: "ease-in-out",
        };
        tools_listsControl__cath.right__button.animate(animationInfo, timingInfo);
    }

    static #setProportionsForCathegory() {
        let animationInfo = [{width:"500%"}];
        let timingInfo = {
            duration: tools_listsControl__cath.#transitionDuration,
            fill: "forwards",
            easing: "ease-in-out",
        };
        tools_listsControl__cath.right__button.animate(animationInfo, timingInfo);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    tools_listsControl__cath.right__button.addEventListener("click", tools_listsControl__cath.switchToCathegory);
    tools_listsControl__cath.left__button.addEventListener("click", tools_listsControl__cath.switchToGroup);
});