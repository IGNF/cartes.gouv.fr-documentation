const path = require("path");
const eleventyImage = require("@11ty/eleventy-img");

// Full list of formats here: https://www.11ty.dev/docs/plugins/image/#output-formats
// Warning: Avif can be resource-intensive so take care!
const getOptions = (widths) => {
    return {
        widths: widths || ["auto"],
        formats: ["avif", "webp", "auto"],
    };
};

const getImageAttributes = (cls, alt, sizes) => {
    return {
        class: `fr-responsive-img fr-ratio-auto ${cls}`,
        alt,
        sizes,
        loading: "lazy",
        decoding: "async",
    };
};

const relativeToInputPath = (inputPath, relativeFilePath) => {
    if (relativeFilePath.startsWith("/img/")) {
        return path.join(__dirname, "public", relativeFilePath);
    }
    let split = inputPath.split("/");
    split.pop();
    return path.resolve(split.join(path.sep), relativeFilePath);
};

module.exports = (eleventyConfig) => {
    // Eleventy Image shortcodes
    // https://www.11ty.dev/docs/plugins/image/
    eleventyConfig.addAsyncShortcode("image", async function imageShortcode(src, alt, cls = "", widths, sizes) {
        let file = relativeToInputPath(this.page.inputPath, src);
        const options = getOptions(widths);
        options["outputDir"] = path.join(eleventyConfig.dir.output, "img"); // Advanced usage note: `eleventyConfig.dir` works here because we're using addPlugin.
        let metadata = await eleventyImage(file, options);

        // TODO loading=eager and fetchpriority=high
        return eleventyImage.generateHTML(metadata, getImageAttributes(cls, alt, sizes));
    });

    eleventyConfig.addAsyncShortcode("imageContent", async function imageContentShortcode(src, alt, caption, cls = "", widths, sizes) {
        const escapeHtml = require("escape-html");
        const figCaption = caption || alt || "";
        const safeCaption = escapeHtml(figCaption);
        const safeAlt = escapeHtml(alt || "");

        let file = relativeToInputPath(this.page.inputPath, src);
        const options = getOptions(widths);
        options["outputDir"] = path.join(eleventyConfig.dir.output, "img"); // Advanced usage note: `eleventyConfig.dir` works here because we're using addPlugin.
        let metadata = await eleventyImage(file, options);

        const naturalWidth = Math.max(...Object.values(metadata)[0].map((img) => img.width));

        // GIFs are served as-is to preserve animation (eleventy-img would strip it)
        if (src.toLowerCase().endsWith(".gif")) {
            return `
<figure class="fr-content-media" role="group" aria-label="${safeCaption}">
    <div class="fr-content-media__img" style="max-width: ${naturalWidth}px">
        <img src="${escapeHtml(src)}" alt="${safeAlt}" class="${`fr-responsive-img fr-ratio-auto ${cls}`.trim()}" loading="lazy" decoding="async">
    </div>
    <figcaption class="fr-content-media__caption text-center">${safeCaption}</figcaption>
</figure>\n`;
        }

        return `
<figure class="fr-content-media" role="group" aria-label="${figCaption}">
    <div class="fr-content-media__img" style="max-width: ${naturalWidth}px">
        ${eleventyImage.generateHTML(metadata, getImageAttributes(cls, alt, sizes))}
    </div>
    <figcaption class="fr-content-media__caption text-center">${figCaption}</figcaption>
</figure>\n`;
    });

    // Synchronous method for Nunjucks macros
    eleventyConfig.addNunjucksShortcode("imageSync", function imageShortcode(src, alt, cls = "", widths, sizes) {
        let file = relativeToInputPath(this.page.inputPath, src);
        const options = getOptions(widths);
        options["outputDir"] = path.join(eleventyConfig.dir.output, "img"); // Advanced usage note: `eleventyConfig.dir` works here because we’re using addPlugin.
        // generate images, while this is async we don’t wait
        eleventyImage(file, options);

        // get metadata even if the images are not fully generated yet
        let metadata = eleventyImage.statsSync(file, options);
        return eleventyImage.generateHTML(metadata, getImageAttributes(cls, alt, sizes));
    });

    eleventyConfig.addFilter("resolvePath", (imagePath, page) => {
        return imagePath ? path.resolve(page.inputPath, "..", imagePath) : undefined;
    });
};
