import {ICardPosition} from "./ICardPosition";

export interface ICard {
    id: number;
    title: string;
    position: ICardPosition;
}