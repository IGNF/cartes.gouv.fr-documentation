<#list features as feature>

    <h1>${feature.nom_ets.value}</h1>
    <p>${feature.adresse.value} (${feature.commune.value})</p>
    <p>${feature.lib_regime.value}</p>
    <a href="${feature.url_fiche.value}">lien</a>

</#list>