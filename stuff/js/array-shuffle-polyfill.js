if (typeof Array.prototype.shuffle === 'undefined')
    Array.prototype.shuffle = function() {
        for (var i = 0; i < this.length; i++) {
            var randomIndex = Math.floor(Math.random() * this.length)
            var currentValue = this[i]
            this[i] = this[randomIndex]
            this[randomIndex] = currentValue
        }
    }

// demo

var alumni = [/*'abdou-bousiyd',*/
'alex-martinez',
'alex-park',
'ana-cano',
'aurora-perez',
'bamidele-aighewi',
'carlos-matilla',
'dario-fernandez',
/*'eduardo-wiater',*/
'enric-pedros',
'federico-lacabaratz',
'ferran-calvo',
'lisandro-bertoli',
/*'manuel-barzi',*/
'marc-salas',
'monica-morales',
'ramon-palao',
'ruben-ponce',
'sergi-bittan',
'sofia-costa',
'victori-murillo']

alumni.shuffle()