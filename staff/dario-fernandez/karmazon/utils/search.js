function search(url, callback){
    call('https://skylabcoders.herokuapp.com/proxy?url=' + url, undefined, function(response) {
        if(response instanceof Error) {
            return callback(response)
        }

        var data = JSON.parse(response.content)
        callback(data)   
    }
)
}