import { creator } from "./createurs";
import { Nft } from "./nft";
export interface Gallery
{
  id: number,
  name: string,
  quantity: number,
  purchase_date: Date,
  owner:creator|any,
  owner_id:number,
  ownerName: string,
  nft_id: number,
  nfts: Nft[],
  description:string,
  nftName: string
}
