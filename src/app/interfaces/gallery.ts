import { creator } from "./createurs";
import { Nft } from "./nft";
export interface Gallery
{
  id?: number,
  name: string,
  quantity?: number,
  owner:creator|any,
  nft_id?: number,
  nfts?: Nft[],
  description?:string,
  nftName?: string
}
