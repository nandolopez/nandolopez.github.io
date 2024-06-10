import type { IPostData } from "./IPostData";

export interface IPost {
    id:string,
    body: string;
    collection: string;
    slug:string;
    data:IPostData
}