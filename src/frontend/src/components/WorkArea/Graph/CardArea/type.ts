import {Dispatch} from "react";

export interface ICardAreaComponent {
    viewport: {
        offset: {
            x: number;
            y: number;
        };
        zoom: number;
    };
    setExistSelectedCard: Dispatch<boolean>;
}