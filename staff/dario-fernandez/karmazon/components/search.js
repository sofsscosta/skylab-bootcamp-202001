class Search extends Interactive{
    constructor({ onSubmit }) {
        super(document.createElement('section'))
        const search = this.container
        search.classList.add('search')

        search.innerHTML = `<form class="search__form"><input class="search__query" type="text" name="query" placeholder="Search...">'
            <button class="search__submit" type="submit"><i class="fas fa-search"></i></button></form>`
        
        search.addEventListener('submit', function(event) {
            event.preventDefault()

            const query = this.querySelector('form').query.value

            onSubmit(query)
        })
    }
    
    __locateFeedbackInContainer__(feedback) {
        this.container.append(feedback.container)
    }

    __removeFeedbackFromContainer__(feedback) {
        setTimeout(() => this.container.removeChild(feedback.container), 3000)
    }
}