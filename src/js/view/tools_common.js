class tools_common {
    static #selectors = new Map([
        ["Область действий над списками", ".tools-common-actions"],
        ["Область поиска", ".tools-common-search"],
    ]);





    static actions = document.querySelector(tools_common.#selectors.get("Область действий над списками"));
    static search = document.querySelector(tools_common.#selectors.get("Область поиска"));




    static increaseActionsAreaSize() {
        let animation = [{}];
        let timing = {
            duration: 2000,
            fill: "forwards",
            easing: "ease-in-out",
        };
        tools_common.search.animate(animation, timing);
    }

    static reduceActionsAreaSize() {

    } 

    static increaseSearchAreaSize() {

    }

    static reduceSearchAreaSize() {
        
    }
}

document.addEventListener("DOMContentLoaded", function() {
    tools_common.actions.addEventListener("mouseenter", tools_common.increaseActionsAreaSize);
});