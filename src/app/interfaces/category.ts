import { Nft } from "./nft";

export interface Category

{
  id: number,
  wording: string,
  parent:string,
  image: string,
  nfts:Nft[]

}
