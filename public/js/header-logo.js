/**
 * Utilise le logo thème sombre si nécessaire
 */
(() => {
    const target = document.documentElement;

    const changeLogo = (theme) => {
        const logo = document.querySelector(".fr-header__operator img");
        if (logo) {
            if (theme === "dark") {
                logo.src = logo.src.replace("cartes-gouv-logo.svg", "cartes-gouv-logo-dark.svg");
            } else {
                logo.src = logo.src.replace("cartes-gouv-logo-dark.svg", "cartes-gouv-logo.svg");
            }
        }
    };

    const theme = target.getAttribute("data-fr-theme");
    // changement à l'ouverture de la page
    changeLogo(theme);

    // changement lors de l'utilisation du sélecteur de thème
    const observer = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
            if (mutation.type === "attributes" && mutation.attributeName === "data-fr-theme") {
                const newTheme = target.getAttribute("data-fr-theme");
                changeLogo(newTheme);
            }
        }
    });

    observer.observe(target, {
        attributes: true,
        attributeFilter: ["data-fr-theme"],
    });
})();
