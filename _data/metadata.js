module.exports = {
    title: "cartes.gouv.fr",
    url: "https://cartes.gouv.fr/aide",
    contact_form_url: "https://cartes.gouv.fr/nous-ecrire",
    site_url: "https://cartes.gouv.fr/aide",
    newsletter: [
        {
            url: "",
            title: "",
            description: "",
        },
    ],
    facebook_url: "",
    mastodon_url: "",
    twitter_url: "",
    instagram_url: "",
    linkedin_url: "",
    youtube_url: "",
    peertube_url: "",
    github_url: "",
    sourcehut_url: "",
    repository_url: "https://github.com/IGNF/cartes.gouv.fr-documentation",
    language: "fr",
    subtitle: "Aide",
    description: "Le service public des cartes et données du territoire",
    author: {
        name: "IGN",
        email: "geoplateforme@ign.fr",
        url: "https://cartes.gouv.fr/",
    },
    service: "Institut national de l'information géographique et forestière (IGN)",
    analytics: {
        domain: "acwg.cartes.gouv.fr",
        site: {
            entity: "IGN",
            environment: process.env.SITE_ENV || "development",
        },
    },
};
