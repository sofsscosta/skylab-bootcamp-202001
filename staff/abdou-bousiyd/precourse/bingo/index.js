const messages = {
    login: 'Please put your name...',
    gameOver: 'Game Over.',
    welcome: 'Do you want to generate a card and the first number?',
    showCarton: 'This is your card',
    keepPlaying: 'Do you want to keep playing?'
}

class Bingo { 
    constructor() {
        this.username = 'Jhon Doe'
        this.cards = []
        this.number = 0
        this.total = 0
        this.gameCompleted = false
    }

    print(messages) {
        console.log(messages)
    }

    loginUser() {
        let user = prompt(messages.login)
        return (!user) ? this.loginUser() : this.username = user
    }

    welcome() {
        let startGame = confirm(messages.welcome)
        if (!startGame) return this.print(messages.gameOver)
    }

    getRandomInt() {
        return Math.floor(Math.random() * 10 ) + 5;
    }

    createCard() {
        this.cards = [...new Array(3)].map(() => Array.from({length: 5}, () => this.getRandomInt()))
    }

    printCarton() {
        this.print(messages.showCarton)
        this.cards.forEach(card => this.print(`${card.join(' | ')} \n`))
    }

    generateNumber() {
        this.number = this.getRandomInt()
        this.total++
        this.print(`Generated number: ${this.number}`)
        this.verificarCarton()
        this.keepPlaying()
    }

    replaceMatchingNumber(card) {
        if (card.includes(this.number)) {
            card[card.indexOf(this.number)] = "X"
            return card
        }
        return card
    }

    verificarCarton() {
        this.cards = this.cards.map(this.replaceMatchingNumber.bind(this)) 
        if (this.cards.flat().join('') === 'X'.repeat(15)) this.gameCompleted = true
        this.printCarton()
    }

    keepPlaying() {
        if (this.gameCompleted) return this.print(`Complete line with ${this.total} of total numbers`)
        return confirm(messages.keepPlaying) ? this.generateNumber() : this.print(messages.gameOver)
    }

    init() {
        this.loginUser()
        this.welcome()
        this.createCard()
        this.printCarton()
        this.generateNumber()
    }
}
let bingo = new Bingo()
bingo.init()