import { Content } from './content-interface';
class ContentList {
    private _items: Content[] =[];
    constructor() {}
    get items(): Content[]
     {
        return this._items;
      }
    add(contentItem: Content){
        this._items.push(contentItem);
      }
    numberOfItem() : number {
        return this._items.length;
    }
    displayItem(index: number){
        if (index >= 0 && index < this.items.length) {
        let conItem = this._items[index];
        // console.log("Title:" +conItem.title);
        // console.log("Description:" +conItem.description);
        // console.log("Creator:" +conItem.creator);
        // console.log("Type:" +conItem.type);
        // console.log("ImageUrl:" +conItem.imgUrl);
        return `<div>
        <h2>${conItem.title}</h2>
        <p>Description: ${conItem.description}</p>
        <p>Creator: ${conItem.creator}</p>
        <p>Type: ${conItem.type}</p>
        <img src = "${conItem.imgUrl} " alt="${conItem.title}">
        </div>`;
        }
        else {
            return ('Index out of bounds');
        }
    }
}
    export {ContentList};
    