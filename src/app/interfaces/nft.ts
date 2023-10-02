import { creator } from "./createurs"

export interface Nft {
      id:number,
      name: string,
      image: string,
      price: number,
      owner:creator | any,
      Category: string,
      quantity: number,
      dropDate: Date,
      galleries: string[],
      categoryName: string

}
