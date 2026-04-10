/**
 * Отсутствует проверка CSS свойств в HTML, 
 * скрипт работать будет правильно до момента пока силами JS не будут 
 * изменены CSS переменные через аттрибут style
 * 
 * !!! При написании скриптов для изменения темы сайта исправить!!! 
 */

class tools_groupSelectionArea {
    static #selectors = new Map([
        ["Пункт категории", ".tools-groupSelectionArea-cathegoryItem"],
        ["Кнопка перетаскивания", ".tools__button_drag"],
        ["Наименование пункта категории", ".tools-groupSelectionArea-cathegoryItem__pre"],
        ["Показатель вложенности пункта категории", ".tools-groupSelectionArea-cathegoryItem__p"],
    ]);





    static cathegoryItem__buttons = document.querySelectorAll(tools_groupSelectionArea.#selectors.get("Пункт категории"));
    static dragButton__buttons = document.querySelectorAll(tools_groupSelectionArea.#selectors.get("Кнопка перетаскивания"));





    static #cathegoryItem__button;
    static #cathegoryItem_name;
    static #cathegoryItem_nestingMark;



    /**
     * CSS-переменные
     */

    static #__inactive_borderColor;
    static #__inactive_textColor;



    static #DRAGGING_STARTED = false;





    static defineHighlightedItem() {
        tools_groupSelectionArea.#cathegoryItem__button = this;
        tools_groupSelectionArea.#cathegoryItem_name = this.querySelector(tools_groupSelectionArea.#selectors.get("Наименование пункта категории"));
        tools_groupSelectionArea.#cathegoryItem_nestingMark = this.querySelector(tools_groupSelectionArea.#selectors.get("Показатель вложенности пункта категории"));
    }

    static unsetHighlighting() {
        tools_groupSelectionArea.#setDefaultBorderColor();
        tools_groupSelectionArea.#setDefaultTextColor();
        tools_groupSelectionArea.#START_DRAGGING();
    }

    static revertHighlighting() {
        if(tools_groupSelectionArea.#DRAGGING_STARTED === true) {
            tools_groupSelectionArea.#unsetDefaultBorderColor();
            tools_groupSelectionArea.#unsetDefaultTextColor();
            tools_groupSelectionArea.#STOP_DRAGGING();
        }
    }





    static getCSSBorderColorValue() {
        tools_groupSelectionArea.#__inactive_borderColor = getComputedStyle(document.body).getPropertyValue("--inactive-color");
    }

    static getCSSTextColorValue() {
        tools_groupSelectionArea.#__inactive_textColor = getComputedStyle(document.body).getPropertyValue("--inactive-cathegoryItem-color");
    }

    static #setDefaultBorderColor() {
        tools_groupSelectionArea.#cathegoryItem__button.style.borderColor = tools_groupSelectionArea.#__inactive_borderColor;
    }

    static #setDefaultTextColor() {
        tools_groupSelectionArea.#cathegoryItem_name.style.color = 
        tools_groupSelectionArea.#cathegoryItem_nestingMark.style.color = tools_groupSelectionArea.#__inactive_textColor;
    }

    static #unsetDefaultBorderColor() {
        tools_groupSelectionArea.#cathegoryItem__button.style.borderColor = "";
    }

    static #unsetDefaultTextColor() {
        tools_groupSelectionArea.#cathegoryItem_name.style.color = 
        tools_groupSelectionArea.#cathegoryItem_nestingMark.style.color = "";
    }

    static #START_DRAGGING() {
        tools_groupSelectionArea.#DRAGGING_STARTED = true;
    }

    static #STOP_DRAGGING() {
        tools_groupSelectionArea.#DRAGGING_STARTED = false;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    tools_groupSelectionArea.getCSSBorderColorValue();
    tools_groupSelectionArea.getCSSTextColorValue();
    tools_groupSelectionArea.cathegoryItem__buttons.forEach(element => {element.addEventListener("mouseenter", tools_groupSelectionArea.defineHighlightedItem)});
    tools_groupSelectionArea.dragButton__buttons.forEach(element => {element.addEventListener("mousedown", tools_groupSelectionArea.unsetHighlighting)});
    document.addEventListener("mouseup", tools_groupSelectionArea.revertHighlighting);
});