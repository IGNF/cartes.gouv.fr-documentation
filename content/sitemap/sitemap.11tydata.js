module.exports = function () {
    return {
        eleventyComputed: {
            tree: (data) => {
                const allPages = data.collections.all.filter((p) => p.url && p.url.startsWith("/fr/"));
                const tree = {};

                function addPageToTree(urlSegments, page, node) {
                    if (urlSegments.length === 0) return;

                    const segment = urlSegments[0];
                    if (!node[segment]) {
                        node[segment] = { __children: {}, __page: null };
                    }
                    if (urlSegments.length === 1) {
                        node[segment].__page = page;
                    } else {
                        addPageToTree(urlSegments.slice(1), page, node[segment].__children);
                    }
                }

                for (const page of allPages) {
                    const segments = page.url.replace(/^\/|\/$/g, "").split("/");
                    addPageToTree(segments, page, tree);
                }

                function sortByOrder(node) {
                    const sorted = {};
                    const entries = Object.entries(node);
                    entries.sort(([, a], [, b]) => {
                        const orderA = a.__page?.data.eleventyNavigation?.order;
                        const orderB = b.__page?.data.eleventyNavigation?.order;
                        return orderA - orderB;
                    });
                    for (const [key, value] of entries) {
                        sorted[key] = value;
                        sorted[key].__children = sortByOrder(value.__children);
                    }
                    return sorted;
                }
                return sortByOrder(tree);
            },
        },
    };
};
