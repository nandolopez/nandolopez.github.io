import type { IMenuIcon } from "./IMenuIcon";
import type { IMenuItem } from "./IMenuItem";

export interface IMenu{
    es: IMenuItem[];
    en: IMenuItem[];
    icons: IMenuIcon[];
    
}