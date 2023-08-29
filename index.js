function loadHandler() {
    let button = document.querySelector('button');
    button.addEventListener('click', submitHandler)
}

function submitHandler() {
    let domains = document.querySelector('#domains').value
    let remove = document.querySelector('#negative').value
    console.log(domains,remove)

    domainRemover(domains,remove)
}

function domainRemover(domains,remove) {
    let rows = domains.replaceAll(/,/g,'\n')
    let regexRemove = remove.replaceAll(/\n/g,'|')
    let regex = new RegExp(regexRemove,"g");
    console.log(rows.replace(regex,''));
    let result = rows.replace(regex,'')
    // I want to put the results in the text area
    // I need to identify the textarea "results"
    document.querySelector('#results').value = result
    // I need to put those results in the textarea
    // So, it looks like my output is a regex.
    // I need to make my output receive a text value
}

window.addEventListener('load', loadHandler)