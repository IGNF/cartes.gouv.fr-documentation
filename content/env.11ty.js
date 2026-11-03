class EnvironmentScript {
    data() {
        return {
            permalink: "/js/env.js",
            eleventyExcludeFromCollections: true,
        };
    }

    render({ runtimeEnv }) {
        return `(() => {
    window.__CARTESGOUVFR_DOCS_ENV__ = ${JSON.stringify(runtimeEnv)};
    Object.freeze(window.__CARTESGOUVFR_DOCS_ENV__);
    Object.defineProperty(window, "__CARTESGOUVFR_DOCS_ENV__", { configurable: false, writable: false });
})();
`;
    }
}

module.exports = EnvironmentScript;
