const RESULTS_PER_PAGE = 10;

const SEARCH_TERM_SELECTOR = "#search-term";
const RESULT_COUNT_SELECTOR = "#result-count";
const SEARCH_RESULTS_SELECTOR = "#search-results";

const FULL_WIDTH_COL_CLASS = "fr-col-12";

class PageFinder {
    constructor(pagefind) {
        this.pagefind = pagefind;

        this.searchTermText = document.querySelector(SEARCH_TERM_SELECTOR);
        this.resultCounter = document.querySelector(RESULT_COUNT_SELECTOR);
        this.searchResultList = document.querySelector(SEARCH_RESULTS_SELECTOR);
        this.filterTagsEl = document.getElementById("search-filter-tags");
    }

    async getSearchResults() {
        const queryParams = new URLSearchParams(window.location.search);
        console.log(queryParams.get("filters"));
        const searchTerm = queryParams.get(SEARCH_PARAM);
        this.searchTermText.textContent = searchTerm;

        // https://github.com/CloudCannon/pagefind/blob/production-docs/pagefind_web_js/types/index.d.ts#L72
        const search = await this.pagefind.search(searchTerm);
        this.resultCounter.innerText = search.results.length;

        const filters = await this.pagefind.filters();
        console.log(filters);
        // , {
        //     filters: {
        //         format: "Tutoriel",
        //     },
        // }

        let start = 0;
        let paginatedResults = await Promise.all(search.results.slice(start, start + RESULTS_PER_PAGE).map((r) => r.data()));

        await this.populateSearchResults(paginatedResults);
        this.showFilters(filters);

        window.addEventListener("scroll", async () => {
            if (this._bottomIsReached()) {
                start += RESULTS_PER_PAGE;
                paginatedResults = await Promise.all(search.results.slice(start, start + RESULTS_PER_PAGE).map((r) => r.data()));
                await populateSearchResults(paginatedResults);
            }
        });
    }

    async populateSearchResults(paginatedResults) {
        this.searchResultList.innerHTML = "";

        paginatedResults.forEach((result) => {
            const cardCol = document.createElement("div");
            cardCol.className = FULL_WIDTH_COL_CLASS;
            cardCol.innerHTML = this._getCardHtml(result.meta.title, result.excerpt, result.url);
            this.searchResultList.appendChild(cardCol);
        });
    }

    showFilters(filters) {
        const queryParams = new URLSearchParams(window.location.search);

        const searchTerm = queryParams.get(SEARCH_PARAM);
        let queryFilters = queryParams.get("filters") ? JSON.parse(decodeURIComponent(queryParams.get("filters"))) : {};

        Object.entries(filters).map(([filterType, subFilter]) => {
            let div = document.createElement("div");
            div.className = "fr-grid-row fr-grid-row--middle";

            let divTitle = document.createElement("div");
            divTitle.className = "fr-col-12 fr-col-sm-2";
            divTitle.textContent = `${filterType} : `;

            let divTags = document.createElement("div");
            divTags.className = "fr-col-12 fr-col-sm-10";

            let ul = document.createElement("ul");
            ul.className = "fr-tags-group";
            divTags.appendChild(ul);

            div.appendChild(divTitle);
            div.appendChild(divTags);

            Object.entries(subFilter).map(([filter, count]) => {
                const li = document.createElement("li");
                li.className = "fr-tag fr-tag--sm";

                const tmpQueryFilters = { ...queryFilters };
                tmpQueryFilters[filterType] = Array.from(new Set([...(tmpQueryFilters[filterType] ?? []), filter]));
                console.log(tmpQueryFilters);

                const aTag = document.createElement("a");
                aTag.href = `${new URL(window.location).pathname}?term=${searchTerm}&filters=${encodeURIComponent(JSON.stringify(tmpQueryFilters))}`;
                aTag.text = `${filter} (${count})`;

                li.appendChild(aTag);
                ul.appendChild(li);
            });

            this.filterTagsEl.appendChild(div);
        });

        // let ul = document.createElement("ul");
        // ul.className = "fr-tags-group";
        // filters.espace.forEach((espace) => {
        //     const li = document.createElement("li");
        //     li.className = "fr-tag";
        //     li.textContent = espace;
        //     ul.appendChild(li);
        // });
        // filterTagsEl.appendChild(ul);

        // console.log(filters);
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

    const pageFinder = new PageFinder(pagefind);
    await pageFinder.getSearchResults();
})();
