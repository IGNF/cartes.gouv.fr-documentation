const { JSDOM } = require("jsdom");

class Node {
    constructor(id, name, tagName) {
        this.id = id;
        this.name = name;
        this.tagName = tagName;
        this.children = [];
    }

    addChild(childNode) {
        this.children.push(childNode);
    }
}

/**
 *
 * @param {Node} parent
 * @param {Node} node
 * @param {number} level
 */
function insertNode(parent, node, level) {
    // Si le parent n'a pas d'enfants, ça veut dire que node est le premier du niveau de heading rencontré et donc on l'ajoute au parent
    // init children
    if (!parent.children.length) {
        parent.addChild(node);
    } else {
        // sinon on continue à chercher le parent
        let lastChild = parent.children[parent.children.length - 1];
        let lastChildLevel = parseInt(lastChild.tagName.slice(1));

        // si niveau courant est supérieur au niveau du dernier enfant du parent, la fonction appelle lui-même avec le dernier enfant du parent comme parent
        if (level > lastChildLevel) {
            insertNode(lastChild, node, level);
        } else {
            parent.addChild(node);
        }
    }
}

/**
 * Recherche les headings du document et les organise en une structure hiérarchique
 * en fonction de la profondeur spécifiée.
 * Ignore les headings qui sont des titres de composants (alert, tile, accordion)
 * ne dépasse jamais 3 niveaux (h2, h3, h4) et ignore toujours le h1
 * @param {string} content
 * @param {number} depth
 * @returns {array<Node>}
 */
const getSummaryItems = (content, depth = 1) => {
    const { document } = new JSDOM(content).window;

    switch (depth) {
        case 1:
            querySelector = "h2";
            break;
        case 2:
            querySelector = "h2, h3";
            break;
        default: // depth 3 or more always equals 3 levels of summary
            querySelector = "h2, h3, h4";
    }

    const headings = Array.from(document.querySelectorAll(querySelector)).filter(
        (h) => !h.classList.contains("fr-tile__title") && !h.classList.contains("fr-alert__title") && !h.classList.contains("fr-accordion__title")
    );

    const root = new Node("root", "root", "root");

    headings.forEach((heading, index) => {
        const level = parseInt(heading.tagName.slice(1));
        const node = new Node(heading.id, heading.textContent.replace(" #", ""), heading.tagName);
        insertNode(root, node, level);
    });

    return root.children;
};

module.exports = {
    getSummaryItems,
};
