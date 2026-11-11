class CSS_STYLES {
    static #root = window.getComputedStyle(document.documentElement);





    static getMainSvgColor() {
        return CSS_STYLES.#root.getPropertyValue("--main-svg-color");
    }

    static getMainTextColor() {
        return CSS_STYLES.#root.getPropertyValue("--main-text-color");
    }

    static getMainBorderColor() {
        return CSS_STYLES.#root.getPropertyValue("--main-border-color");
    }

    static getInactiveColor() {
        return CSS_STYLES.#root.getPropertyValue("--inactive-color");
    }
}

export {CSS_STYLES};