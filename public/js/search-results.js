const RESULTS_PER_PAGE = 10;

const SEARCH_TERM_SELECTOR = "#search-term";
const RESULT_COUNT_SELECTOR = "#result-count";
const SEARCH_RESULTS_SELECTOR = "#search-results";
const SEARCH_FILTER_TAGS_SELECTOR = "#search-filter-tags";

const FULL_WIDTH_COL_CLASS = "fr-col-12";

class PageFinder {
    constructor(pagefind) {
        this.pagefind = pagefind;

        this.searchTermText = document.querySelector(SEARCH_TERM_SELECTOR);
        this.resultCounter = document.querySelector(RESULT_COUNT_SELECTOR);
        this.searchResultList = document.querySelector(SEARCH_RESULTS_SELECTOR);
        this.filterTagsEl = document.querySelector(SEARCH_FILTER_TAGS_SELECTOR);

        this.searchResults = [];
        this.start = 0;
    }

    /**
     * Effectue une requête de recherche dans les index (API Pagefind) et affiche les résultats
     *
     * @param {Object} hashFilters
     * @returns
     */
    async getSearchResults(hashFilters = {}) {
        const queryParams = new URLSearchParams(window.location.search);

        const searchTerm = queryParams.get(SEARCH_PARAM);
        this.searchTermText.textContent = searchTerm;

        // https://github.com/CloudCannon/pagefind/blob/production-docs/pagefind_web_js/types/index.d.ts#L72
        const search = await this.pagefind.search(searchTerm, {
            filters: hashFilters,
        });
        this.searchResults = search.results;
        this.resultCounter.innerText = search.results.length;

        const filters = this.getFiltersFromResults(await Promise.all(this.searchResults.map((r) => r.data())));

        // nouveaux résultats donc on les nettoie et on les affiche
        this.start = 0;
        let paginatedResults = await Promise.all(this.searchResults.slice(this.start, this.start + RESULTS_PER_PAGE).map((r) => r.data()));

        await this.populateSearchResults(paginatedResults, true);

        // chargement des éléments de plus de RESULTS_PER_PAGE au scroll
        window.addEventListener("scroll", async () => {
            if (this._bottomIsReached()) {
                this.start += RESULTS_PER_PAGE;
                paginatedResults = await Promise.all(this.searchResults.slice(this.start, this.start + RESULTS_PER_PAGE).map((r) => r.data()));
                await this.populateSearchResults(paginatedResults);
            }
        });

        return {
            results: search.results,
            filters,
        };
    }

    /**
     * Affiche les résultats dans des Cards. Nettoie les anciens résultats si clear à true
     * @param {PagefindSearchResult[]} paginatedResults
     * @param {boolean} clear
     */
    async populateSearchResults(paginatedResults, clear = false) {
        if (clear) {
            this.searchResultList.innerHTML = "";
        }

        paginatedResults.forEach((result) => {
            const cardCol = document.createElement("div");
            cardCol.className = FULL_WIDTH_COL_CLASS;
            cardCol.innerHTML = this._getCardHtml(result.meta.title, result.excerpt, result.url);
            this.searchResultList.appendChild(cardCol);
        });
    }

    /**
     * Affiche les filtres possibles à partir des pages résultantes
     * @param {Object} filters
     * @param {Object} initHashFilters
     */
    populateFilters(filters, initHashFilters) {
        this.filterTagsEl.innerHTML = "";

        Object.entries(filters).map(([filterType, subFilter]) => {
            let div = document.createElement("div");
            div.className = "fr-grid-row fr-grid-row--middle fr-mb-2v";

            let divTitle = document.createElement("div");
            divTitle.className = "fr-col-12 fr-col-sm-2";
            divTitle.textContent = `${filterType.charAt(0).toUpperCase() + filterType.slice(1)} : `;

            let divTags = document.createElement("div");
            divTags.className = "fr-col-12 fr-col-sm-10";

            div.appendChild(divTitle);
            div.appendChild(divTags);

            Object.entries(subFilter).map(([filterKeyword, count]) => {
                const button = document.createElement("button");
                button.className = "fr-tag fr-mx-2v";
                button.ariaPressed = initHashFilters[filterType]?.includes(filterKeyword) ? "true" : "false";
                button.textContent = `${filterKeyword} (${count})`;

                button.addEventListener("click", (e) => {
                    e.preventDefault();
                    const button = e.currentTarget;

                    const hashFilters = this.getFiltersFromHash();

                    if (button.ariaPressed === "true") {
                        // on enlève
                        hashFilters[filterType] = hashFilters[filterType]?.filter((f) => f !== filterKeyword);
                        if (hashFilters[filterType].length === 0) {
                            delete hashFilters[filterType];
                        }
                    } else {
                        // on ajoute
                        hashFilters[filterType] = Array.from(new Set([...(hashFilters[filterType] ?? []), filterKeyword]));
                    }

                    window.location.hash = Object.keys(hashFilters).length === 0 ? "" : encodeURIComponent(JSON.stringify(hashFilters));
                });

                divTags.appendChild(button);
            });

            this.filterTagsEl.appendChild(div);
        });
    }

    getFiltersFromHash() {
        let hashFilters;
        try {
            const hash = window.location.hash.substring(1);
            hashFilters = hash === "" ? {} : JSON.parse(decodeURIComponent(hash));
        } catch (error) {
            hashFilters = {};
        }
        return hashFilters;
    }

    getFiltersFromResults(results) {
        const getFilterKeys = (results) => {
            const filters = results.map((r) => {
                return r.filters ?? {};
            });

            const filterKeys = filters.map((f) => Object.keys(f) ?? []).flat();

            return Array.from(new Set(filterKeys)).sort();
        };

        const countOccurrences = (array) => {
            return array.reduce((acc, curr) => {
                // initialise à 0 si curr n'existe pas encore
                acc[curr] ??= 0;
                acc[curr]++;
                return acc;
            }, {});
        };

        const filterKeys = getFilterKeys(results);

        const filters = {};
        filterKeys.forEach((filterKey) => {
            // filters[filterKey] = Array.from(new Set(results.map((r) => r.filters[filterKey] ?? []).flat()));
            filters[filterKey] = results.map((r) => r.filters[filterKey] ?? []).flat();

            filters[filterKey] = countOccurrences(filters[filterKey]);
        });

        return filters;
    }

    _getCardHtml(title, excerpt, url) {
        return `
<div class="fr-card fr-enlarge-link fr-card--horizontal">
    <div class="fr-card__body">
        <div class="fr-card__content">
            <h3 class="fr-card__title">
                <a href="${url}">${title}</a>
            </h3>
            <p class="fr-card__desc">${excerpt}</p>
        </div>
    </div>
</div>`;
    }

    _bottomIsReached() {
        return window.scrollY + window.innerHeight >= document.documentElement.scrollHeight;
    }
}

(async () => {
    const pagefind = await import(PAGEFIND_URL);

    // affichage des premiers résultats
    const pageFinder = new PageFinder(pagefind);

    // récupération filters au premier chargement de la page
    const initHashFilters = pageFinder.getFiltersFromHash();
    const { filters } = await pageFinder.getSearchResults(initHashFilters);

    pageFinder.populateFilters(filters, initHashFilters);

    // chargement de résultats en fonction du changement des filtres
    window.addEventListener("hashchange", async () => {
        const hashFilters = pageFinder.getFiltersFromHash();

        const { filters } = await pageFinder.getSearchResults(hashFilters);

        pageFinder.populateFilters(filters, hashFilters);
    });
})();
