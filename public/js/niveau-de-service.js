//Récupération des alertes
const md = window.markdownit();

fetch("https://data.geopf.fr/annexes/cartes.gouv.fr-config/public/alerts.json", { method: "GET" }).then(async function (res) {
    //fetch("https://gpf-annex-qua.priv.geopf.fr/annexes/cartes.gouv.fr-config/public/alerts.json", { method: "GET" }).then(async function (res) {
    let result = await res.json();
    if (!result.length) {
        document.getElementById("service-alert").innerHTML = "<p>Aucune alerte en cours.</p>";
    } else {
        document.getElementById("service-alert").innerHTML = "";
        for (let i in result) {
            if (result[i].visibility.serviceLevel) {
                createAlertHTML(result[i]);
            }
        }
    }
});

let createAlertHTML = function (alert) {
    let div = document.createElement("div");

    div.classList.add("fr-alert");

    // severity peut valoir "info" | "warning" | "alert"
    // les classes DSFR sont "fr-alert--info" | "fr-alert--warning" | "fr-alert--error"
    let severity = alert.severity === "alert" ? "error" : alert.severity;
    div.classList.add("fr-alert--" + severity);

    let titre = document.createElement("h3");
    titre.classList.add("fr-alert__title");
    titre.innerText = alert.title ? alert.title : "";
    div.append(titre);

    if (alert.description) {
        let desc = document.createElement("p");
        desc.innerText = alert.description;
        div.append(desc);
    }

    if (alert.details) {
        let details = document.createElement("div");
        details.innerHTML = md.render(alert.details);
        div.append(details);
    }

    document.getElementById("service-alert").append(div);
};
