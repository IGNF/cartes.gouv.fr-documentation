/**
 * Ajoute un bouton pour copier les exemples de code
 */
(() => {
    const code = document.querySelectorAll('pre[class*="language"]');

    const buttonClasses = ['fr-btn', 'code-copy-btn'];
  
    code.forEach((pre) => {
      const button = document.createElement('button');
      button.title = 'Copier';
      button.classList.add(...buttonClasses);
      button.innerHTML = 'Copier';
      button.addEventListener('click', () => {
        navigator.clipboard.writeText(pre.firstElementChild.textContent);
        button.innerHTML = 'Copié !';
        setTimeout(() => {button.innerHTML = 'Copier';}, 1500);
      });
      pre.appendChild(button);
    });
  })();