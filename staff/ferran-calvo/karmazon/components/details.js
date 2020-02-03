class  Details extends Component {
    constructor (props){
        super(document.createElement('div'));
        const details = this.container

        const content = document.createElement('article')
        details.append(content)

        const name = document.createElement('h1')
        name.innerHTML = props.name;
        content.append(name);

        const itemImage = document.createElement('img')
        itemImage.src = props.image;
        content.append(itemImage);

        const year =  document.createElement('h3')
        year.innerHTML= 'AÑO: ' + props.year;
        content.append(year);


        const maker = document.createElement('h3')
        maker.innerHTML='FABRICANTE: ' + props.maker
        content.append(maker)

        const description=document.createElement('p')
        description.innerHTML='DESCRIPCION: ' + props.description
        content.append(description);

        const price=document.createElement('h3')
        price.innerHTML=props.price + ' $';
        content.append(price);

        const url=document.createElement('a')
        url.innerHTML= 'Web Oficial'
        url.href= props.url
        url.target="_blank"

        
        details.classList.add('details')
        content.classList.add('details__content')
        content.append(url);
            
        details.addEventListener('click', function(e){
            if(e.target.classList.contains('details')){ 
                details.classList.remove('details__show')
                details.remove();
            }
        })

        return details
    }     
    
}