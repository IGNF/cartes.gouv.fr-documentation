/**
 * Ajoute un bouton pour copier les exemples de code
 */
(() => {
    const code = document.querySelectorAll('pre[class*="language"]');

    const buttonClasses = ["fr-btn", "fr-btn--tertiary", "ri-file-copy-line", "fr-btn--icon-right"];

    code.forEach((pre) => {
        const button = document.createElement("button");
        button.title = "Copier";
        button.classList.add(...buttonClasses);
        button.innerHTML = "Copier";
        button.addEventListener("click", () => {
            navigator.clipboard.writeText(pre.firstElementChild.textContent);
            button.innerHTML = "Copié";
            button.classList.remove("ri-file-copy-line");
            button.classList.add("fr-icon-check-line");
            setTimeout(() => {
                button.innerHTML = "Copier";
                button.classList.remove("fr-icon-check-line");
                button.classList.add("ri-file-copy-line");
            }, 1500);
        });
        const buttonContainer = document.createElement("div");
        buttonContainer.appendChild(button);
        buttonContainer.classList.add("copy-to-clipboard-container");
        pre.parentNode.insertBefore(buttonContainer, pre);
    });
})();
