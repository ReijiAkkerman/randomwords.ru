class tools_listsControl__cath {
    static #selectors = new Map([
        ["Кнопка выбранной группы", ".tools__button_selectGroup"],
        ["Кнопка выбранной категории", ".tools__button_selectCathegory"],
        ["Кнопка переключения на выбранную группу", ".tools__button_switchToGroup"],
        ["Кнопка переключения на выбранную категорию", ".tools__button_switchToCathegory"],

        ["Область группы", ".tools-listsControl-cath-groupArea"],
        ["Область категории", ".tools-listsControl-cath-groupArea"],

        ["Иконка кнопки переключения", ".tools-listsControl-cath__svg"],
        ["Текст кнопки с наименованием", ".tools-listsControl-cath__pre"],
    ]);





    static selectedGroup__button = document.querySelector(tools_listsControl__cath.#selectors.get("Кнопка выбранной группы"));
    static selectedCathegory__button = document.querySelector(tools_listsControl__cath.#selectors.get("Кнопка выбранной категории"));
    static switchToGroup__button = document.querySelector(tools_listsControl__cath.#selectors.get("Кнопка переключения на выбранную группу"));
    static switchToCathegory__button = document.querySelector(tools_listsControl__cath.#selectors.get("Кнопка переключения на выбранную категорию"));

    static #group__area = document.querySelector(tools_listsControl__cath.#selectors.get("Область группы"));
    static #cathegory__area = document.querySelector(tools_listsControl__cath.#selectors.get("Область категории"));

    static #selectedGroup__icon = selectedGroup__button.querySelector(tools_listsControl__cath.#selectors.get("Иконка кнопки переключения"));
    static #selectedGroup__text = selectedGroup__button.querySelector(tools_listsControl__cath.#selectors.get("Текст кнопки с наименованием"));
    static #selectedCathegory__icon = selectedCathegory__button.querySelector(tools_listsControl__cath.#selectors.get("Иконка кнопки переключения"));
    static #selectedCathegory__text = selectedCathegory__button.querySelector(tools_listsControl__cath.#selectors.get("Текст кнопки с наименованием"));





    static switchToGroup() {

    }

    static switchToCathegory() {

    }





    static #group_hideIcon() {

    }

    static #group_showIcon() {

    }

    static #group_hideText() {

    }

    static #group_showText() {

    }



    static #cathegory_hideIcon() {

    }

    static #cathegory_showIcon() {

    }

    static #cathegory_hideText() {

    }

    static #cathegory_showText() {
        
    }
}