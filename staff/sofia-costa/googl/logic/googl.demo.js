var input = document.querySelector('input')

googl(input, function(results) { 

    results.forEach(function(result) { 
        console.log(result) 
    })
})