function call(url, callback) {
    const URL_REGEX = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/

    if(!(URL_REGEX.test(url))) {
        throw new SyntaxError(url + ' is not a valid url')
    }

    const xhr = new XMLHttpRequest

    xhr.open('GET', url)

    xhr.addEventListener('load', function() {
        callback( {
            content: this.responseText,
            status: this.status
        } )
    })

    xhr.addEventListener('error', () => callback(new Error('Network error')))

    xhr.send()
}