(() => {
    const ITEMS_PER_PAGE = 10;
    const allPages = window.__BLOG_PAGES__ || [];

    const cardListEl = document.getElementById("blog-card-list");
    const filterTagsEl = document.getElementById("blog-filter-tags");
    const paginationEl = document.getElementById("blog-pagination");

    let activeFilters = [];
    let currentPage = 0;

    function getFilteredPages() {
        if (activeFilters.length === 0) return allPages;
        return allPages.filter((page) => activeFilters.every((tag) => page.tags && page.tags.includes(tag)));
    }

    function collectTags(pages) {
        const tagCounts = {};
        pages.forEach((page) => {
            (page.tags || []).forEach((tag) => {
                tagCounts[tag] = (tagCounts[tag] || 0) + 1;
            });
        });
        return Object.entries(tagCounts).sort((a, b) => {
            const diff = b[1] - a[1];
            if (diff !== 0) return diff;
            return a[0].localeCompare(b[0], "fr", { sensitivity: "base" });
        });
    }

    function escapeHtml(str) {
        if (!str) return "";
        const div = document.createElement("div");
        div.textContent = str;
        return div.innerHTML;
    }

    function renderCard(page) {
        const tagsHtml = (page.tags || []).map((tag) => `<li><p class="fr-tag">${escapeHtml(tag)}</p></li>`).join("");

        const dateHtml = page.date
            ? `<p class="fr-card__detail fr-icon-time-fill"><time class="postlist-date" datetime="${escapeHtml(page.date)}">${escapeHtml(page.readableDate)}</time></p>`
            : "";

        return `
<div class="fr-col-12 fr-col-md-6 fr-col-lg-6">
    <div class="fr-card fr-enlarge-link">
        <div class="fr-card__body">
            <div class="fr-card__content">
                <h3 class="fr-card__title">
                    <a href="${escapeHtml(page.url)}">${escapeHtml(page.title)}</a>
                </h3>
                <p class="fr-card__desc">${escapeHtml(page.description)}</p>
                <div class="fr-card__start">
                    ${tagsHtml ? `<ul class="fr-tags-group">${tagsHtml}</ul>` : ""}
                    ${dateHtml}
                </div>
            </div>
        </div>
    </div>
</div>`;
    }

    function renderCards(pages) {
        const start = currentPage * ITEMS_PER_PAGE;
        const paginated = pages.slice(start, start + ITEMS_PER_PAGE);
        cardListEl.innerHTML = paginated.map(renderCard).join("");
        // Scroll en haut de la page après affichage des cartes (comme search-results.js)
        requestAnimationFrame(() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    function renderFilters() {
        const filtered = getFilteredPages();
        const tagCounts = collectTags(filtered);

        if (tagCounts.length === 0) {
            filterTagsEl.innerHTML = "";
            return;
        }

        const ul = document.createElement("ul");
        ul.className = "fr-tags-group";

        tagCounts.forEach(([tag, count]) => {
            const li = document.createElement("li");
            const button = document.createElement("button");
            button.className = "fr-tag";
            button.ariaPressed = activeFilters.includes(tag) ? "true" : "false";
            button.textContent = `${tag} (${count})`;

            button.addEventListener("click", (e) => {
                e.preventDefault();
                if (activeFilters.includes(tag)) {
                    activeFilters = activeFilters.filter((f) => f !== tag);
                } else {
                    activeFilters.push(tag);
                }
                currentPage = 0;
                render();
            });

            li.appendChild(button);
            ul.appendChild(li);
        });

        filterTagsEl.innerHTML = "";
        filterTagsEl.appendChild(ul);
    }

    function renderPagination(totalItems) {
        paginationEl.innerHTML = "";

        const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
        if (totalPages <= 1) return;

        const ul = document.createElement("ul");
        ul.className = "fr-pagination__list";

        const createPageLink = (page, label, isDisabled = false, isCurrent = false) => {
            const li = document.createElement("li");
            const a = document.createElement("a");
            a.className = "fr-pagination__link";
            if (label === "Précédent") a.classList.add("fr-pagination__link--prev", "fr-pagination__link--lg-label");
            if (label === "Suivant") a.classList.add("fr-pagination__link--next", "fr-pagination__link--lg-label");

            a.setAttribute("role", "link");
            if (isDisabled) {
                a.setAttribute("aria-disabled", "true");
            } else {
                a.href = "#";
                a.addEventListener("click", (e) => {
                    e.preventDefault();
                    currentPage = page;
                    render();
                });
            }

            if (isCurrent) a.setAttribute("aria-current", "page");

            a.textContent = label || page;
            li.appendChild(a);
            return li;
        };

        ul.appendChild(createPageLink(currentPage - 1, "Précédent", currentPage === 0));

        for (let i = 0; i < totalPages; i++) {
            if (Math.abs(i - currentPage) <= 2 || i === 0 || i === totalPages - 1) {
                ul.appendChild(createPageLink(i, String(i + 1), false, i === currentPage));
            } else if ((i === currentPage - 3 && currentPage > 3) || (i === currentPage + 3 && currentPage < totalPages - 4)) {
                const li = document.createElement("li");
                li.innerHTML = `<span class="fr-pagination__link">…</span>`;
                ul.appendChild(li);
            }
        }

        ul.appendChild(createPageLink(currentPage + 1, "Suivant", currentPage >= totalPages - 1));

        paginationEl.appendChild(ul);
    }

    function render() {
        const filtered = getFilteredPages();
        renderFilters();
        renderCards(filtered);
        renderPagination(filtered.length);
    }

    render();
})();
