function Details(props){

    var details = document.createElement('div');
    var content = document.createElement('article')
    var name = document.createElement('h1')
    var itemImage = document.createElement('img');
    var year =  document.createElement('h3')
    var maker = document.createElement('h3')
    var description=document.createElement('p')
    var price=document.createElement('h3')
    var url=document.createElement('a')

    
    details.classList.add('details')
    content.classList.add('details__content')


    url.innerHTML= 'Web Oficial'
    url.href= props.url
    url.target="_blank"
    price.innerHTML=props.price + ' $';
    description.innerHTML='DESCRIPCION: ' + props.description;
    maker.innerHTML='FABRICANTE: ' + props.maker;
    year.innerHTML= 'AÑO: ' + props.year;
    name.innerHTML = props.name;
    itemImage.src = props.image;


    details.append(content)
    content.append(name);
    content.append(itemImage);
    content.append(year);
    content.append(maker);
    content.append(description);
    content.append(price);
    content.append(url);
    
    
    details.addEventListener('click', function(e){
        if(e.target.classList.contains('details')){ 
            details.classList.remove('details__show')
            details.remove();
        }
    })

    return details
   
}