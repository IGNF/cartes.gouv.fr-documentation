//booléen pour la validation du formulaire
let isFormValid = true;

//Listener pour le nombre de caractères restants du textarea
document.getElementById("input-message").addEventListener("input", function (e) {
    let num = 8000 - e.target.value.length;
    if (num > 1) {
        document.getElementById("remaining-characters").innerHTML = num + " caractères restants";
    } else {
        document.getElementById("remaining-characters").innerHTML = num + " caractère restant";
    }
});

//Récupération des alertes
fetch("https://data.geopf.fr/annexes/cartes.gouv.fr-config/public/alerts.json", { method: "GET" }).then(async function (res) {
    let result = await res.json();
    for (let i in result) {
        //si alerte concernant la page nous-ecrire
        if (result[i].visibility) {
            //ajout du HTML de l'alerte
            createAlertHTML(result[i]);
            //gestion de la visibilité et du style de l'alerte
            document.getElementById("contact-alert").classList.toggle("hidden");
            document.getElementById("contact-alert").classList.add("fr-notice--" + result[i].severity);
            break;
        }
    }
});

//fonction pour créer le HTML des alertes
let createAlertHTML = function (alert) {
    let container = document.createElement("div");
    container.classList.add("fr-container");
    container.setAttribute("name", "alert-container");
    let noticeBody = document.createElement("div");
    noticeBody.classList.add("fr-notice__body");
    let content = document.createElement("p");
    let title = document.createElement("span");
    title.classList.add("fr-notice__title");
    title.innerText = alert.title ? alert.title : "";
    let description = document.createElement("span");
    description.classList.add("fr-notice__desc");
    description.innerText = alert.description ? alert.description : "";
    let link = document.createElement("a");
    link.classList.add("fr-notice__link");
    if (alert.link) {
        link.setAttribute("title", alert.link.label + " - ouvre une nouvelle fenêtre");
        link.setAttribute("href", "https://cartes.gouv.fr" + alert.link.url);
        link.setAttribute("target", "_blank");
        link.innerText = alert.link.label;
    }
    let closeBtn = document.createElement("button");
    closeBtn.classList.add("fr-btn--close");
    closeBtn.classList.add("fr-btn");
    closeBtn.innerText = "Fermer";
    closeBtn.addEventListener("click", () => document.getElementById("contact-alert").classList.toggle("hidden"));

    content.append(title);
    content.append(description);
    content.append(link);
    noticeBody.append(content);
    noticeBody.append(closeBtn);
    container.append(noticeBody);
    document.getElementById("contact-alert").append(container);
};

//Fonction d'envoie du formulaire
let sendForm = function () {
    //récupération des valeurs du formulaire
    let formContent = {
        email_contact: document.getElementsByName("email_contact")[0].value,
        first_name: document.getElementsByName("first_name")[0].value.trim(),
        last_name: document.getElementsByName("last_name")[0].value.trim(),
        category: document.getElementsByName("category")[0].checked
            ? document.getElementsByName("category")[0].value
            : document.getElementsByName("category")[1].value,
        organization: document.getElementsByName("organization")[0].value.trim(),
        message: document.getElementsByName("message")[0].value,
        importance: document.getElementsByName("importance")[0].value,
    };

    //vérification de la validité du formulaire (met à jour le booléen isFormValid et affiche les messages d'erreurs si nécessaire)
    checkForm(formContent);

    //si le formulaire est valide, on envoie la requête POST vers la route "contact_us"
    if (isFormValid) {
        document.getElementById("waiting-screen").classList.toggle("hidden");

        fetch(window.location.origin + "/contact_us", {
            method: "POST",
            headers: {
                "X-Requested-With": "XMLHttpRequest",
            },
            body: JSON.stringify(formContent),
        })
            .then(async function (res) {
                if (!res.ok) {
                    //Gestion des erreurs
                    if (res.status.toString().match(/^5[0-9][0-9]$/)) {
                        throw new Error("Une erreur s'est produite lors de l'envoi de votre demande. Veuillez réessayer dans quelques instants.");
                    } else {
                        let result = await res.json();
                        throw new Error(result.error);
                    }
                } else {
                    //si le requête s'est bien passée
                    window.location.replace(window.location.origin + "/aide/fr/nous-ecrire/demande-envoyee");
                }
            })
            .catch(function (error) {
                document.getElementById("contact-error-content").innerText = error.message;
                document.getElementById("waiting-screen").classList.toggle("hidden");
                document.getElementById("contact-error").classList.toggle("hidden");
            });
    }
};

//Fonction de vérification de la validité du formulaire
let checkForm = function (formContent) {
    isFormValid = true;
    checkMail(formContent.email_contact);
    checkFirstName(formContent.first_name);
    checkLastName(formContent.last_name);
    checkOrganization(formContent.organization);
    checkMessage(formContent.message);
};

//Gestion de la validité du mail
let checkMail = function (mail) {
    document.getElementById("mail-input-group").classList.contains("fr-input-group--error")
        ? document.getElementById("mail-input-group").classList.toggle("fr-input-group--error")
        : null;
    document.getElementById("input-mail-messages-group").innerHTML = "";
    if (!mail || !mail.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/)) {
        document.getElementById("mail-input-group").classList.toggle("fr-input-group--error");
        document.getElementById("input-mail-messages-group").innerHTML = "<p class='fr-error-text'> Veuillez saisir une adresse email valide </p>";
        isFormValid = false;
    }
};

//Gestion de la validité du prénom
let checkFirstName = function (firstName) {
    document.getElementById("first-name-input-group").classList.contains("fr-input-group--error")
        ? document.getElementById("first-name-input-group").classList.toggle("fr-input-group--error")
        : null;
    document.getElementById("input-first-name-messages-group").innerHTML = "";
    if (!firstName) {
        document.getElementById("first-name-input-group").classList.toggle("fr-input-group--error");
        document.getElementById("input-first-name-messages-group").innerHTML = "<p class='fr-error-text'> Veuillez saisir votre prénom </p>";
        isFormValid = false;
    }
};

//Gestion de la validité du nom
let checkLastName = function (lastName) {
    document.getElementById("last-name-input-group").classList.contains("fr-input-group--error")
        ? document.getElementById("last-name-input-group").classList.toggle("fr-input-group--error")
        : null;
    document.getElementById("input-last-name-messages-group").innerHTML = "";
    if (!lastName) {
        document.getElementById("last-name-input-group").classList.toggle("fr-input-group--error");
        document.getElementById("input-last-name-messages-group").innerHTML = "<p class='fr-error-text'> Veuillez saisir votre nom </p>";
        isFormValid = false;
    }
};

//Gestion de la validité de l'organisation
let checkOrganization = function (organization) {
    document.getElementById("organization-input-group").classList.contains("fr-input-group--error")
        ? document.getElementById("organization-input-group").classList.toggle("fr-input-group--error")
        : null;
    document.getElementById("input-organization-messages-group").innerHTML = "";
    if (!organization && !document.getElementById("input-category-0").checked) {
        document.getElementById("organization-input-group").classList.toggle("fr-input-group--error");
        document.getElementById("input-organization-messages-group").innerHTML = "<p class='fr-error-text'> Veuillez saisir le nom de votre organisation </p>";
        isFormValid = false;
    }
};

//Gestion de la validité du message
let checkMessage = function (message) {
    document.getElementById("message-input-group").classList.contains("fr-input-group--error")
        ? document.getElementById("message-input-group").classList.toggle("fr-input-group--error")
        : null;
    document.getElementById("input-message-messages-group").innerHTML = "";
    if (message.length < 10) {
        document.getElementById("message-input-group").classList.toggle("fr-input-group--error");
        document.getElementById("input-message-messages-group").innerHTML =
            "<p class='fr-error-text'> Veuillez saisir une demande d’au moins 10 caractères </p>";
        isFormValid = false;
    }
};

//Gestion de l'affichage du champ "organisation" en fonction de la catégorie
let onCategoryChange = function () {
    if (document.getElementById("input-category-0").checked) {
        document.getElementById("organization-input-group").style.display = "none";
        document.getElementsByName("organization")[0].value = "";
    } else {
        document.getElementById("organization-input-group").style.display = "block";
    }
};
