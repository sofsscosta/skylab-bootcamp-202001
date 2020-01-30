function call(url, callback){
    if (!( typeof url === 'string')) throw new TypeError('url should be a string');
    if (!( typeof callback === 'function')) throw new TypeError('callback should be a function');

    var xhr = new XMLHttpRequest;
    
    xhr.open('GET', url);

    xhr.addEventListener('load', function(){
        callback({
            content: this.responseText,
            status: this.status
        });
    });
    xhr.addEventListener('error', function(){
        callback(new Error('network error'))
    });

    xhr.send();
}