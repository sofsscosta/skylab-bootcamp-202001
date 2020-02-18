if (typeof Array.prototype.shuffle === 'undefined')
    Array.prototype.shuffle = function() {
        for (var i = 0; i < this.length; i++) {
            var randomIndex = Math.floor(Math.random() * this.length)
            var currentValue = this[i]
            this[i] = this[randomIndex]
            this[randomIndex] = currentValue
        }

        return this
    }