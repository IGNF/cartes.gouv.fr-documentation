import Keycloak from "/js/keycloak.js";

(() => {
    const authContainer = document.getElementById("header-auth");
    if (!authContainer) return;

    const renderLoggedOut = () => {
        authContainer.innerHTML = `
            <button id="login-button" class="fr-icon-account-circle-fill fr-btn" type="button" title="Se connecter">Se connecter</button>
        `;
        document.getElementById("login-button")?.addEventListener("click", () => {
            keycloak.login({ redirectUri: window.location.href });
        });
    };

    const renderLoggedIn = async () => {
        const claims = keycloak.idTokenParsed || keycloak.tokenParsed || {};

        let displayName =
            (typeof claims.name === "string" && claims.name) ||
            [claims.given_name, claims.family_name].filter(Boolean).join(" ") ||
            (typeof claims.preferred_username === "string" && claims.preferred_username) ||
            (typeof claims.email === "string" && claims.email) ||
            "Compte";

        authContainer.innerHTML = `
            <span class="fr-icon-account-circle-fill fr-btn fr-mr-1w" aria-label="Utilisateur">${displayName}</span>
            <button id="logout-button" class="fr-btn fr-btn--tertiary fr-btn--sm" type="button">Se déconnecter</button>
        `;

        document.getElementById("logout-button")?.addEventListener("click", () => {
            keycloak.logout({ redirectUri: window.location.origin });
        });
    };

    const keycloak = new Keycloak({
        url: "",
        realm: "",
        clientId: "",
    });

    // "Authorization Code" flow avec PKCE (type de client Keycloak : Public).
    keycloak
        .init({
            onLoad: "check-sso",
            flow: "standard",
            pkceMethod: "S256",
            checkLoginIframe: false,
            silentCheckSsoRedirectUri: `${window.location.origin}/silent-check-sso.html`,
        })
        .then(async (authenticated) => {
            if (!authenticated) {
                renderLoggedOut();
                return;
            }

            await renderLoggedIn();

            // Si on veut garder le token à jour pour d'éventuelles futures appels API :
            // window.setInterval(() => {
            //     keycloak.updateToken(60).catch(() => {
            //         // Si le rafraîchissement échoue, on affiche simplement l'interface déconnectée.
            //         renderLoggedOut();
            //     });
            // }, 30_000);
        })
        .catch((error) => {
            console.error("Failed to initialize Keycloak", error);
            renderLoggedOut();
        });
})();
