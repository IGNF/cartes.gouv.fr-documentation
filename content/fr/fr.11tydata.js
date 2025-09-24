module.exports = {
    lang: "fr",
    urls: {
        api_entrepot: "https://data.geopf.fr/api",
        private: {
            wfs: "https://data.geopf.fr/private/wfs",
        },
        public: {
            wfs: "https://data.geopf.fr/wfs",
        },
        public: {
            wmsv: "https://data.geopf.fr/wms-v",
        },
        public: {
            tmsv: "https://data.geopf.fr/vector-tms",
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
