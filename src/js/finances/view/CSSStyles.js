class CSSStyles {
    static #root = window.getComputedStyle(document.documentElement);





    static getMainSvgColor() {
        return CSSStyles.#root.getPropertyValue("--main-svg-color");
    }

    static getMainTextColor() {
        return CSSStyles.#root.getPropertyValue("--main-text-color");
    }

    static getMainBorderColor() {
        return CSSStyles.#root.getPropertyValue("--main-border-color");
    }

    static getInactiveColor() {
        return CSSStyles.#root.getPropertyValue("--inactive-color");
    }
}

export {CSSStyles};