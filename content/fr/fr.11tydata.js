module.exports = {
    lang: "fr",
    urls: {
        iam: "https://sso.geopf.fr/realms/geoplateforme",
        api_entrepot: "https://data.geopf.fr/api",
        swagger: "https://data.geopf.fr/api/swagger-ui/index.html",
        annexes: "https://data.geopf.fr/annexes",
        private: {
            wfs: "https://data.geopf.fr/private/wfs",
            wmsv: "https://data.geopf.fr/private/wms-v",
            wmts: "https://data.geopf.fr/private/wmts",
            tms: "https://data.geopf.fr/private/tms",
            wmsr: "https://data.geopf.fr/private/wms-r",
            download: "https://data.geopf.fr/private/telechargement",
            alti: "https://data.geopf.fr/private/altimetrie",
            iti_iso: "https://data.geopf.fr/private/navigation",
            search: "https://data.geopf.fr/private/recherche",
        },
        public: {
            wfs: "https://data.geopf.fr/wfs",
            wmsv: "https://data.geopf.fr/wms-v",
            tmsv: "https://data.geopf.fr/vector-tms",
            tms: "https://data.geopf.fr/tms",
            wmts: "https://data.geopf.fr/wmts",
            wmsr: "https://data.geopf.fr/wms-r",
            alti: "https://data.geopf.fr/altimetrie",
            csw: "https://data.geopf.fr/csw",
            download: "https://data.geopf.fr/telechargement",
            search: "https://data.geopf.fr/recherche",
        },
    },
    secrets: {
        qgis: process.env.QGIS_SECRET,
    },
    ids: {
        storages: {
            postgresql: "e53852da-e713-4115-8af4-36ce0490f93b",
            s3_data_pyramid: "7a7ccc8b-e0d1-47ed-848d-5a5cdb529539",
            s3_data_archive: "4c2d24e6-870d-4194-8bc8-3ac8b7f76d08",
            s3_upload: "40d3ae5e-f46b-4cb7-b08b-9a2f207f4dc6",
            s3_annexe: "1b0371a1-aad9-4f0f-b687-367d485a665b",
            postgresql_routing: {
                opensearch: "d5134033-c9c1-4342-a348-fbc4182f34bc",
            },
        },
        endpoints: {
            open: {
                wmsv: "ae022611-13eb-4a18-8d04-9b7604a031cc",
                wfs: "ae012611-13eb-4a18-8d04-9b7604a031cc",
                wmsr: "ae042611-13eb-4a18-8d04-9b7604a031cc",
                wmts: "ae032611-13eb-4a18-8d04-9b7604a031cc",
                download: "ae052611-13eb-4a18-8d04-9b7604a031cc",
                csw: "ae062611-13eb-4a18-8d04-9b7604a031cc",
                search: "043dd5e1-4136-49d3-b7a6-26de70d4a195",
                alti: "0ac92a1e-aa86-4843-8528-e303f12296e5",
            },
            private: {
                wmsv: "519c8bb1-9b7f-414a-9850-1a73dfd467ed",
                wfs: "d02feec9-1169-403f-bfc3-7ba6d6015ed4",
                wmsr: "66866100-48eb-4340-bbc9-f5c7d9707928",
                wmts: "7e0a92d1-8213-4ce0-8903-eb4c305a1849",
                download: "b5bf7ab2-8998-4829-8c80-cd2ec02e6e58",
                search: "5c8f3cd0-405f-4c3e-8240-959683fc2a93",
                alti: "81a70d66-a252-4dfd-9547-d4c9cc2ca3e3",
            },
        },
        checks: {
            standard: "ecb00ba0-eb42-427e-8418-f5d8a30e84ec",
            vector: "66ed8a1b-93d9-4fe9-a413-ab93d31b2964",
            raster: "a4060831-9c6f-42e2-9435-e07a4e8ef535",
            archive: "f4f79b5e-7056-4b56-981d-34043b4925ab",
            pyramid_rok4: "f879e8c6-0838-48a6-a8d3-41d47b208a6c",
        },
        processings: {
            vector_to_db: "0de8c60b-9938-4be9-aa36-9026b77c3c96",
            archive_to_archive: "12cdc646-3976-4f18-b273-f34fca37e2a6",
            db_to_pyramid: "aa5f9391-0bdb-4b97-9209-fcde351b82f6",
            raster_to_pyramid: "2ae50661-986c-4f47-a3f0-e380417b522c",
            pyramids_to_pyramid: "7cdca031-9e86-4804-8764-9b1d783b087d",
            wms_to_pyramid: "6a54dc92-fc93-4c8e-9f02-046bf889550e",
            db_to_db: "2c18eda8-d30c-42ab-8760-ec16d8929de5",
        },
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
