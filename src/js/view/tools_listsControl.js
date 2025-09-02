class tools_listsControl {
    static #selectors = new Map([
        ["Область выбора группы списков", ".tools-listsControl-group"],
        ["Область выбора категории списков", ".tools-listsControl-cath"],
    ]);





    static groupSelection__area = document.querySelector(tools_listsControl.#selectors.get("Область выбора группы списков"));
    static cathegorySelection__area = document.querySelector(tools_listsControl.#selectors.get("Область выбора категории списков"));





    static showGroupSelectionArea() {
        tools_listsControl.groupSelection__area.scrollIntoView({behavior: "smooth", block: "start"});
    }

    static showCathegorySelectionArea() {
        tools_listsControl.cathegorySelection__area.scrollIntoView({behavior: "smooth", block: "end"});
    }
}

document.addEventListener("DOMContentLoaded", function() {
    tools_listsControl.cathegorySelection__area.addEventListener("mouseenter", tools_listsControl.showCathegorySelectionArea);
    tools_listsControl.groupSelection__area.addEventListener("mouseenter", tools_listsControl.showGroupSelectionArea);
});