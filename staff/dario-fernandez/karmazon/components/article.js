class Article extends Component {
    constructor(result, onClick) {
        super(document.createElement('li'))
        
        const article = this.container
        
        article.classList.add('article')


        article.innerHTML = `<h3 class="article__name">${result.name}</h3>
            <img class="article__photo" src="${result.thumbnail}"></img>
            <span class="article__price">${result.price}$</span>`

        article.querySelector('img').addEventListener('click', () =>  {
            const id = result.id

            onClick(id)
        })

        article.querySelector('h3').addEventListener('click', () => {
            const id = result.id

            onClick(id)
        })
    }
}