function pressed(value) {
    const $ = element => document.getElementById(element)
    const innerText = (element, value = '') => $(element).innerText = value;

    let operation = $('operation').textContent
    let allSigns = ['/',',','*','+','-']
    let lastLetter = operation[operation.length -1]

    if (!operation && ['/',',','*','='].includes(value)) return

    if (allSigns.includes(lastLetter) && allSigns.includes(value)) return

    if ( value === '=' ) {
        if (allSigns.includes(lastLetter)) return
        return innerText('result', eval(operation))
    }

    if ( value === 'C') return innerText('operation', operation.slice(0, -1));
    if ( value === 'AC'){
        innerText('operation')
        innerText('result')
        return;
        }
    $('operation').innerText += value
}