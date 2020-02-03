class Item extends Component {
    constructor({item: { id, name, thumbnail, price }, onClick }) {
        super(document.createElement("article"))

        const item = this.container

        const list = document.createElement("ul");
        list.classList.add("list");

        const itemList = document.createElement("li");
        itemList.classList.add("item-list")

        const _name = document.createElement("h3");
        _name.innerText = name;
        _name.classList.add("item-name");

        const image = document.createElement("figure");
        const imagePhoto = document.createElement("img");
        imagePhoto.src = thumbnail;
        imagePhoto.classList.add("img-photo");

        const _price = document.createElement("span");
        _price.innerText = price + " €";
        _price.classList.add("item-price");

        image.append(imagePhoto);

        itemList.append(_name, image, _price);
        list.append(itemList);
        item.append(list);

        //const id = prop.id;

        image.addEventListener("click", () => onClick(id))
        
        //return itemList;
    }
}