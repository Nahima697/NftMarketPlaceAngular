import { SocialUser } from "@abacritt/angularx-social-login";
import { creator } from "./createurs";

export interface User
 {
  id?:number;
  firstName:string;
  lastName:string;
  username:string;
  avatar?:string;
  description?:string;
  email:string;
  password:string;
  roles?:string,
  artworksCount?:creator;
  totalSales?:creator;
 }

 export interface TokenUser {
token:string;
user:User | SocialUser;
 }
