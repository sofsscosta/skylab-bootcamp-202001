

// props tiene 2 propiedades: data y onClick
class Item extends Component {
    constructor({item: {id, name, thumbnail, price}, onClick}){
        super(document.createElement("article"))
         
        const item = this.container

        image.addEventListener("click", () => onClick(id))
        
        const _name = document.createElement("h2");
        _name.innerText = name;
        item.append(image)

        const image = document.createElement("img");
        image.src = thumbnail;
        item.append(image);

        const _price = document.createElement("span");
        _price.innerText = price + " €";
        item.append(_price);
    }
    
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