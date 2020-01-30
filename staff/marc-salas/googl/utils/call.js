function call(url, callback){
    if (!( typeof url === 'string')) throw new TypeError('url should be a string');
    if (!( typeof callback === 'function')) throw new TypeError('callback should be a function');

    var xhr = new XMLHttpRequest;
    
    xhr.open('GET', url);

    xhr.onreadystatechange = function(){
        if (this.readyState === 4)
        callback({
            content: this.responseText,
            status: this.status
        });
    }
    xhr.send();
}