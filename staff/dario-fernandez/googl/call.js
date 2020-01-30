function call(url, callback) {
    var xhr = new XMLHttpRequest

    xhr.open('GET', url)

    xhr.addEventListener('load', function() {
        callback( {
            content: this.responseText,
            status: this.status
        } )
    })

    xhr.addEventListener('error', function() {
        callback(new Error('Network error'))
    })

    xhr.send()
}