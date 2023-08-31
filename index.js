function loadHandler() {
    let button = document.querySelector('button');
    button.addEventListener('click', submitHandler)
}

function submitHandler(e) {
    e.preventDefault()
    let domains = document.querySelector('#domains').value
    let remove = document.querySelector('#negative').value
    console.log(`These are the domains from the deal:\n${domains}\nThis are the domains to be removed:\n${remove}`)

    domainRemover(domains,remove)
}

function domainRemover(domains,remove) {
    // This one removes the commas and makes new lines from the domains in the deal ID
    let rows = domains.replaceAll(/,/g,'\n')
    // This one removes line breaks and replaces them with '|'
    let regexRemove = remove.replaceAll(/\n/g,'|')
    console.log(`The domains from the deals in a column:\n${rows}`)
    // Makes the regex
    let regex = new RegExp(regexRemove,"g");
    // Outputs the regex after removal to results
    let results = rows.replace(regex,'')
    results = results.replace(/\n+/g,'\n')
    console.log(`The results:\n${results}`)
    // I want to put the results in the text area
    // I need to identify the textarea "results"
    document.querySelector('#results').value = results
    // I need to put those results in the textarea
    // So, it looks like my output is a regex.
    // I need to make my output receive a text value
}

window.addEventListener('load', loadHandler)