let isFormValid = true;

document.getElementById("input-message").addEventListener("input", function (e) {
    let num = 8000 - e.target.value.length;
    if (num > 1) {
        document.getElementById("remaining-characters").innerHTML = num + " caractères restants";
    } else {
        document.getElementById("remaining-characters").innerHTML = num + " caractère restant";
    }
});

let sendForm = function () {
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

    checkForm(formContent);

    if (isFormValid) {
        console.log("send form");
        fetch("https://localhost/cartes.gouv.fr/contact_us", {
            method: "POST",
            body: JSON.stringify(formContent),
        })
            .then(function (res) {
                console.log(res);
            })
            .catch(function (res) {
                console.log(res);
            });
    }
};

let checkForm = function (formContent) {
    isFormValid = true;
    checkMail(formContent.email_contact);
    checkFirstName(formContent.first_name);
    checkLastName(formContent.last_name);
    checkOrganization(formContent.organization);
    checkMessage(formContent.message);
};

let checkMail = function (mail) {
    document.getElementById("mail-input-group").classList.contains("fr-input-group--error")
        ? document.getElementById("mail-input-group").classList.toggle("fr-input-group--error")
        : null;
    document.getElementById("input-mail-messages-group").innerHTML = "";
    if (!mail || !mail.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/)) {
        console.log("error mail");
        document.getElementById("mail-input-group").classList.toggle("fr-input-group--error");
        document.getElementById("input-mail-messages-group").innerHTML = "<p class='fr-error-text'> Veuillez saisir une adresse email valide </p>";
        isFormValid = false;
    }
};

let checkFirstName = function (firstName) {
    document.getElementById("first-name-input-group").classList.contains("fr-input-group--error")
        ? document.getElementById("first-name-input-group").classList.toggle("fr-input-group--error")
        : null;
    document.getElementById("input-first-name-messages-group").innerHTML = "";
    if (!firstName) {
        console.log("error mandatory first name");
        document.getElementById("first-name-input-group").classList.toggle("fr-input-group--error");
        document.getElementById("input-first-name-messages-group").innerHTML = "<p class='fr-error-text'> Veuillez saisir votre prénom </p>";
        isFormValid = false;
    }
};

let checkLastName = function (lastName) {
    document.getElementById("last-name-input-group").classList.contains("fr-input-group--error")
        ? document.getElementById("last-name-input-group").classList.toggle("fr-input-group--error")
        : null;
    document.getElementById("input-last-name-messages-group").innerHTML = "";
    if (!lastName) {
        console.log("error mandatory last name");
        document.getElementById("last-name-input-group").classList.toggle("fr-input-group--error");
        document.getElementById("input-last-name-messages-group").innerHTML = "<p class='fr-error-text'> Veuillez saisir votre nom </p>";
        isFormValid = false;
    }
};

let checkOrganization = function (organization) {
    document.getElementById("organization-input-group").classList.contains("fr-input-group--error")
        ? document.getElementById("organization-input-group").classList.toggle("fr-input-group--error")
        : null;
    document.getElementById("input-organization-messages-group").innerHTML = "";
    if (!organization) {
        console.log("error mandatory organization");
        document.getElementById("organization-input-group").classList.toggle("fr-input-group--error");
        document.getElementById("input-organization-messages-group").innerHTML = "<p class='fr-error-text'> Veuillez saisir le nom de votre organisation </p>";
        isFormValid = false;
    }
};

let checkMessage = function (message) {
    document.getElementById("message-input-group").classList.contains("fr-input-group--error")
        ? document.getElementById("message-input-group").classList.toggle("fr-input-group--error")
        : null;
    document.getElementById("input-message-messages-group").innerHTML = "";
    if (message.length < 10) {
        console.log("error message too short");
        document.getElementById("message-input-group").classList.toggle("fr-input-group--error");
        document.getElementById("input-message-messages-group").innerHTML =
            "<p class='fr-error-text'> Veuillez saisir une demande d’au moins 10 caractères </p>";
        isFormValid = false;
    }
};
