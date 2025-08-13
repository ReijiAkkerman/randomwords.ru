class ListsControl {
    static #selectors = new Map([
        ['Панель управления списками', '.tools-listsControl'],
    ]);





    static listsControl = document.querySelector(ListsControl.#selectors.get('Панель управления списками'));





    static defineShadowSides() {
        let scrollWidth = ListsControl.listsControl.scrollWidth;
        let windowWidth = ListsControl.listsControl.clientWidth;
        let deltaScroll = scrollWidth - windowWidth;
        let currentScroll = ListsControl.listsControl.scrollLeft;
        if((currentScroll > 0) && (currentScroll < deltaScroll - 1))
            ListsControl.#enableBothShadows();
        else if(currentScroll === 0)
            ListsControl.#enableRightShadowOnly();
        else 
            ListsControl.#enableLeftShadowOnly();
    }

    static #enableLeftShadowOnly() {
        ListsControl.listsControl.style.boxShadow = 'inset 10px -3px 10px #fff';
    }

    static #enableRightShadowOnly() {
        ListsControl.listsControl.style.boxShadow = 'inset -10px -3px 10px #fff';
    }

    static #enableBothShadows() {
        ListsControl.listsControl.style.boxShadow = 'inset 10px -3px 10px #fff,inset -10px -3px 10px #fff';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    ListsControl.listsControl.addEventListener('scroll', ListsControl.defineShadowSides);
});