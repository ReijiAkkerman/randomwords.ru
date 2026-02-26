class tools_groupSelectionArea_itemsBlock {
    static #selectors = new Map([
        ["Кнопка категории", ".tools-groupSelectionArea-cathegoryItem"],
    ]);





    static cathegory__buttons = document.querySelectorAll(tools_groupSelectionArea_itemsBlock.#selectors.get("Кнопка категории"));





    static checkPlaceForPadding() {
        let buttons_number = tools_groupSelectionArea_itemsBlock.#getCathegoryButtonsAmount();
        if(buttons_number > 2) tools_groupSelectionArea_itemsBlock.#enablePadding();
        else tools_groupSelectionArea_itemsBlock.#disablePadding();
    }





    static #getCathegoryButtonsAmount() {
        return tools_groupSelectionArea_itemsBlock.cathegory__buttons.length;
    }

    static #enablePadding() {
        document.documentElement.style.removeProperty("--tools-groupSelectionArea-itemsBlock__after");
    }

    static #disablePadding() {
        document.documentElement.style.setProperty("--tools-groupSelectionArea-itemsBlock__after", "default");
    }
}

document.addEventListener("DOMContentLoaded", function() {
    tools_groupSelectionArea_itemsBlock.checkPlaceForPadding();
})