/**
 * Отсутствует проверка CSS свойств в HTML, 
 * скрипт работать будет правильно до момента пока силами JS не будут 
 * изменены CSS переменные через аттрибут style
 * 
 * !!! При написании скриптов для изменения темы сайта исправить!!! 
 */

class tools_selectionArea {
    static #selectors = new Map([
        ["Пункт категории", ".tools-selectionArea-cathegoryItem"],
        ["Кнопка перетаскивания", ".tools__button_drag"],
        ["Наименование пункта категории", ".tools-selectionArea-cathegoryItem__pre"],
        ["Показатель вложенности пункта категории", ".tools-selectionArea-cathegoryItem__p"],
    ]);





    static cathegoryItem__buttons = document.querySelectorAll(tools_selectionArea.#selectors.get("Пункт категории"));
    static dragButton__buttons = document.querySelectorAll(tools_selectionArea.#selectors.get("Кнопка перетаскивания"));





    static #cathegoryItem__button;
    static #cathegoryItem_name;
    static #cathegoryItem_nestingMark;



    static #__inactive_borderColor;
    static #__inactive_textColor;





    static defineHighlightedItem() {
        tools_selectionArea.#cathegoryItem__button = this;
        tools_selectionArea.#cathegoryItem_name = this.querySelector(tools_selectionArea.#selectors.get("Наименование пункта категории"));
        tools_selectionArea.#cathegoryItem_nestingMark = this.querySelector(tools_selectionArea.#selectors.get("Показатель вложенности пункта категории"));
    }

    static unsetHighlighting() {
        tools_selectionArea.#setDefaultBorderColor();
        tools_selectionArea.#setDefaultTextColor();
    }

    static revertHighlighting() {
        tools_selectionArea.#unsetDefaultBorderColor();
        tools_selectionArea.#unsetDefaultTextColor();
    }





    static getCSSBorderColorValue() {
        tools_selectionArea.#__inactive_borderColor = getComputedStyle(document.body).getPropertyValue("--inactive-color");
    }

    static getCSSTextColorValue() {
        tools_selectionArea.#__inactive_textColor = getComputedStyle(document.body).getPropertyValue("--inactive-cathegoryItem-color");
    }

    static #setDefaultBorderColor() {
        tools_selectionArea.#cathegoryItem__button.style.borderColor = tools_selectionArea.#__inactive_borderColor;
    }

    static #setDefaultTextColor() {
        tools_selectionArea.#cathegoryItem_name.style.color = 
        tools_selectionArea.#cathegoryItem_nestingMark.style.color = tools_selectionArea.#__inactive_textColor;
    }

    static #unsetDefaultBorderColor() {
        tools_selectionArea.#cathegoryItem__button.style.borderColor = "";
    }

    static #unsetDefaultTextColor() {
        tools_selectionArea.#cathegoryItem_name.style.color = 
        tools_selectionArea.#cathegoryItem_nestingMark.style.color = "";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    tools_selectionArea.getCSSBorderColorValue();
    tools_selectionArea.getCSSTextColorValue();
    tools_selectionArea.cathegoryItem__buttons.forEach(element => {element.addEventListener("mouseenter", tools_selectionArea.defineHighlightedItem)});
    tools_selectionArea.dragButton__buttons.forEach(element => {element.addEventListener("mousedown", tools_selectionArea.unsetHighlighting)});
    tools_selectionArea.dragButton__buttons.forEach(element => {element.addEventListener("mouseup", tools_selectionArea.revertHighlighting)});
});