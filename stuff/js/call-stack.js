setTimeout(function() {
    print(1)
    setTimeout(function() {
        print(2)
        setTimeout(function() {
            print(3)
        }, 1000)
    }, 1000)
}, 1000)

function print(n) { console.log(n) }

// TRY it on http://latentflip.com/loupe