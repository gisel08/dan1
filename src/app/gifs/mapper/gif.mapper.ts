import { GyphyItem } from "../interfaces/giphy.interfaces";
import { Gif } from "../interfaces/gif.interface";

export class GifMapper{
    static mapGiphyItemToGif(item:GyphyItem):Gif{
        return{
            id: item.id,
            title: item.title,
            url: item.images.original.url,
        };
    }
    static mapGiphyItemsToGifArray(items:GyphyItem[]):Gif[]{
        return items.map(this.mapGiphyItemToGif);
}
}