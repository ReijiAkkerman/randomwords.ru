class tools_listsControl {
    static #selectors = new Map([
        ["Область управления списками", ".tools-listsControl"],

        ["Область выбора группы списков", ".tools-listsControl-group"],
        ["Область выбора категории списков", ".tools-listsControl-cath"],
    ]);





    static listsControl = document.querySelector(tools_listsControl.#selectors.get("Область управления списками"));

    static listsControl__group = document.querySelector(tools_listsControl.#selectors.get("Область выбора группы списков"));
    static listsControl__cath = document.querySelector(tools_listsControl.#selectors.get("Область выбора категории списков"));





    static showGroupArea() {
        // tools_listsControl.listsControl.scrollLeft = 0;
        let animationInfo = [{scrollLeft:1}];
        let timingInfo = {
            duration: 200,
            fill: "forwards",
            easing: "linear",
        };
        tools_listsControl.listsControl.animate(animationInfo, timingInfo);
    }

    static showCathArea() {
        let scrollLength = tools_listsControl.listsControl.scrollWidth - tools_listsControl.listsControl.clientWidth;
        tools_listsControl.listsControl.scrollLeft = scrollLength;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    tools_listsControl.listsControl__group.addEventListener("mouseover", tools_listsControl.showGroupArea);
    tools_listsControl.listsControl__cath.addEventListener("mouseover", tools_listsControl.showCathArea);
});