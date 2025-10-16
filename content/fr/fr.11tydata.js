module.exports = {
    lang: "fr",
    urls: {
        iam: "https://sso.geopf.fr/realms/geoplateforme",
        api_entrepot: "https://data.geopf.fr/api",
        swagger: "https://data.geopf.fr/api/swagger-ui/index.html",
        annexes: "https://data.geopf.fr/annexes",
        private: {
            wfs: "https://data.geopf.fr/private/wfs",
        },
        public: {
            wfs: "https://data.geopf.fr/wfs",
            wmsv: "https://data.geopf.fr/wms-v",
            tmsv: "https://data.geopf.fr/vector-tms",
            tms: "https://data.geopf.fr/tms",
            wmts: "https://data.geopf.fr/wmts",
            wmsr: "https://data.geopf.fr/wms-r",
            alti: "https://data.geopf.fr/altimetrie",
            download: "https://data.geopf.fr/telechargement",
        },
    },
    secrets: {
        qgis: "F77z01QHTaJClBJ1p2OZYkFGL24XYLti",
    },
    permalink: function (data) {
        if (data.slugOverride) {
            return `/${data.lang}/${this.slugify(data.slugOverride)}/`;
        }
    },
    showBreadcrumb: true,
    date: "git Last Modified",
    summary: {
        visible: false,
    },
};
