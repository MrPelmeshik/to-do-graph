import React, {useState} from "react";
import {ICardComponent} from "./type";
import css from './style.module.css';

export const CardComponent: React.FC<ICardComponent>
    = ({card }) => {

    return <div className={[css.main, 'shadowCard', 'r-s'].join(' ')}
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