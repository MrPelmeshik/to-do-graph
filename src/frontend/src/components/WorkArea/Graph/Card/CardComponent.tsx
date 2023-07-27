import React, {useState} from "react";
import {ICardComponent} from "./type";
import cardStyle from './style.module.css';
import {useDrop} from "react-dnd";
import {ICard} from "./ICard";

export const CardComponent: React.FC<ICardComponent>
    = ({card }) => {

    return <div className={[cardStyle.main, 'shadowCard', 'r-s'].join(' ')}
                style={{
                    left: card.position.left,
                    top: card.position.top
                }}
    >
        card #{card.id}
        <br/>
        def: (left: {card.position.left}; top: {card.position.top})
    </div>
}