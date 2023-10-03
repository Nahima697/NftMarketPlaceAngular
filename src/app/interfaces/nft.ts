import { creator } from "./createurs"
import { Gallery } from "./gallery"

export interface Nft {
      id:number,
      name: string,
      image: string,
      price: number,
      owner?:creator | any,
      Category: string,
      quantity: number,
      dropDate: Date,
      saleDate: Date,
      gallery:Gallery,
      categoryName: string
}




