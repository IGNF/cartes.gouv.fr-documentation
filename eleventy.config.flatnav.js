function flattenNav(items) {
    let result = [];

    for (let item of items) {
        result.push(item);
        if (item.children) {
            result = result.concat(flattenNav(item.children));
        }
    }

    return result;
}

module.exports = function (eleventyConfig) {
    eleventyConfig.addFilter("flattenNav", flattenNav);
};
