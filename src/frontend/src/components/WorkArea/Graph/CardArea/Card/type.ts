import {ICard} from "./ICard";
import {Dispatch} from "react";

export interface ICardComponent {
    card: ICard;
    // handleDragging: (dragging: boolean) => void;
    setExistSelectedCard: Dispatch<boolean>;
}