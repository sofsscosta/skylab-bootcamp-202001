

// props tiene 2 propiedades: data y onClick
function Item({item: {id, name, thumbnail, price, index}, onClick, onToggle}) {
    return(
        <article onClick={()=>onClick(id)} key={index}>
            <h2>{name}</h2>
            <figure>
                <i class="far fa-heart" onClick={(event)=>{
                    event.preventDefault()
                    onToggle()
                }}></i>
            </figure>
            <img src={thumbnail}/>
            <span>{price} €</span>
        </article>
    )
    
}





























// function Item (prop){
//     var item = document.createElement("article");
//     Component.call(this, item);

//     var list = document.createElement("ul");
//     list.classList.add("list")

//     var itemList = document.createElement("li");
//     var name = document.createElement("h3");
//     name.innerText = prop.name;

//     var image = document.createElement("figure");
    
//     var imagePhoto = document.createElement("img");
//     var price = document.createElement("span");

//     imagePhoto.src = prop.thumbnail;
//     price.innerText = prop.price + " €";
    
    
//     image.append(imagePhoto);

//     itemList.append(name, image, price);
//     list.append(itemList);
//     item.appendChild(list);

//     var id = prop.id;
//     image.addEventListener("click", function(event){
//         event.preventDefault();

//         retrieveVehicle(id, function(itemResult){
//             //console.log(itemResult);
//             var _detail = new Detail(itemResult);
//             var ul = document.querySelector("ul");

//             ul.replaceWith(_detail.container)
//         });
        


//     })

//     return itemList;

// }

// Item.prototype = Object.create(Component.prototype);
// Item.prototype.constructor = Item;