const SEARCH_PARAM = "term";

(() => {
    const searchBoxes = document.querySelectorAll(".fr-search-bar");

    searchBoxes.forEach((searchBox) => {
        const searchInput = searchBox.querySelector("input");
        const searchBtn = searchBox.querySelector("button");

        const search = () => {
            const searchResultsUrl = new URL(SEARCH_RESULTS_URL, window.location.origin);
            if (searchInput.value?.length > 0) {
                searchResultsUrl.searchParams.append(SEARCH_PARAM, searchInput.value);
                window.location.href = searchResultsUrl;
            }
        };

        searchInput.addEventListener("keydown", async (event) => {
            if (event.code === "Enter" || event.code === "NumpadEnter") {
                await search();
            }
        });
        searchBtn.addEventListener("click", async () => {
            await search();
        });
    });
})();
