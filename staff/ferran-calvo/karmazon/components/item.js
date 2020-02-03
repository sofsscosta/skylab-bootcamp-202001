class Item extends Component {
    constructor(props){
        super(document.createElement('li'))

        const item = this.container
        item.classList.add('item')

        const name = document.createElement('h3');
        name.innerText = props.results.name;
        item.append(name);

        const image = document.createElement('img');
        image.src = props.results.thumbnail;
        item.append(image);


        const price = document.createElement('span');
        price.innerText = props.results.price + " $";
        item.append(price);

        item.addEventListener('click', function(e){
            e.preventDefault();
            props.onClick();
        })
        return item;
    }
}
    


    

