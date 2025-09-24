module.exports = {
    lang: "fr",
    urls: {
        api_entrepot: "https://data.geopf.fr/api",
        annexes: "https://data.geopf.fr/annexes",
        private: {
            wfs: "https://data.geopf.fr/private/wfs",
        },
        public: {
            wfs: "https://data.geopf.fr/wfs",
            wmsv: "https://data.geopf.fr/wms-v",
            tmsv: "https://data.geopf.fr/vector-tms",
            tms: "https://data.geopf.fr/tms",
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
