class SearchRowDisplaying {
    #row;

    constructor(row_selector) {
        this.#row = document.querySelector(row_selector);
    }

    // Вызывается только после загрузки страницы
    defineDisplaying(checkbox_input) {
        if(checkbox_input.checked === true) this.#showRow(this.#row);
        else this.#hideRow(this.#row);
    }

    switchDisplaying(event) {
        if(event.currentTarget.checked === true) this.#showRow(this.#row);
        else this.#hideRow(this.#row);
    }

    #showRow(row) {
        row.style.display = "";
    }

    #hideRow(row) {
        row.style.display = "none";
    }
}

/**
 * Работа этого скрипта зависит от порядка в котором идут разделы на странице
 * В норме это: goals
 *              funds
 *              entries
 * Если планируется менять порядок расположения разделов на стрнице,
 * то необходимо менять порядок элементов в массиве `sections` так чтобы он соответствовал порядку 
 * расположения разделов на странице.
 * В противном случае будет получено неопределенное поведение скрипта.
 * Например: при нажатии в настройках галочки для появления строки на разделе `goals` -
 * строка будет появляться в разделе `entries` и т.д.
 */

document.addEventListener("DOMContentLoaded", function() {
    let sections = ["goals", "funds", "entries"];
    let checkbox_inputs = document.querySelectorAll(".settings-parametersEditing-search__input");
    let objects_for_checkbox_inputs = new Array(checkbox_inputs.length);
    for(let i = 0; i < checkbox_inputs.length; i++) {
        objects_for_checkbox_inputs[i] = new SearchRowDisplaying(`.FormElements-sortingBar_${sections[i]}`);
        checkbox_inputs[i].addEventListener("change", objects_for_checkbox_inputs[i].switchDisplaying.bind(objects_for_checkbox_inputs[i]));
        /**  
         * Отвечает за отображение строки после загрузки страницы, но вызывает лаги в виде 
         * появившейся и тут же исчезнувшей строки (закомментировано).
         */
        // objects_for_checkbox_inputs[i].defineDisplaying(checkbox_inputs[i]);
    }
});