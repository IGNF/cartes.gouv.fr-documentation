const fs = require("node:fs");
const { parseEnv } = require("node:util");

module.exports = function () {
    const localEnv = fs.existsSync(".env.local") ? parseEnv(fs.readFileSync(".env.local", "utf8")) : {};
    const env = { ...localEnv, ...process.env };
    const enabled = env.geocaptcha_enabled ?? "false";

    if (enabled !== "true" && enabled !== "false") {
        throw new Error("geocaptcha_enabled doit valoir 'true' ou 'false'.");
    }
    if (enabled === "true" && !env.geocaptcha_url) {
        throw new Error("geocaptcha_url est requis lorsque le GéoCaptcha est activé.");
    }

    return {
        iamUrl: env.IAM_URL ?? "https://sso.geopf.fr",
        iamRealm: env.IAM_REALM ?? "geoplateforme",
        iamClientId: env.IAM_CLIENT_ID ?? "cartes-gouv-public",
        geocaptchaEnabled: enabled === "true",
        geocaptchaUrl: env.geocaptcha_url ?? "",
        clientGeocaptchaId: env.client_geocaptcha_id ?? "",
    };
};
