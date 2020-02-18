var xs = [4, 5, 8, 1, 2, 36, 8, 4]

function includes(element) {
    for (var i = 0; i < xs.length; i++) {
        if (xs[i] == element) {
            return true
        } else {
            false
        }
    }
}