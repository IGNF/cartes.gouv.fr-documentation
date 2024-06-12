module.exports = {
    lang: "fr",
    urls: {
        api_entrepot: "https://data.geopf.fr/api",
        private: {
            wfs: "https://data.geopf.fr/private/wfs",
        },
    },
    permalink: function (data) {
        if (data.slugOverride) {
            return `/${data.lang}/${this.slugify(data.slugOverride)}/`;
        }
    },
    showBreadcrumb: true,
    date: "git Last Modified",
};
