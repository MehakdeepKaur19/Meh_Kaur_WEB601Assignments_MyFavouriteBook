import { Content } from 'C:/Users/mehak/Documents/GitHub/Meh_Kaur_WEB601Assignments_MyFavouriteBooks/Meh_Kaur_MyFavouriteBooks/src/app/helper-files/content-interface';
class ContentList {
    private _items: Content[];
    static contentCount =0;
    constructor(item: Content) {
    this._items = []; // initialize array
    this._items[0] = item;
    this.increaseCount();
    }
    get items(): Content[] {
        return this._items;
      }
    increaseCount() {
    return ContentList.contentCount++;
    }
    numberOfItem() : number {
        return this._items.length;
    }
    displayItem(index: number){
        let conItem = this._items[index];
        if (conItem){
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
        <img src = "${conItem.imgUrl}">
        </div>`;
        }
        else {
            return ('Index out of bounds');
        }
    }
    add(contentItem: Content){
        this._items.push(contentItem);
      }
    }
    export {ContentList};
    