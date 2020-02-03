class Results extends Component{
    constructor({ results, onClick }) {
        super(document.createElement('ul'))
        const list  = this.container
        list.classList.add('list')
        
        results.forEach(element => {
            const article = new Article(element, onClick)

            list.appendChild(article.container)
        })

        
    }
}