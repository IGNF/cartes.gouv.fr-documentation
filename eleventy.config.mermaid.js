module.exports = (eleventyConfig) => {
    const highlighter = eleventyConfig.markdownHighlighter;
    eleventyConfig.addMarkdownHighlighter((str, language) => {
        if (language === "mermaid") {
            return `<pre class="mermaid">${str}</pre>`;
        }
        if (highlighter) {
            return highlighter(str, language);
        }
        return `<pre class="${language}">${str}</pre>`;
    });

    return {};
};
