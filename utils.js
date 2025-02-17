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
